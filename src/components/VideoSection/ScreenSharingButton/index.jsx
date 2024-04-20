import { useState } from "react";

import { ScreenSharingPreview } from "./ScreenSharingPreview";
import SwitchImg from "@/resources/images/switchToScreenSharing.svg";
import { toggleScreenShare } from "@/utils/webRTCHandler";

const constraints = {
  audio: false,
  video: true,
};

export const ScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const [screenSharingStream, setScreenSharingStream] = useState(null);

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occurred when trying to get an access to screen share stream"
        );
      }
      if (stream) {
        setScreenSharingStream(stream);

        toggleScreenShare(isScreenSharingActive, stream);
        setIsScreenSharingActive(true);
        // execute here function to switch the video track which we are sending to other users
      }
    } else {
      toggleScreenShare(isScreenSharingActive);
      setIsScreenSharingActive(false);

      // stop screen share stream
      screenSharingStream.getTracks().forEach((t) => t.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <>
      <button className="video_button_container">
        <img
          src={SwitchImg}
          onClick={handleScreenShareToggle}
          className="video_button_image"
        />
      </button>
      {isScreenSharingActive && (
        <ScreenSharingPreview stream={screenSharingStream} />
      )}
    </>
  );
};
