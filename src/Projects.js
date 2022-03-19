import projectsPic from "./images/10-Great-Software-Development-Project-Ideas-for-2021.png";

export default function Projects() {
  return (
    <div>
      <h1 className="content-title">Projects</h1>
      <div className="Project--container">
        <img src={projectsPic} className="Project--img"></img>
        <div className="Project--info-container">
          <div className="Project--title" id="projectTitle1">
            <p className="Project--featured">Featured Project</p>
            <p className="Project--name">Cost Per Use</p>
          </div>
          <div className="Project--info">
            <p id="projectInfo1">
              I express my creativity through code, focusing on building
              captivating digital experiences. I express my creativity through
              code, focusing on building captivating digital experiences. I
              express my creativity through code, focusing on building
              captivating digital experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="Project--container">
        <div className="Project--info-container">
          <div className="Project--title" id="projectTitle2">
            <p className="Project--featured">Featured Project</p>
            <p className="Project--name">Cost Per Use</p>
          </div>
          <div className="Project--info">
            <p id="projectInfo2">
              I express my creativity through code, focusing on building
              captivating digital experiences. I express my creativity through
              code, focusing on building captivating digital experiences. I
              express my creativity through code, focusing on building
              captivating digital experiences.
            </p>
          </div>
        </div>
        <img src={projectsPic} className="Project--img"></img>
      </div>
      <div className="Project--container">
        <img src={projectsPic} className="Project--img"></img>
        <div className="Project--info-container">
          <div className="Project--title" id="projectTitle3">
            <p className="Project--featured">Featured Project</p>
            <p className="Project--name">Cost Per Use</p>
          </div>
          <div className="Project--info">
            <p id="projectInfo3">
              I express my creativity through code, focusing on building
              captivating digital experiences. I express my creativity through
              code, focusing on building captivating digital experiences. I
              express my creativity through code, focusing on building
              captivating digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
