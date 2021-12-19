package models

type Player struct {
	Id int `json:"id"`
	Name string `json:"name"`
	Color string `json:"color"`
	Profile string `json:"profile"`
	Score int `json:"score"`
	Points int `json:"points"`
}