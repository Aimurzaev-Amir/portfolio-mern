import React from "react";
import "../../MainPage.css";
import "../../../Media.css"

let WorkPreview = (props) => {
  return (
    <div className="workCard">
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
          <img src={props.Preview} alt={props.previewDescription} />
        </div>
        <div className="workCardInfo">
          <p>{props.smallDescription}</p>
          <h3>{props.Name}</h3>
          <div className="buttonPage workCardButton">
            <a href={props.urlAdress}>
              <button>View projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPreview;
