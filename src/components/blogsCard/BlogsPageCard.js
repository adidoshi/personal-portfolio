import React from "react";
import useTheme from "../../context/ThemeContext";
import "../card/Card.css";

const BlogsPageCard = ({ blog }) => {
  const { theme } = useTheme();

  // blog card
  return (
    <div
      className="card"
      style={{ backgroundColor: theme.cardBg, boxShadow: theme.cardBoxShadow }}>
      <h2 className="card-title">{blog.title}</h2>
      <div className="card-date">{blog.date}</div>
      <p>{blog.description}</p>
      <div className="card-btn-wrapper">
        <a href={blog.url} target="_blank" rel="noreferrer">
          <button className="btn">Read more...</button>
        </a>
      </div>
    </div>
  );
};

export default BlogsPageCard;
