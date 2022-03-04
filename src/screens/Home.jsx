import React from "react";
import { Helmet } from "react-helmet";
import BlogSection from "../components/home/blogs/BlogSection";
import Contact from "../components/home/contact/Contact";
import Header from "../components/home/header/Header";
import ProjectSection from "../components/home/projects/ProjectSection";
import Skills from "../components/home/skills/Skills";

const Home = () => {
  return (
    <>
    <Helmet title="Home | Aditya Doshi" />
      <main className="main-container">
        <Header />
        <Skills />
        <ProjectSection />
        <BlogSection />
        <Contact />
      </main>
    </>
  );
};

export default Home;
