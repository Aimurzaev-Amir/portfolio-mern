import React from "react";
import "../../../Media.css"
import "../../MainPage.css"

let LatestBlogArticle = (props) => {
  return (
    <div className="articleCard">
      <div className="articleImg">
        <img src={props.preview} alt={props.previewDescription} />
      </div>
      <div className="articleDate">
        <div className="dateText">
          <p>{props.date}</p>
        </div>
      </div>
      <div className="atricleText">
        <h3>{props.name}</h3>
        <hr />
        <p>{props.description}</p>
      </div>
      <div className="socialLine">
        <div className="articleSocial">
          <div className="articleComments">
            <p>{props.comments} comments</p>
          </div>
          <div className="articleShare">
            <p>{props.likes} likes</p>
          </div>
        </div>
      </div>
      <div className="articleHover">
        <a href={props.urlAdress}>
          <h3>Read more...</h3>
        </a>
      </div>
    </div>
  );
};

export default LatestBlogArticle;
