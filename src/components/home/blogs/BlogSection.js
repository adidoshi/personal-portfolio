import React from "react";
import { Link } from "react-router-dom";
import { blogsList } from "../../../data/list";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h3 className="title">My Blogs</h3>
      </div>
      <div className="blog-wrapper">
        {blogsList.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* <div className="btn-more">
        <Link to="/blogs">
          <button className="btn">View All</button>
        </Link>
      </div> */}
    </section>
  );
};

export default BlogSection;
