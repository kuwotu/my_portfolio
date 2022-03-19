import React from "react";
import Intro from "./Intro.js";
import Header from "./Header.js";
import About from "./About.js";
import ProjectsTwo from "./ProjectsTwo.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App() {
  const [introPic, setIntroPic] = React.useState("/kevwe-prof.jpg");

  function americanFootballPic() {
    setIntroPic("/kevwe-american-football.jpg");
  }

  function homePic() {
    setIntroPic("/kevwe-prof.jpg");
  }

  function planePic() {
    setIntroPic("/kevwe-plane.jpg");
  }

  const [aboutMe, setAboutMe] = React.useState(
    "I express my creativity through code, focusing on building captivating digital experiences."
  );

  function shortAndSweet() {
    setAboutMe(
      "I express my creativity through code, focusing on building captivating digital experiences."
    );
  }

  function tellMeMore() {
    setAboutMe(
      "I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences."
    );
  }

  function tellMeEverything() {
    setAboutMe(
      "I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences.I express my creativity through code, focusing on building captivating digital experiences."
    );
  }

  return (
    <div className="App--container">
      <Header />
      <Intro
        introPic={introPic}
        homePic={homePic}
        americanFootballPic={americanFootballPic}
        planePic={planePic}
      />
      <About
        aboutMe={aboutMe}
        shortAndSweet={shortAndSweet}
        tellMeMore={tellMeMore}
        tellMeEverything={tellMeEverything}
      />
      <ProjectsTwo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
