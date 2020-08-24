import React from "react";
import "../../MainPage.css";
import "../../../Media.css";
import WorkPreview from "./WorkPreview";
import BlockTitleText from "../../../../common/BlockTitle";
import Button from "../../../../common/Button";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { NavLink } from "react-router-dom";

let LatestWorks = (props) => {
  let Works = props.works.map((work) => {
    return (
      <div className="workCard" key={work.id}>
        <div className="cardInfoOverlay">
          <div className="cardHeader">
            <div className="elipses">
              <div className="elipse"></div>
              <div className="elipse"></div>
              <div className="elipse"></div>
            </div>
            <div className="toggleCard">
              <hr />
              <hr />
              <hr />
            </div>
          </div>
          <div className="cardBody">
            <img src={work.workPreview} alt={props.previewDescription} />
          </div>
          <div className="workCardInfo">
            <p>{work.smallDescription}</p>
            <h3>{work.workName}</h3>
            <div className="buttonPage workCardButton">
              <NavLink to={"/portfolio/" + work.urlAdress}>
                <button>View project</button>
              </NavLink>
              {/* <a href={work.urlAdress}>
                <button>View project</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="latestWorks wrapper">
      <BlockTitleText
        titleclassName={"titleLines titleLines1 titleWrapper"}
        blockTitleText={"Latest works"}
      />
      <div className="workCards">
        <Swiper {...props.params}>{Works}</Swiper>
      </div>
      <div className="buttonPage">
        <NavLink to="/portfolio/">
          <button>View more projects</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestWorks;
