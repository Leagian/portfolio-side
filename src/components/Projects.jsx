import ProjectCard from "./ProjectCard";
import witcher from "../assets/images/witcher.png";
import clicker from "../assets/images/clicker.png";
import generator from "../assets/images/generator.png";

import "./Projects.css";

const arrayProjects = [
  {
    image: witcher,
    title: "médaillon de the witcher",
    number: "01",
  },
  {
    image: clicker,
    title: "compteur manuel",
    number: "02",
    link: "https://leagiangrosso-counter.netlify.app/",
  },
  {
    image: generator,
    title: "générateur de mot de passe",
    number: "03",
    link: "https://leagiangrosso-generator.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <div>
        <h2 className="projects-title">PROJECTS</h2>
      </div>
      <div id="projects-globalCard">
        {arrayProjects.map((e) => (
          <ProjectCard
            key={e.number}
            image={e.image}
            number={e.number}
            title={e.title}
            link={e.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
