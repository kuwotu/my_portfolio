export default function Header() {
  return (
    <header className="Header--header">
      <nav className="Header--nav">
        <div className="Header--logo">Logo</div>
        <div className="Header--menu">
          <ol className="Header--menu-list">
            <li className="Header--about-li">
              <a href="#">About</a>
            </li>
            <li className="Header--projects-li">
              <a href="#">Projects</a>
            </li>
            <li className="Header--contact-li">
              <a href="#">Contact</a>
            </li>
          </ol>
          <button className="Header--button-resume">Resume</button>
        </div>
      </nav>
    </header>
  );
}
