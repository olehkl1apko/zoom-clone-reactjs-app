import "./styles.css";
import { Messages } from "./Messages";
import { NewMessage } from "./NewMessage";

export const ChatSection = () => {
  return (
    <div className="chat_section_container">
      <h3 className="chat_label">CHAT</h3>
      <Messages />
      <NewMessage />
    </div>
  );
};
