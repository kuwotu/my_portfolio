import { Controller, Scene } from "react-scrollmagic";

export default function Intro(props) {
  return (
    <section className="Intro--container">
      <Controller>
        <div className="Intro--about-container">
          <div className="Intro--about-div">
            <p className="Intro--paragraph">Hi there 👋🏾 I'm Kevwe.</p>
            <p className="Intro--paragraph">
              I express my creativity through code, focusing on building
              captivating digital experiences.
            </p>
          </div>
          <div className="Intro--about-div">
            <p className="Intro--paragraph">
              A few facts about me :
              <ol className="Intro--facts-list">
                <li
                  className="Intro--american-football"
                  onMouseEnter={props.americanFootballPic}
                  onMouseLeave={props.homePic}
                >
                  I played American Football throughout University.
                </li>
                <li
                  className="Intro--plane"
                  onMouseEnter={props.planePic}
                  onMouseLeave={props.homePic}
                >
                  I've jumped out of a plane.
                </li>
                <li className="Intro--music">I'm a huge music fan.</li>
              </ol>
            </p>
          </div>

          <div className="Intro--about-div">
            <p className="Intro--paragraph">
              Check out what I'm listening to right now.
            </p>
          </div>
        </div>
        <Scene duration={"200%"} pin={{ pushFollowers: false }} triggerHook={0}>
          <div className="Intro--img-container">
            <img className="Intro--img" src={props.introPic} alt="Logo"></img>
          </div>
        </Scene>
      </Controller>
    </section>
  );
}
