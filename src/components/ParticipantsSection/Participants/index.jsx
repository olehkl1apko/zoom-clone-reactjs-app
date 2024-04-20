import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { setActiveConversation } from "@/store/slice";
import { ParticipantItem } from "./ParticipantItem";
import { selectParticipants, selectSocketId } from "@/store/selectors";

export const Participants = () => {
  const participants = useSelector(selectParticipants);
  const socketId = useSelector(selectSocketId);
  const dispatch = useDispatch();

  const handleActiveConversation = (activeConversation) => {
    dispatch(setActiveConversation(activeConversation));
  };

  return (
    <div className="participants_container">
      {participants.map((participant, index) => {
        return (
          <ParticipantItem
            key={participant.identity}
            lastItem={participants.length === index + 1}
            participant={participant}
            identity={participant.identity}
            handleActiveConversation={handleActiveConversation}
            socketId={socketId}
          />
        );
      })}
    </div>
  );
};
