export const getDirectChatHistory = (directChatHistory, socketId = null) => {
  if (!socketId || !directChatHistory) {
    return [];
  }

  const history = directChatHistory.find((h) => h.socketId === socketId);

  return history ? history.chatHistory : [];
};
