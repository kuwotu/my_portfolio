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
      <div key={project.id}>
        <p>Featured Post</p>
        <h1>{project.title}</h1>
        <img src={project.image}></img>
        <p>{project.info}</p>
      </div>
    );
  });

  return <div>{projectsElements}</div>;
}
