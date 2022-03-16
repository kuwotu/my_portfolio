import React from "react";
import Intro from "./Intro.js";
import Header from "./Header.js";

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

  return (
    <div className="App--container">
      <Header />
      <Intro
        introPic={introPic}
        homePic={homePic}
        americanFootballPic={americanFootballPic}
        planePic={planePic}
      />
    </div>
  );
}

export default App;
