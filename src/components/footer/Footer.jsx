import React from "react";
import "./Footer.css";
import gmailIcon from "../../assets/gmail.svg";
import { ArrowUpward } from "@mui/icons-material";
import { Fab } from "@mui/material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  return (
    <>
      <footer className="footer">
        <hr />
        <div className="footer-container">
          <ul className="footer-links">
            <li style={{ marginRight: "12px" }}>
              <a
                href="mailto:adityadoshi25@gmail.com"
                target="_blank"
                rel="noreferrer">
                <img height="28px" width="28px" src={gmailIcon} alt="..." />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adidoshi"
                target="_blank"
                rel="noreferrer">
                <i className="devicon-github-original colored"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aditya-doshi08"
                target="_blank"
                rel="noreferrer">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/adidoshi08"
                target="_blank"
                rel="noreferrer">
                <i className="devicon-twitter-original colored"></i>
              </a>
            </li>
          </ul>

          <div className="footer-made-with">&lt;&gt; Aditya &lt;/&gt;</div>
          <div className="copyright">
            © 2022, Built with&nbsp;<span>React</span>
          </div>
        </div>
        {/* floating button */}
        <div className="scroll-to-top" onClick={scrollToTop}>
          <Fab sx={{ backgroundColor: "#9ca3af" }} aria-label="top">
            <ArrowUpward />
          </Fab>
        </div>
      </footer>
    </>
  );
};

export default Footer;
