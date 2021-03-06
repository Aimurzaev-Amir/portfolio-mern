import React from "react";
import "../MainPage.css";
import BlockTitleText from "../../../common/BlockTitle";
import { NavLink } from "react-router-dom";
import resume from "../Aimurzayev-Amir-front-end-summary.pdf";

let Introduction = (props) => {
  return (
    <div className="intro wrapper" id="intro" ref={props.section}>
      <BlockTitleText
        titleclassName={"titleLines titleLines1"}
        blockTitleText={"A brief Introduction"}
      />
      <div className="introText" data-aos="fade-up" data-aos-duration="1500">
        <p>
          Hi I am a web developer & designer based in Almaty in Kazakhstan. I believe working in a
          multi-disciplined approach brings creative inspiration to my work. I am passionate about
          creating websites that incorporate interactive design and modern technologies. I see every
          new experience as an opportunity to learn. My favorite projects are those that require me
          to push beyond my boundaries and acquire new skills and knowledge in order to succeed.
        </p>
      </div>

      <div className="buttonPage">
        <NavLink to="/about-me" className="buttonRMargin">
          <button>LEARN MORE ABOUT ME</button>
        </NavLink>
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

export default Introduction;
