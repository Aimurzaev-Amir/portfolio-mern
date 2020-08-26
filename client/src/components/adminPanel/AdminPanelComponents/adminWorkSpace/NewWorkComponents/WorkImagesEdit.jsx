import React from "react";
import BlockTitleText from "../../../../../common/BlockTitle";

const WorkImagesEdit = (props) => {
  return (
    <div className="workScreenshots wrapper">
      <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="desktop version" />
      <p className="sectionsParagraph">
        Main sections of the {props.work.workName} {props.work.smallDescription}. <br />
        Display on the desktop version.
      </p>

      <table className="desktopScreenshots">
        <tbody>
          <tr>
            <td className="desktopScreenshotsRow">
              {/* <img src={props.work.additional.desktopImg[0].img} alt=""></img> */}
            </td>
            <td className="desktopScreenshotsRow">
              {/* <img src={props.work.additional.desktopImg[1].img} alt=""></img> */}
            </td>
          </tr>
          <tr>
            <td className="desktopScreenshotsRow">
              {/* <img src={props.work.additional.desktopImg[2].img} alt=""></img> */}
            </td>
            <td className="desktopScreenshotsRow">
              {/* <img src={props.work.additional.desktopImg[3].img} alt=""></img> */}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mobileVersionSection">
        <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="mobile version" />
        <p className="sectionsParagraph">
          Main sections of the {props.work.workName} {props.work.smallDescription}. <br />
          Display on the mobile version.
        </p>

        <table>
          <tbody>
            <tr>
              <td className="mobileScreenshotsRow">
                <div>
                  <label htmlFor="mobileImg"> Click to choose project main img </label>
                  <input type="file" name="img" id="mobileImg" onChange={props.onChangeMobileImg} />
                </div>
                {/* {props.work.additional.mobileImg[0] ? (
                    <img src={props.work.additional.mobileImg[0].img} alt=""></img>
                  ) : (
                    
                  )} */}
                {/* <img src={props.work.additional.mobileImg[0].img} alt=""></img> */}
              </td>
              <td className="mobileScreenshotsRow">
                {/* <img src={props.work.additional.mobileImg[1].img} alt=""></img> */}
              </td>
              <td className="mobileScreenshotsRow">
                {/* <img src={props.work.additional.mobileImg[2].img} alt=""></img> */}
              </td>
            </tr>
            <tr>
              <td className="mobileScreenshotsRow">
                {/* <img src={props.work.additional.mobileImg[3].img} alt=""></img> */}
              </td>
              <td className="mobileScreenshotsRow">
                {/* <img src={props.work.additional.mobileImg[4].img} alt=""></img> */}
              </td>
              <td className="mobileScreenshotsRow">
                {/* <img src={props.work.additional.mobileImg[5].img} alt=""></img> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkImagesEdit;
