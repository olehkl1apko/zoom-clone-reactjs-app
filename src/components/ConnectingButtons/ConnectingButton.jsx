export const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  return (
    <button
      className={
        createRoomButton
          ? "room_button create_room_button"
          : "room_button join_room_button"
      }
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
};
