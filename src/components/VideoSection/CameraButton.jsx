import { useState } from "react";

import CameraButtonImg from "@/resources/images/camera.svg";
import CameraButtonImgOff from "@/resources/images/cameraOff.svg";
import { toggleCamera } from "@/utils/webRTCHandler";

export const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    toggleCamera(isLocalVideoDisabled);
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <button className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
      />
    </button>
  );
};
