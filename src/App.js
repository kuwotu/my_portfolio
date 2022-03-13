import Intro from "./intro.js";
import React from "react";

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
    <div className="App">
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
