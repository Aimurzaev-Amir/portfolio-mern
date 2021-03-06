import React from "react";
import "../../aboutMePage.css";
import BlockTitleText from "../../../../common/BlockTitle";
import SkillGraphBar from "./SkillsGraphBar";

let AboutMeSkills = () => {
  return (
    <div className="graphOverlay wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"my Skills"} />
      <div className="graph">
        <div className="ticks">
          <p>Jedi</p>
          <p>Ninja</p>
          <p>Geek</p>
          <p>Newbie</p>
        </div>
        <div className="graphLines">
          <div className="ticksLines">
            <hr />
            <hr />
            <hr />
          </div>
          <div className="bars">
            <SkillGraphBar
              barId={"bar7"}
              barProcent={"60"}
              barText={"OOP, DRY, SOLID, SEO"}
              aosDelay="0"
            />
            <SkillGraphBar
              barId={"bar1"}
              barProcent={"70"}
              barText={"NPM, Git, Linux (cmd)"}
              aosDelay="150"
            />
            <SkillGraphBar
              barId={"bar2"}
              barProcent={"85"}
              barText={"HTML5 / CSS3, Responsive Design"}
            />
            <SkillGraphBar
              barId={"bar3"}
              barProcent={"75"}
              barText={"JavaScript, React.js"}
              aosDelay="300"
            />
            <SkillGraphBar
              barId={"bar6"}
              barProcent={"70"}
              barText={"Ajax, RESTful API, Axios"}
              aosDelay="450"
            />
            <SkillGraphBar
              barId={"bar4"}
              barProcent={"60"}
              barText={"Node.js, SQL"}
              aosDelay="600"
            />
            <SkillGraphBar
              barId={"bar5"}
              barProcent={"90"}
              barText={"Photoshop / Figma"}
              aosDelay="750"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkills;
