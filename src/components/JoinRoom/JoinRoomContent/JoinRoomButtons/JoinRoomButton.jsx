export const JoinRoomButton = ({
  buttonText,
  cancelButton = false,
  onClickHandler,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={
        cancelButton ? "join_room_cancel_button" : "join_room_success_button"
      }
    >
      {buttonText}
    </button>
  );
};
