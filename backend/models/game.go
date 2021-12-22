package models

type Game struct {
	Name string
	TimePerRound int
	Players []Player
	ActivePlayer *Player
	Host *Player
	Ingame bool
	CustomWords []string
	Rounds int
	ActiveRound int
	Clients []chan Event
}