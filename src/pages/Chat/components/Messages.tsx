import { Messages as MessagesInterface } from "../../../interface/Messages.interface";
import styles from "../chat.module.css";

export default function Messages({
  messages,
}: {
  messages: MessagesInterface[];
}) {
  const name = localStorage.getItem("name");
  return (
    <div className={styles.messages}>
      {messages.map((message, index) => (
        <p
          key={index}
          className={`${
            message.name === name ? styles.myMessage : styles.otherMessage
          }`}
        >
          <span>{message.name}</span> : &nbsp;{message.message}
        </p>
      ))}
    </div>
  );
}
