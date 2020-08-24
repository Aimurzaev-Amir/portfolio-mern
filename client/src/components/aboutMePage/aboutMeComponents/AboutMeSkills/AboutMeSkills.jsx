import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css";
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
            <SkillGraphBar barId={"bar1"} barProcent={"95"} barText={"Tea drinking"} />
            <SkillGraphBar barId={"bar2"} barProcent={"85"} barText={"HTML5 / CSS3"} />
            <SkillGraphBar barId={"bar3"} barProcent={"50"} barText={"JavaScript"} />
            <SkillGraphBar barId={"bar4"} barProcent={"60"} barText={"SQL"} />
            <SkillGraphBar barId={"bar5"} barProcent={"90"} barText={"Photoshop / Figma"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkills;
