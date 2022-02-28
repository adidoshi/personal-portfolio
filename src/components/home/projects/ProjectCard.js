import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="pro">
        <div className="browser">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>

        <img src={project.img} alt="projectImg" className="project-img" />
      </div>
      <div className="project-card-body">{project.title}</div>
      <div className="project-card-actions">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <button className="project-card-actions-btn-outline">Code</button>
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <button className="project-card-actions-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
