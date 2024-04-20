import "./styles.css";

export const JoinRoomTitle = ({ isRoomHost }) => {
  return (
    <h1 className="join_room_title">
      {isRoomHost ? "Host meeting" : "Join meeting"}
    </h1>
  );
};
