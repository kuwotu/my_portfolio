import projectImage from "./images/10-Great-Software-Development-Project-Ideas-for-2021.png";

export default function ProjectsTwo() {
  const projects = [
    {
      id: "1",
      title: "Cost Per Unit",
      image: projectImage,
      info:
        "I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences.",
    },
    {
      id: "2",
      title: "Boxing",
      image: projectImage,
      info:
        "I express my BOXING through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences.",
    },
    {
      id: "3",
      title: "Mote Services",
      image: projectImage,
      info:
        "I express my MOTE SERVICES through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences. I express my creativity through code, focusing on building captivating digital experiences.",
    },
  ];

  const projectsElements = projects.map((project) => {
    return (
      <div key={project.id} className="Projects--div">
        <div className="Projects--img-and-info-container">
          <img className="Project--img" src={project.image}></img>
          <div className="Project--title-and-info-container">
            <h1 className="Project--info-title">{project.title}</h1>
            <p className="Project--info-description">{project.info}</p>
            <button>View {project.title}</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Project--container">
      <h1 className="content-title">Projects</h1>
      {projectsElements}
    </div>
  );
}
