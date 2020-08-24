import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css"

let SkillGraphBar = (props) => {
  return (
    <div className="bar" id={props.barId} data-aos="fade-up" data-aos-delay="200">
      <div className="barText">
        <p className="barTextProcent">
          {props.barProcent} <span>%</span>
        </p>
        <p className="barTextSkill">{props.barText}</p>
      </div>
    </div>
  );
};

export default SkillGraphBar;
