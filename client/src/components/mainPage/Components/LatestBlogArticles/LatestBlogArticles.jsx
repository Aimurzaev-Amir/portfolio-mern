import React from "react";
import "../../MainPage.css";
import "../../../Media.css";
import LatestBlogArticle from "./LatestBlogArticle";
import BlockTitleText from "../../../../common/BlockTitle";
import Button from "../../../../common/Button";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { NavLink } from "react-router-dom";

let LatestBlogArticles = (props) => {
  let latestArticles = props.articles.map((article) => {
    return (
      <div className="articleCard">
        <div className="articleImg">
          <img src={article.articlePreview} alt={article.previewDescription} />
        </div>
        <div className="articleDate">
          <div className="dateText">
            <p>{article.articleDate}</p>
          </div>
        </div>
        <div className="atricleText">
          <h3>{article.articleName}</h3>
          <hr />
          <p>{article.articleSmallDescription}</p>
        </div>
        <div className="socialLine">
          <div className="articleSocial">
            <div className="articleComments">
              <p>{article.comments} comments</p>
            </div>
            <div className="articleShare">
              <p>{article.likes} likes</p>
            </div>
          </div>
        </div>
        <div className="articleHover">
          <NavLink to={"/blog/" + article.urlAdress}>
            <h3>Read more...</h3>
          </NavLink>
        </div>
      </div>
    );
  });

  return (
    <div className="latestBlogArticles wrapper">
      <BlockTitleText
        titleclassName={"titleLines titleLines1 titleWrapper"}
        blockTitleText={"Latest Blog Articles"}
      />
      <div className="articlesCards">
        <Swiper {...props.params}>{latestArticles}</Swiper>
      </div>
      <div className="buttonPage">
        <NavLink to="/blog/">
          <button>View more articles</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestBlogArticles;
