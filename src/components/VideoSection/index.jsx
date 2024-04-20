import { useSelector } from "react-redux";

import "./styles.css";
import { CameraButton } from "./CameraButton";
import { LeaveRoomButton } from "./LeaveRoomButton";
import { MicButton } from "./MicButton";
import { ScreenSharingButton } from "./ScreenSharingButton";
import { selectConnectOnlyWithAudio } from "@/store/selectors";

export const VideoSection = () => {
  const connectOnlyWithAudio = useSelector(selectConnectOnlyWithAudio);

  return (
    <div className="video_section_container">
      <div className="video_buttons_container">
        <MicButton />
        {!connectOnlyWithAudio && <CameraButton />}
        <LeaveRoomButton />
        {!connectOnlyWithAudio && <ScreenSharingButton />}
      </div>
    </div>
  );
};
