package models

type EventJSON struct {
	Event string `json:"event"`
	Author int `json:"author"`
	Payload map[string]interface{} `json:"payload"`
}