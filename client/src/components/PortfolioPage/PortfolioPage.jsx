import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./PortfolioPage.css";
import { NavLink } from "react-router-dom";
import BlockTitleText from "../../common/BlockTitle";
// import { Route, BrowserRouter } from "react-router-dom";
// import KazTransGas from "./PortfolioPageWorks/KazTransGas";

let PortfolioPage = (props) => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 0,
      },
      500: {
        spaceBetween: 100,
      },
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // loop: false,
  };

  let Works = props.works.map((work) => {
    return (
      <div key={work.id} className="work">
        <div className="workInfo">
          <h1>{work.workName}</h1>
          <h2>{work.whatIDid}</h2>
          <div className="buttonPage">
            <NavLink to={"/portfolio/" + work.urlAdress} className="navItemLink">
              <button
                onClick={() => {
                  props.setWorkId(work.id);
                }}
              >
                View project
              </button>
            </NavLink>
          </div>
        </div>
        <div className="workImg">
          <img src={work.workPhoto} alt="" />
        </div>
      </div>
    );
  });

  return (
    <div className="bgWhite">
      <div className="portfolio wrapper">
        <BlockTitleText
          titleclassName="titleLines titleLines1 titleWrapper"
          blockTitleText="projects"
        />
        <p className="titleWrapper">
          Below you will find my previous works along with some projects which I have just taken on.
          Each project has a description, design approaches taken and technologies used.
        </p>
      </div>
      <Swiper {...params}>{Works}</Swiper>
    </div>
  );
};

export default PortfolioPage;
