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


var mutex = sync.Mutex{}
var clients = []chan []byte{}

func HandleWebsocketClient(w http.ResponseWriter, r *http.Request) {
	defer mutex.Unlock()
	mutex.Lock()
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("Error while upgrading connection: %s\n", err.Error())
		w.WriteHeader(400)
		return
	}
	channel := make(chan []byte)
	clients = append(clients, channel)
	go ListenForEvents(conn, channel)
	go SendDrawEvents(conn, channel)
}

func ListenForEvents(socket *websocket.Conn, channel chan []byte) {
	for message := range channel {
		socket.WriteMessage(websocket.BinaryMessage, message)
	}
}

func SendDrawEvents(socket *websocket.Conn, channel chan []byte) {
	for {
		_, message, err := socket.ReadMessage()
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
				client <- message
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