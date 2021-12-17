package main

import (
	"log"
	"net/http"
	"os"
	"sync"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
}

type Event struct {
	EventType int
	Payload []byte
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
	go ListenForEvents(conn, channel)
	go SendDrawEvents(conn, channel)
}

func ListenForEvents(socket *websocket.Conn, channel chan Event) {
	for message := range channel {
		socket.WriteMessage(message.EventType, message.Payload)
	}
}

func SendDrawEvents(socket *websocket.Conn, channel chan Event) {
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
		for _, client := range clients {
			if client != channel {
				client <- Event{ EventType: messageType, Payload: message }
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