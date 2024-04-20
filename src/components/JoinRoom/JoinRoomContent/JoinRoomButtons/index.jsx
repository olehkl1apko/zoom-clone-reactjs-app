import { useNavigate } from "react-router-dom";

import "./styles.css";
import { JoinRoomButton } from "./JoinRoomButton";

export const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }) => {
  const navigate = useNavigate();

  return (
    <div className="join_room_buttons_container">
      <JoinRoomButton
        buttonText={isRoomHost ? "Host" : "Join"}
        onClickHandler={handleJoinRoom}
      />
      <JoinRoomButton
        buttonText="Cancel"
        cancelButton
        onClickHandler={() => navigate("/")}
      />
    </div>
  );
};
