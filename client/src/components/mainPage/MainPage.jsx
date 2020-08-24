import React, { useRef } from "react";
import Introduction from "./Components/Introduction";
import "./MainPage.css";
import SkillsList from "./Components/SkillsList";
import LatestWorksContainer from "./Components/LatestWorks/LatestWorksContainer";
import LatestBlogArticlesContainer from "./Components/LatestBlogArticles/LatestBlogArticlesContainer";
import MainBanner from "./Components/MainBanner";
import FeedbackContainer from "./Components/FeedbackForm/FeedbackContainer";

let MainPage = () => {
  const section = useRef(null);

  const gotoSection = () => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  
  const params = {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
      0: {
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      500: {
        centeredSlides: false,
        pagination: false,
      },
      950: {
        allowTouchMove: false,
      },
    },
  };
  return (
    <div className="bgBlue">
      <header className="aboutMePage">
        <MainBanner gotoSection={gotoSection} />
      </header>
      <Introduction  section={section} />
      <SkillsList />
      <LatestWorksContainer params={params} />
      <LatestBlogArticlesContainer params={params} />
      <FeedbackContainer />
    </div>
  );
};

export default MainPage;
