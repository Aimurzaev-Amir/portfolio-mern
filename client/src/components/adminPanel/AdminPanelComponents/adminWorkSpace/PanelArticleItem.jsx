import React from "react";

let PanelArticleItem = (props) => {
  return (
    <div className="panelItem">
      <img src={props.articlePhoto} alt={props.previewDescription} />
      <p>{props.articleName}</p>
    </div>
  );
};

export default PanelArticleItem;
