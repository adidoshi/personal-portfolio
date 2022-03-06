import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Header.css";
// import cvPdf from "../../../assets/aditya-doshi-cv.pdf";

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "MERN Stack Developer"],
    });
  }, []);
  return (
    <header className="header">
      <h1 className="hero-title">Hey There!</h1>
      <h1 className="hero-subTitle">
        I'm Aditya A <span ref={textRef}></span>
      </h1>
      <p className="hero-text">
        Creating real time projects excites me a lot, exploring new technologies
        gradually with enthusiasm, I like the process of learnings,
        implementation, debugging - into this programming world which helps me
        to grow day by day. I'm looking for a full time react developer
        opportunity.
      </p>
      <div>
        <a
          href="https://drive.google.com/file/d/10dJqUUT9X7q93xnRlK8bxbxKc7eqB6wj/view"
          target="_blank"
          rel="noreferrer">
          <button className="btn">Download CV</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
