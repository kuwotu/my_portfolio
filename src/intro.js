export default function intro(props) {
  /*const CLIENT_ID = "7b9b826b84694ddfb3a9f01e820350aa";
  const CLIENT_SECRET = "44ae5fa906834da0af1f72566736cb59";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL = "http://localhost:3001/";
  const SPACE_DELIMITER = "&20";
  const SCOPES = ["user-read-currently-playing", "user-read-recently-played"];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
*/
  const spotifyAccessToken =
    "BQCGHB92PL-_91d63QoMHWxnWzOymk_SrRwjDRoENcVVQki2b_RSbi1KR8YhrvaifdyfsZkhR5qXvSmnsEfje0qbIoT61AcS2urEr8gcFQesCDKWCVGzQhb_nOvhnZzomVc9tsdrci_KtEtUAfDDkJGAdSvCKA";

  function handleSpotify() {
    /* window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=&${SCOPES_URL_PARAM}&response_type=token&show_dialog=false`;
    console.log("ran");*/

    fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      (Headers = {
        Authorization: `Bearer ${spotifyAccessToken}`,
      })
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className="intro--container">
      <div className="intro--div">
        <p className="intro--paragraph">Hey!👋🏾</p>

        <div className="intro--text-change-container">
          <div className="intro--static-text">I'm Kevwe, a</div>
          <ul className="intro--dynamic-text">
            <li>
              <span>Front-End Developer.</span>
            </li>
            <li>
              <span>South Londoner.</span>
            </li>
            <li>
              <span>Music Head.</span>
            </li>
            <li>
              <span>Nigerian.</span>
            </li>
            <li>
              <span>Creative.</span>
            </li>
          </ul>
        </div>

        <p className="intro--paragraph">
          I started coding in 2019 out of curiosity during the pandemic and I've
          been in love with it ever since. A few facts about me -{" "}
          <span
            className="intro--american-football"
            onMouseEnter={props.americanFootballPic}
            onMouseLeave={props.homePic}
          >
            I played American Football throughout University,
          </span>{" "}
          <span
            className="intro--plane"
            onMouseEnter={props.planePic}
            onMouseLeave={props.homePic}
          >
            I've jumped out of a plane
          </span>{" "}
          and <span className="intro--music">I'm a huge music fan.</span> In
          fact, I'm probably listening to music right{" "}
          <span className="intro--now" onMouseEnter={handleSpotify}>
            {" "}
            now.
          </span>
        </p>
      </div>
      <div className="intro--img-container">
        <img className="intro--img" src={props.introPic} alt="Logo"></img>
      </div>
    </section>
  );
}
