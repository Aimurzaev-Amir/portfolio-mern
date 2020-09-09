import React from "react";

const ShowArticleDevelopingResults = (props) => {
  const blocksMap = props.blocks.map((block) => {
    return (
      <div>
        <h1>{block.title}</h1>
        <p>{block.text}</p>
      </div>
    );
  });
  // const DesktopImg = (num) => {
  //   if (articleImages.length != 0 && articleImages.length >= num + 1) {
  //     const imgSrc = `data:${DesktopArr[num].imgType};charset=utf-8;base64,${DesktopArr[
  //       num
  //     ].img.toString("base64")}`;
  //     return (
  //       <div>
  //         <img src={imgSrc} alt={DesktopArr[num].descr}></img>
  //       </div>
  //     );
  //   } else {
  //     return <p>don't have img</p>;
  //   }
  // };
  return <div className="wrapper">{blocksMap}</div>;
};

export default ShowArticleDevelopingResults;
