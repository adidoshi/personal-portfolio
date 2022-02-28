import React from "react";
import useTheme from "../../context/ThemeContext";
import "./Card.css";

const Card = ({ project }) => {
  const { theme } = useTheme();

  // project card
  return (
    <div
      className="card"
      style={{ backgroundColor: theme.cardBg, boxShadow: theme.cardBoxShadow }}>
      <h2 className="card-title">{project.title}</h2>
      <div className="card-date">{project.date}</div>
      <div className="card-chip">
        {project.tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}{" "}
        ....
      </div>
      <p>{project.description}</p>
      <div className="card-btn-wrapper">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <button className="btn">View Live</button>
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <button className="btn-outline btn-source">Source</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
