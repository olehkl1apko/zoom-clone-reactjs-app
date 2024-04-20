import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";
import { setIsRoomHost } from "@/store/slice";
import { selectIsRoomHost } from "@/store/selectors";

const JoinRoomPage = () => {
  const dispatch = useDispatch();
  const isRoomHost = useSelector(selectIsRoomHost);
  const { search } = useLocation();

  useEffect(() => {
    const isRoomHostParam = new URLSearchParams(search).get("host");
    if (isRoomHostParam) {
      dispatch(setIsRoomHost(true));
    }
  }, [dispatch, search]);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
};

export default JoinRoomPage;
