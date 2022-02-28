import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Header.css";

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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        itaque aut voluptates? Nihil, quia quam. Deleniti itaque aut voluptates?
        Nihil, quia quam.
      </p>
    </header>
  );
};

export default Header;
