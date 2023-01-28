import "./ProjectCard.css";
const ProjectCard = (props) => {
  return (
    <div className="projcard-container">
      <div className="projcard-body">
        <div id="projcard-hoverContainer">
          <a href={props.link} rel="noreferrer" target="_blank">
            <img className="projcard-img" src={props.image} alt={props.title} />
          </a>
          <div className="projcard-hoverText">{props.hoverText}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
