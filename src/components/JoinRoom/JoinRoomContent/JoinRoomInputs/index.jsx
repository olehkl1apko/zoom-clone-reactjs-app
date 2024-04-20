import "./styles.css";
import { Input } from "./Input";

export const JoinRoomInputs = ({
  roomIdValue,
  setRoomIdValue,
  nameValue,
  setNameValue,
  isRoomHost,
}) => {
  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <Input
          placeholder="Enter meeting ID"
          value={roomIdValue}
          changeHandler={(event) => setRoomIdValue(event.target.value)}
        />
      )}
      <Input
        placeholder="Enter your Name"
        value={nameValue}
        changeHandler={(event) => setNameValue(event.target.value)}
      />
    </div>
  );
};
