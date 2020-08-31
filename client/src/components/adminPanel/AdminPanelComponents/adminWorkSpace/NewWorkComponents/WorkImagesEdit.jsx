import React from "react";
import BlockTitleText from "../../../../../common/BlockTitle";
import { useState } from "react";

const WorkImagesEdit = (props) => {
  const DesktopImg = (num) => {
    if (props.images[num] != undefined) {
      const imgSrc = `data:${props.images[num].imgType};charset=utf-8;base64,${props.images[
        num
      ].img.toString("base64")}`;
      return (
        <div>
          <img src={imgSrc} alt={props.images[num].name}></img>
        </div>
      );
    } else {
      return <p>don't have img</p>;
    }
  };

  const MobileImg = (num) => {
    if (props.work.additional.mobileImg.length != 0) {
      return <img src={props.work.additional.mobileImg[num].img} alt=""></img>;
    } else {
      return <p>don't have img</p>;
    }
  };
  return (
    <div className="workScreenshots wrapper">
      <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="desktop version" />
      <p className="sectionsParagraph">
        Main sections of the {props.work.workName ? props.work.workName : '"WorkName"  '}
        {props.work.smallDescription ? props.work.smallDescription : '"WorkType"'}. <br />
        Display on the desktop version.
      </p>

      <table className="desktopScreenshots">
        <tbody>
          <tr>
            <td className="desktopScreenshotsRow">{DesktopImg(0)}</td>
            <td className="desktopScreenshotsRow">{DesktopImg(1)}</td>
          </tr>
          <tr>
            <td className="desktopScreenshotsRow">{DesktopImg(2)}</td>
            <td className="desktopScreenshotsRow">{DesktopImg(3)}</td>
          </tr>
        </tbody>
      </table>

      <div className="mobileVersionSection">
        <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="mobile version" />
        <p className="sectionsParagraph">
          Main sections of the {props.work.workName ? props.work.workName : '"WorkName"  '}
          {props.work.smallDescription ? props.work.smallDescription : '"WorkType"'}. <br />
          Display on the mobile version.
        </p>

        <table>
          <tbody>
            <tr>
              <td className="mobileScreenshotsRow">{MobileImg(0)}</td>
              <td className="mobileScreenshotsRow">{MobileImg(1)}</td>
              <td className="mobileScreenshotsRow">{MobileImg(2)}</td>
            </tr>
            <tr>
              <td className="mobileScreenshotsRow">{MobileImg(3)}</td>
              <td className="mobileScreenshotsRow">{MobileImg(4)}</td>
              <td className="mobileScreenshotsRow">{MobileImg(5)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkImagesEdit;
