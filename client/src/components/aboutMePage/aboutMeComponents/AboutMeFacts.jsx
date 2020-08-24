import React from "react";
import "../aboutMePage.css";
import "../../Media.css";
import BlockTitleText from "../../../common/BlockTitle";
import AstronautBg from "../img/bg.png";

let AboutMeFacts = () => {
  return (
    <div className="randomFactsOverlay wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"Random Facts"} />
      <div className="randomFacts">
        <div className="factsImg">
          <img src={AstronautBg} alt="astronaut cosmonaut" />
        </div>
        <div className="factsInfo">
          <ul>
            <li>I love aviation</li>
            <li>I drink a lot of tea</li>
            <li>I love interior design</li>
            <li>I love to cook</li>
            <li>But more than cook i love eat</li>
            <li>I like to go to the mountains.</li>
            <li>I'm a bit of a clean freak</li>
            <li>I want to live on Pandora</li>
            <li>I worship everything related to space</li>
            <li>I'm addicted to music</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMeFacts;
