export const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  return (
    <button
      className={createRoomButton ? "create_room_button" : "join_room_button"}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
};
