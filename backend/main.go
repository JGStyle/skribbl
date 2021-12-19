package main

import (
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

type Event struct {
	EventType int
	Author int
	Payload []byte
}

type EventJSON struct {
	Event string `json:"event"`
	Author int `json:"author"`
	Room string `json:"room"`
	Payload interface{} `json:"payload"`
}


var mutex = sync.Mutex{}
var clients = []chan Event{}

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
	channel := make(chan Event)
	clients = append(clients, channel)
	userID := generateUID()
	go ListenForEvents(conn, channel, userID)
	go SendDrawEvents(conn, channel, userID)
}

func ListenForEvents(socket *websocket.Conn, channel chan Event, userID int) {
	for message := range channel {
		if userID != message.Author {
			socket.WriteMessage(message.EventType, message.Payload)
		}
	}
}

func generateUID() int {
	rand.Seed(time.Now().UnixNano())
	return int(rand.Int31n(100000))
}

func SendDrawEvents(socket *websocket.Conn, channel chan Event, userID int) {
	for {
		messageType, message, err := socket.ReadMessage()
		if err != nil {
			mutex.Lock()
			close(channel)
			for i, client := range clients {
				if client == channel {
					clients = append(clients[:i], clients[i+1:]...)
				}
			}
			mutex.Unlock()
			return
		}
		mutex.Lock()
			if messageType == websocket.BinaryMessage {
				for _, client := range clients {
					client <- Event{ EventType: messageType, Payload: message, Author: userID }
				}
			} else {
				event := EventJSON{}
				err := json.Unmarshal(message, &event)
				event.Author = userID
				newMessage, _ := json.Marshal(event)
				if err != nil {
					continue
				}
				for _, client := range clients {
					switch event.Event {
					case "msg:chat":
						client <- Event{ EventType: websocket.TextMessage, Payload: newMessage, Author: userID }
					case "msg:guess":
					case "msg:typing":
					case "lobby:join":
					case "lobby:start":
					case "game:turn":
					case "game:turnout":
					case "game:over":
					case "game:kick":
					case "game:select":
						
					}
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