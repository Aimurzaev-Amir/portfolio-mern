import React from "react";
import "../../aboutMePage.css";

let PhotoCard = (props) => {
  return (
    <div className="photo">
      <img
        className="myImg"
        id={props.id}
        onClick={props.setModalImg}
        alt={props.imgDescr}
        src={props.img}
      /> 
    </div>
  );
};

export default PhotoCard;
