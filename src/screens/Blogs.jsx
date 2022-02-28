import React from "react";
import { Helmet } from "react-helmet";
import BlogsPageCard from "../components/blogsCard/BlogsPageCard";
import blogs from "../data/blogs.json";

const Blogs = () => {
  return (
    <>
     <Helmet title="Blogs | Aditya Doshi" />
      <div className="blogs-container">
        <h1>Blogs</h1>
        <p>
          I like to write blogs on my tech learnings and share them with my fellow devs!
        </p>
        {blogs.map((blog) => (
          <BlogsPageCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
