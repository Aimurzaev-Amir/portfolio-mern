import React from "react";
import "../MainPage.css";
import Adaptive from "../img/Adaptive-skills.svg";
import FrontEnd from "../img/Front-end-skills.svg";
import CrossBrowsers from "../img/cross-browsers-skills.svg";
import design from "../img/design-skills.svg";
import idea from "../img/idea-skills.svg";
import BlockTitleText from "../../../common/BlockTitle";
import SkillCard from "./SkillCard";

let SkillsList = () => {
  return (
    <div className="skills wrapper">
      <BlockTitleText
        titleclassName={"titleLines titleLines1"}
        blockTitleText={"This is what i do"}
      />
      <div className="skillsCards">
        <SkillCard img={idea} imgDescr={"Great ideas skill"} skillText={"Great ideas"} />
        <SkillCard img={design} imgDescr={"design skill"} skillText={"Professional design"} />
        <SkillCard img={FrontEnd} imgDescr={"front-end skill"} skillText={"HTMl + CSS + JS"} />
        <SkillCard
          img={Adaptive}
          imgDescr={"adaptive skill"}
          skillText={"Clean code and responsive layout"}
        />
        <SkillCard
          img={CrossBrowsers}
          imgDescr={"cross-browsers skill"}
          skillText={"Browser Compatibility"}
        />
      </div>
    </div>
  );
};

export default SkillsList;
