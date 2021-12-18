import { FC, useState, createContext } from "react";
import SocketContextI from "../../models/SocketContextI";

export const SocketContext = createContext<SocketContextI>({
  socket: null,
  setSocket: (socket: WebSocket) => {},
});

const SocketContextProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  return (
    <>
      <SocketContext.Provider
        value={{
          socket,
          setSocket,
        }}
      >
        {children}
      </SocketContext.Provider>
    </>
  );
};

export default SocketContextProvider;
