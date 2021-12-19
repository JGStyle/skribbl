package models

type EventJSON struct {
	Event string `json:"event"`
	Author int `json:"author"`
	Room string `json:"room"`
	Payload map[string]interface{} `json:"payload"`
}