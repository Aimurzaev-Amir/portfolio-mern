import React from "react";
import "../aboutMePage.css";
import "../../../App.css";
import BlockTitleText from "../../../common/BlockTitle";
import design from "../img/about-me-design.svg";
import frontEnd from "../img/about-me-front-end.svg";
import resume from "../../mainPage/Aimurzayev-Amir-front-end-summary.pdf";

let AboutMeIntro = () => {
  return (
    <div className="aboutIntro wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"About me"} />
      <div className="aboutInfo">
        <div className="aboutFrontEnd">
          <img src={frontEnd} alt="" />
          <h2>development</h2>
          <p>
            I'm a coder first, designer second: I enjoy developing simple, efficient and scalable
            websites that provide real value to the end user. I'm passionate about quality code,
            best practices and performance.
          </p>
        </div>
        <div className="aboutDesign">
          <img src={design} alt="" />
          <h2>design</h2>
          <p>
            I also have a passion for web design. If you require a fresh, slick design for a new
            brand or you need to update an existing site, look me up. I've formed an approach that
            helps me create unique work; work that you can't get from a template.
          </p>
        </div>
      </div>
      <div className="buttonPage">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="downloadBtn">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1966 3.84184C14.1005 3.63301 13.8891 3.50001 13.6563 3.50001H11.2813V0.583333C11.2813 0.261333 11.0153 0 10.6876 0H8.31257C7.98482 0 7.71882 0.261333 7.71882 0.583333V3.50001H5.34382C5.11107 3.50001 4.8997 3.63417 4.80351 3.84184C4.70614 4.05067 4.74414 4.29451 4.89732 4.46717L9.05357 9.13384C9.16639 9.26101 9.32907 9.33334 9.50007 9.33334C9.67107 9.33334 9.83376 9.25984 9.94657 9.13384L14.1028 4.46717C14.2572 4.29567 14.2928 4.05067 14.1966 3.84184Z"
                fill="black"
              />
              <path
                d="M16.0312 8.16667V11.6667H2.96875V8.16667H0.59375V12.8333C0.59375 13.4785 1.12575 14 1.78125 14H17.2188C17.8754 14 18.4062 13.4785 18.4062 12.8333V8.16667H16.0312Z"
                fill="black"
              />
            </svg>
            Download resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMeIntro;
