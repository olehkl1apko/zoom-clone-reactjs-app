import { useEffect } from "react";
import { useSelector } from "react-redux";

// import { ChatSection } from "@/components/ChatSection";
import { ParticipantsSection } from "@/components/ParticipantsSection";
// import { VideoSection } from "@/components/VideoSection";
import { getLocalPreviewAndInitRoomConnection } from "@/utils/webRTCHandler";

import "./styles.css";
import {
  selectConnectOnlyWithAudio,
  selectIdentity,
  selectIsRoomHost,
  selectRoomId,
  selectShowOverlay,
} from "@/store/selectors";

const RoomPage = () => {
  const roomId = useSelector(selectRoomId);
  const identity = useSelector(selectIdentity);
  const isRoomHost = useSelector(selectIsRoomHost);
  const showOverlay = useSelector(selectShowOverlay);
  const connectOnlyWithAudio = useSelector(selectConnectOnlyWithAudio);

  useEffect(() => {
    if (!isRoomHost && !roomId) {
      const siteUrl = window.location.origin;
      window.location.href = siteUrl;
    } else {
      getLocalPreviewAndInitRoomConnection(
        isRoomHost,
        identity,
        roomId,
        connectOnlyWithAudio
      );
    }
  }, []);

  return (
    <div className="room_container">
      <ParticipantsSection />
      {/* <VideoSection />
      <ChatSection /> */}
      <div className="room_label">
        <p className="room_label_paragraph">ID: {roomId} </p>
      </div>
      {showOverlay && (
        <div className="overlay_container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
