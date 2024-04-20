import { useState } from "react";

import MicButtonImg from "@/resources/images/mic.svg";
import MicButtonImgOff from "@/resources/images/micOff.svg";
import { toggleMic } from "@/utils/webRTCHandler";

export const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    toggleMic(isMicMuted);
    setIsMicMuted(!isMicMuted);
  };

  return (
    <button className="video_button_container">
      <img
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
        className="video_button_image"
      />
    </button>
  );
};
