import { useEffect, useState } from "react";
import Messages from "./components/Messages";
import { Messages as MessagesInterface } from "../../interface/Messages.interface";
import { Socket, io } from "socket.io-client";
import styles from "./chat.module.css";

const socket: Socket = io("http://localhost:8000");

export default function Chat() {
  const [messages, setMessages] = useState<MessagesInterface[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      name: localStorage.getItem("name"),
      message: value,
    });

    setValue("");
  };

  return (
    <div className={styles.container}>
      <Messages messages={messages} />

      <form className={styles.input} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
