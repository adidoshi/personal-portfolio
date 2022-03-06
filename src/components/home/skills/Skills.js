import React, { useState } from "react";
import { iconsList } from "../../../data/list";
import "./Skills.css";
import chakraIcon from "../../../assets/chakra.svg";

const Skills = () => {
  const [icons, setIcons] = useState(false);

  // hide / show icons
  const handleClick = () => {
    setIcons(!icons);
  };
  return (
    <>
      <section className="section" id="skillSection">
        <div className="section-header">
          <h3 className="title">Technologies</h3>
        </div>
        <div className="skillsList">
          {icons ? (
            <>
              {iconsList.map((icon) => {
                return (
                  <div className="skillsWrapper" key={icon.title}>
                    <i className={`devicon-${icon.iconSymbol} colored`}></i>
                    <div className="skills-title">{icon.title}</div>
                  </div>
                );
              })}

              <div className="skillsWrapper">
                <img className="skills-extra-icon" src={chakraIcon} alt="..." />
                <div className="skills-title">Chakra-ui</div>
              </div>
            </>
          ) : (
            <>
              {iconsList.slice(0, 9).map((icon) => {
                return (
                  <div className="skillsWrapper" key={icon.title}>
                    <i className={`devicon-${icon.iconSymbol} colored`}></i>
                    <div className="skills-title">{icon.title}</div>
                  </div>
                );
              })}

              <div className="skillsWrapper">
                <img className="skills-extra-icon" src={chakraIcon} alt="..." />
                <div className="skills-title">Chakra-ui</div>
              </div>
            </>
          )}
        </div>

        <div className="btn-more">
          <button onClick={handleClick} className="btn-outline">
            {icons ? "View less" : "View more"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Skills;
