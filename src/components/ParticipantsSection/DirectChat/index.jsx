import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import { Messages } from "./Messages";
import { NewMessage } from "./NewMessage";
import { getDirectChatHistory } from "@/helpers";
import {
  selectActiveConversation,
  selectDirectChatHistory,
} from "@/store/selectors";

export const DirectChat = () => {
  const [messages, setMessages] = useState([]);
  const activeConversation = useSelector(selectActiveConversation);
  const directChatHistory = useSelector(selectDirectChatHistory);

  useEffect(() => {
    setMessages(
      getDirectChatHistory(
        directChatHistory,
        activeConversation ? activeConversation.socketId : null
      )
    );
  }, [activeConversation, directChatHistory]);

  return (
    <div className="direct_chat_container">
      <h3 className="direct_chat_header">
        {activeConversation ? activeConversation.identity : ""}
      </h3>
      <Messages messages={messages} />
      <NewMessage />
      {!activeConversation && (
        <div className="conversation_not_chosen_overlay">
          <p className="conversation_not_chosen_overlay_text">
            Conversation not chosen
          </p>
        </div>
      )}
    </div>
  );
};
