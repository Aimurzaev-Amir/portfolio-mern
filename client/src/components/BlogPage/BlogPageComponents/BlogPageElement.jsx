import React from "react";
import img from "../../../Redux/img/articles/article1/website-launch-checklist.png";
import { NavLink } from "react-router-dom";

let BlogPageElement = (props) => {
  return (
    <div className="blogArticle"> 
      <h1>{props.name}</h1>
      <hr /> 
      <div className="dateViews">
        <p className="date">By Amir Aimurzayev on {props.date}</p>
      </div>
      <img src={props.img} alt={props.imgDescr} />
      <article>{props.description}</article>
      <div className="buttonPage leftSideButton">
        <NavLink to={"/blog/" + props.url}>
          <button onClick={() => {props.setArticleId(props.id)}}>Read more</button>
        </NavLink> 
      </div>
    </div>
  ); 
};

export default BlogPageElement;
