import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { JoinRoomInputs } from "./JoinRoomInputs";
import { OnlyWithAudioCheckbox } from "./OnlyWithAudioCheckbox";
import { JoinRoomButtons } from "./JoinRoomButtons";
import { ErrorMessage } from "@/components/ErrorMessage";
import { setConnectOnlyWithAudio, setIdentity, setRoomId } from "@/store/slice";
import {
  selectConnectOnlyWithAudio,
  selectIsRoomHost,
} from "@/store/selectors";
import { getRoomExists } from "@/utils/api";

export const JoinRoomContent = () => {
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const isRoomHost = useSelector(selectIsRoomHost);
  const connectOnlyWithAudio = useSelector(selectConnectOnlyWithAudio);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJoinRoom = async () => {
    dispatch(setIdentity(nameValue));
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    const { roomExists, full } = await getRoomExists(roomIdValue);

    if (roomExists) {
      if (full) {
        setErrorMessage(
          "Meeting is full (4 and more participants). Please try again later."
        );
      } else {
        // Join the room and navigate to the room page
        dispatch(setRoomId(roomIdValue));
        navigate("/room");
      }
    } else {
      setErrorMessage(
        "Meeting not found. Check your meeting ID.Meeting not found. Check your meeting ID."
      );
    }
  };

  const createRoom = () => {
    navigate("/room");
  };

  const handleConnectOnlyWithAudio = (onlyWithAudio) =>
    dispatch(setConnectOnlyWithAudio(onlyWithAudio));

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        setConnectOnlyWithAudio={handleConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />
    </>
  );
};
