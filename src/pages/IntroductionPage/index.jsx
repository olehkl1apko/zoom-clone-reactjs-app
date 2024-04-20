import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ConnectingButtons } from "@/components/ConnectingButtons";
import logo from "@/resources/images/logo.png";
import { setIsRoomHost } from "@/store/slice";

import "./styles.css";

const IntroductionPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsRoomHost(false));
  }, [dispatch]);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

export default IntroductionPage;
