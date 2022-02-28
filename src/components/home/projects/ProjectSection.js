import React from "react";
import { Link } from "react-router-dom";
import { projectsList } from "../../../data/list";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h3 className="title">My Work</h3>
      </div>
      <div className="projects-container">
        {projectsList.map((pro) => (
          <ProjectCard key={pro.id} project={pro} />
        ))}
      </div>
      <div className="btn-more">
        <Link to="/projects">
          <button className="btn">View Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
