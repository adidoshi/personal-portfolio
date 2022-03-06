import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { projectsList } from "../../../data/list";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [projects, setProjects] = useState(false);
  return (
    <section className="section" id="projectSection">
      <div className="section-header">
        <h3 className="title">My Work</h3>
      </div>
      {projects ? (
        <div className="projects-container">
          {projectsList.map((pro) => (
            <ProjectCard key={pro.id} project={pro} />
          ))}
        </div>
      ) : (
        <div className="projects-container">
          {projectsList.slice(0, 3).map((pro) => (
            <ProjectCard key={pro.id} project={pro} />
          ))}
        </div>
      )}
      <div className="btn-more">
        <button className="btn" onClick={() => setProjects(!projects)}>
          {projects ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
