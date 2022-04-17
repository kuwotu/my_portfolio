import speaker from "./images/Intro--speaker.png";
import kevweSound from "./audio/Kevwe-pronounciation.mp3";

export default function Intro(props) {
  return (
    <section className="Intro--container">
      <div className="Intro--about-container">
        <div className="Intro--about-div">
          <p id="Intro--Hi">Hi, I'm</p>
          <div className="Intro--name">
            <p className="Intro--paragraph" id="Intro--Kevwe">
              Kevwe
            </p>
            <img
              className="Intro--speaker"
              src={speaker}
              onClick={() => new Audio(kevweSound).play()}
            ></img>
            <p id="Intro--pronounced">pronounced “Keh-weh”</p>
          </div>
          <p className="Intro--paragraph">a</p>
          <p className="Intro--paragraph">
            I express my creativity through code, focusing on building
            captivating digital experiences.
          </p>
        </div>
      </div>
      <div className="Intro--img-container">
        <img className="Intro--img" src={props.introPic} alt="Logo"></img>
      </div>
    </section>
  );
}
