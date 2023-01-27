import "./ProjectCard.css";
const ProjectCard = (props) => {
  return (
    <div className="projcard-container">
      <div className="projcard-body">
        <a href={props.link} rel="noreferrer" target="_blank">
          <img className="projcard-img" src={props.image} alt={props.title} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
