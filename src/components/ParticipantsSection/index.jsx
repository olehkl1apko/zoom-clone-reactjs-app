import { Participants } from "./Participants";
import { DirectChat } from "./DirectChat";

import "./styles.css";

export const ParticipantsSection = () => {
  return (
    <section className="participants_section_container">
      <h2 className="participants_label_paragraph">PARTICIPANTS</h2>
      <Participants />
      <DirectChat />
    </section>
  );
};
