export default function About(props) {
  const { aboutMe, shortAndSweet, tellMeMore, tellMeEverything } = props;

  return (
    <div className="About--container">
      <h1 className="content-title">About Me</h1>
      <div className="About--button-container">
        <button onClick={shortAndSweet} className="About--button">
          Short And Sweet
        </button>
        <button onClick={tellMeMore} className="About--button">
          Tell Me More
        </button>
        <button onClick={tellMeEverything} className="About--button">
          Tell Me Everything
        </button>
      </div>
      <div className="About--info">{aboutMe}</div>
    </div>
  );
}
