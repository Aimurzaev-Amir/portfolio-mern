import React from "react";
import "../../aboutMePage.css";
import BlockTitleText from "../../../../common/BlockTitle";
import EducationCard from "./EducationCard";
import designEdu from "../../img/Education/edu-card-design.svg";
import frontEndEdu from "../../img/Education/edu-card-front-end.svg";
import schoolEdu from "../../img/Education/edu-card-school.svg";

let AboutMeEducation = () => {
  return (
    <div className="eduOverlay wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"EDUCATION"} />
      <div className="containerEdu wrapper">
        <EducationCard
          eduType={"School"}
          eduName={"Mathematics-Lyceum №131"}
          eduDate={"2003-2014"}
          eduImg={schoolEdu}
          eduImgDescr={"school icon"}
        />
        <EducationCard
          eduType={"University"}
          eduName={"Kazakh-German University"}
          eduNameAdv={"Speciality: Information systems"}
          eduDate={"2014-2018"}
          eduImg={frontEndEdu}
          eduImgDescr={"front-end icon"}
        />
        <EducationCard
          eduType={"Design"}
          eduName={"Raz1Dva2 Studio"}
          eduNameAdv={"Speciality: UI/UX Design"}
          eduDate={"2019"}
          eduImg={designEdu}
          eduImgDescr={"design icon"}
        />
      </div>
    </div>
  );
};

export default AboutMeEducation;
