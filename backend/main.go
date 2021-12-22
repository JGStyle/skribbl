package main

import (
	"backend/models"
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
}



var mutex = sync.Mutex{}
var games = map[string]*models.Game{}

func HandleWebsocketClient(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	defer mutex.Unlock()
	mutex.Lock()
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("Error while upgrading connection: %s\n", err.Error())
		w.WriteHeader(400)
		return
	}
	room_, ok := r.URL.Query()["room"]
	if !ok || len(room_[0]) < 1 {
		w.WriteHeader(400)
		return
	}
	room := room_[0]
	if _, ok := games[room]; !ok {
		games[room] = &models.Game{ Players: []models.Player{}, Ingame: false, Name: "", TimePerRound: 0, CustomWords: []string{}, Rounds: 0, ActiveRound: 0, Clients: []chan models.Event{} }
	}
	channel := make(chan models.Event)
	games[room].Clients = append(games[room].Clients, channel)
	userID := generateUID()
	go ListenForEvents(conn, channel, userID)
	go sendEvents(conn, channel, userID, games[room])
}

func ListenForEvents(socket *websocket.Conn, channel chan models.Event, userID int) {
	for message := range channel {
		if userID != message.ExcludeUser {
			socket.WriteMessage(message.EventType, message.DataBeingSent)
		}
	}
}

func generateUID() int {
	rand.Seed(time.Now().UnixNano())
	return int(rand.Int31n(100000))
}

func sendEvents(socket *websocket.Conn, channel chan models.Event, userID int, game *models.Game) {
	for {
		messageType, message, err := socket.ReadMessage()
		if err != nil {
			mutex.Lock()
			close(channel)
			for i, client := range game.Clients {
				if client == channel {
					game.Clients = append(game.Clients[:i], game.Clients[i+1:]...)
					continue // To make sure the client leaving doesn't recieve the leave event
				}
				data := models.EventJSON{ Event: "game:leave", Author: -1, Payload: map[string]interface{}{"user_id": userID}, Room: ""} 
				payload, _ := json.Marshal(data)
				client <- models.Event{ EventType: websocket.TextMessage, DataBeingSent: payload, ExcludeUser: -1}
			}
			for i, player := range game.Players {
				if player.Id == userID {
					game.Players = append(game.Players[:i], game.Players[i+1:]...)
				}
			}
			mutex.Unlock()
			return
		}
		mutex.Lock()
			if messageType == websocket.BinaryMessage {
				for _, client := range game.Clients {
					client <- models.Event{ EventType: messageType, DataBeingSent: message, ExcludeUser: userID }
				}
			} else {
				event := models.EventJSON{}
				err := json.Unmarshal(message, &event)
				event.Author = userID
				newMessage, _ := json.Marshal(event)
				if err != nil {
					continue
				}
				switch event.Event {
				case "chat:msg":
					for _, client := range game.Clients {
						client <- models.Event{ EventType: websocket.TextMessage, DataBeingSent: newMessage, ExcludeUser: userID }
					}
				case "chat:guess":
				case "chat:typing":
					for _, client := range game.Clients {
						client <- models.Event{ EventType: websocket.TextMessage, DataBeingSent: newMessage, ExcludeUser: userID }
					}
				case "lobby:join":
					p := models.Player{Id: userID, Points: 0, Score: 0, Name: event.Payload["name"].(string), Color: event.Payload["color"].(string), Profile: event.Payload["profile"].(string) }
					game.Players = append(game.Players, p)
					for _, client := range game.Clients {
						client <- models.Event{ EventType: websocket.TextMessage, DataBeingSent: newMessage, ExcludeUser: userID }
					}
					players_exp, _ := json.Marshal(game.Players) 
					arr := map[string]interface{} {"players" : string(players_exp)}
					individual, _ := json.Marshal(models.EventJSON{ Event: "lobby:initial", Payload: arr })
					socket.WriteMessage(websocket.TextMessage, individual)
				case "lobby:start":
					// tpr := event.Payload["timePerRound"]
					// name := event.Payload["name"]
					// custom := event.Payload["words"]
					// rounds := event.Payload["rounds"]

					for _, client := range game.Clients {
						client <- models.Event{ EventType: websocket.TextMessage, DataBeingSent: newMessage, ExcludeUser: userID }
					}
					
					
				case "game:turn":
				case "game:turnout":
				case "game:over":
				case "game:select":
				}
			}
		
		mutex.Unlock()
	}
}

func main() {
	upgrader.CheckOrigin = func(r *http.Request) bool {
		return true
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	http.HandleFunc("/ws", HandleWebsocketClient)
	log.Println("Running on port:  " + port)
	http.ListenAndServe(":" + port, nil)
}