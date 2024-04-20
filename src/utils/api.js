import axios from "axios";

const serverApi = import.meta.env.VITE_SERVER_API;

export const getRoomExists = async (roomId) => {
  const { data } = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return data;
};

export const getTURNCredentials = async () => {
  const { data } = await axios.get(`${serverApi}/get-turn-credentials`);
  return data;
};
