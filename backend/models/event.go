package models

type Event struct {
	EventType int
	ExcludeUser int
	DataBeingSent []byte
}