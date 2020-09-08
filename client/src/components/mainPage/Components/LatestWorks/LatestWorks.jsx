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
    const workPhotoArr = [];
    if (props.images != undefined) {
      props.images.map((imgData) => {
        if (imgData.owner === work._id) {
          const imgSrc = `data:${imgData.imgType};charset=utf-8;base64,${imgData.img.toString(
            "base64"
          )}`;
          workPhotoArr.push({ imgSrc });
        }
      });
    }
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
            <img
              src={workPhotoArr.length != 0 ? workPhotoArr[0].imgSrc : null}
              alt={props.previewDescription}
            />
          </div>
          <div className="workCardInfo">
            <p>{work.smallDescription}</p>
            <h3>{work.workName}</h3>
            <div className="buttonPage workCardButton">
              <NavLink to={"/work/" + work.urlAdress}>
                <button>View project</button>
              </NavLink>
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
        {props.loading ? "loading..." : <Swiper {...props.params}>{Works}</Swiper>}
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
