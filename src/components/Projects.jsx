import ProjectCard from "./ProjectCard";
import rat from "../assets/images/rat.png";
import clicker from "../assets/images/clicker.png";
import generator from "../assets/images/generator.png";
import conversion from "../assets/images/conversion.png";

import "./Projects.css";

const arrayProjects = [
  {
    image: rat,
    title: "ratkutend, site de peste e-commerce",
    link: "https://leagiangrosso-ratkutend.netlify.app/",
    hoverText: `HACKATON
    REACT
    SASS 
    JS`,
  },
  {
    image: clicker,
    title: "compteur manuel",
    link: "https://leagiangrosso-counter.netlify.app/",
    hoverText: `HTML 
    CSS 
    JS`,
  },
  {
    image: generator,
    title: "générateur de mot de passe",
    link: "https://leagiangrosso-generator.netlify.app/",
    hoverText: `HTML 
    CSS 
    JS`,
  },
  {
    image: conversion,
    title: "conversion d'unité",
    link: "https://leagiangrosso-conversion.netlify.app/",
    hoverText: `HTML 
    CSS 
    JS`,
  },
  // {
  //   image: cityskyline,
  //   title: "city skyline css",
  //   link: "https://leagiangrosso-cityskyline.netlify.app/",
  //   hoverText: `HTML
  //   CSS`,
  // },
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
            title={e.title}
            link={e.link}
            hoverText={e.hoverText}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
