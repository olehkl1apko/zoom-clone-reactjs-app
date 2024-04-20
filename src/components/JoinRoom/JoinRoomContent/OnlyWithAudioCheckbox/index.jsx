import "./styles.css";
import checkImg from "@/resources/images/check.png";

export const OnlyWithAudioCheckbox = ({
  connectOnlyWithAudio,
  setConnectOnlyWithAudio,
}) => {
  return (
    <div className="checkbox_container">
      <div
        className="checkbox_connection"
        onClick={() => setConnectOnlyWithAudio(!connectOnlyWithAudio)}
      >
        {connectOnlyWithAudio && (
          <img className="checkbox_image" src={checkImg}></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};
