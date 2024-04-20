import "./styles.css";

export const JoinRoomTitle = ({ isRoomHost }) => {
  return (
    <p className="join_room_title">
      {isRoomHost ? "Host meeting" : "Join meeting"}
    </p>
  );
};
