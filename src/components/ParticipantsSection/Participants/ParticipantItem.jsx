export const ParticipantItem = ({
  identity,
  lastItem,
  participant,
  handleActiveConversation,
  socketId,
}) => {
  const handleOpenActiveChatBox = () => {
    if (participant.socketId !== socketId) {
      handleActiveConversation(participant);
    }
  };

  return (
    <>
      <button className="participants_item" onClick={handleOpenActiveChatBox}>
        {identity}
      </button>
      {!lastItem && <span className="participants_separator_line"></span>}
    </>
  );
};
