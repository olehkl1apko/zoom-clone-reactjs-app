import { useSelector } from "react-redux";

import "./styles.css";
import { MessageItem } from "./MessageItem";
import { selectMessages } from "@/store/selectors";

export const Messages = () => {
  const messages = useSelector(selectMessages);
  return (
    <div className="messages_container">
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 && message.identity === messages[index - 1].identity;

        return (
          <MessageItem
            key={`${message.content}${index}`}
            author={message.identity}
            content={message.content}
            sameAuthor={sameAuthor}
            messageCreatedByMe={message.messageCreatedByMe}
          />
        );
      })}
    </div>
  );
};
