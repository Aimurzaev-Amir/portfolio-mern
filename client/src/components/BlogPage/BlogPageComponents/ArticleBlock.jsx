import React from "react";
import ArticleListBlock from "./ArticleListBlock";

let ArticleBlock = (props) => {
  let sectionTitle = props.sectionTitle ? (
    <h3 style={{ textAlign: props.sectionTitle.titlePosition }}>{props.sectionTitle.title}</h3>
  ) : null;

  let sectionImg = props.sectionImg ? ( 
    <img
      style={{
        marginLeft: props.sectionImg.imgPositioning,
        marginRight: props.sectionImg.imgPositioning,
        width: props.sectionImg.imgWidth,
      }}
      src={props.sectionImg.img}
      alt={props.sectionImg.sectionImgDescr}
    />
  ) : null;

  let sectionList = props.sectionList ? (
    <ul className="articleList">
      {props.sectionList.map((item) => {
        return <ArticleListBlock key={item.id} listItem={item.listItem} />;
      })}
    </ul>
  ) : null;

  let sectionText = props.sectionText ? (
    <p style={{ textAlign: props.sectionText.textPosition }}>{props.sectionText.text}</p>
  ) : null;
  return (
    <div className="articleBlock">
      {sectionImg}
      {sectionTitle}
      {sectionList}
      {sectionText}
    </div>
  );
};

export default ArticleBlock;
