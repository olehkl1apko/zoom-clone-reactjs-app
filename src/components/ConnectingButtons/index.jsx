import { ConnectingButton } from "./ConnectingButton";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const ConnectingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={() => navigate("/join-room")}
      />
      <ConnectingButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={() => navigate("/join-room?host=true")}
      />
    </div>
  );
};
