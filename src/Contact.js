import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div className="Contact--container">
      <h1 className="Contact--title">Let's Work Together</h1>
      <div className="Contact--icons-container">
        <FontAwesomeIcon
          className="Contact--icons"
          icon={faLinkedinIn}
          onClick={() => window.open("https://www.linkedin.com/in/kevwe-uwotu")}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="Contact--icons"
          icon={faGithub}
          onClick={() => window.open("https://github.com/kuwotu")}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="Contact--icons"
          icon={faEnvelope}
        ></FontAwesomeIcon>
      </div>
      <p className="Contact--call-me">Call me</p>
      <div className="Contact--number-container">
        <p className="Contact--number">07958086599</p>
      </div>
    </div>
  );
}
