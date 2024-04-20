import { useState } from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import sendMessageButton from "@/resources/images/sendMessageButton.svg";
import { selectActiveConversation, selectIdentity } from "@/store/selectors";
import * as wss from "@/utils/wss";

export const NewMessage = () => {
  const [message, setMessage] = useState("");
  const activeConversation = useSelector(selectActiveConversation);
  const identity = useSelector(selectIdentity);

  const sendMessage = () => {
    wss.sendDirectMessage({
      receiverSocketId: activeConversation.socketId,
      identity: identity,
      messageContent: message,
    });

    setMessage("");
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="new_message_container new_message_direct_border">
      <input
        className="new_message_input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message.."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        className="new_message_button"
        src={sendMessageButton}
        onClick={sendMessage}
      />
    </div>
  );
};
