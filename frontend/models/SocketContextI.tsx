export default interface SocketContextI {
  socket: WebSocket | null;
  setSocket: (socket: WebSocket) => void;
}
