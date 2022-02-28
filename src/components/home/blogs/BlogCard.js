import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.img} alt="blog-img" />
      </div>
      <div className="blog-content">
        <div className="blog-info">
          <h5 className="read-time">• &nbsp;{blog.readTime}</h5>
        </div>
        <h3 className="title-sm">{blog.title}</h3>
        <a href={blog.url} target="_blank" rel="noreferrer">
          <button className="blog-btn">Read more</button>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
