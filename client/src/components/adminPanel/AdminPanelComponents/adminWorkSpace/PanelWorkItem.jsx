import React from "react";

let PanelWorkItem = (props) => {
  return (
    <div className="panelItem">
      <img src={props.workPhoto} alt={props.previewDescription} />
      <p>{props.workName}</p>
    </div>
  );
};

export default PanelWorkItem;
