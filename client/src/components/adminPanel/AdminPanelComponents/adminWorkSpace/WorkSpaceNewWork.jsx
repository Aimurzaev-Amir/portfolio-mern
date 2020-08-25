import React from "react";
import { reduxForm } from "redux-form";
import "../../Admin.css";
import mainImg from "../../img/mainImgExample.png";
import HeaderOFWork from "./NewWorkComponents/HeaderOfWork";
import WorkOverviewEdit from "./NewWorkComponents/WorkOverviewEdit";
import WorkDetailsEdit from "./NewWorkComponents/WorkDetailesEdit";
import BlockTitleText from "../../../../common/BlockTitle";

const WorkSpaceNewWork = (props) => {
  const onChangeMobileImg = (e) => {
    // props.setMobileImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <HeaderOFWork
        work={props.work}
        changePreview={props.changePreview}
        changePhoto={props.changePhoto}
        changeBackground={props.changeBackground}
        createWorkItem={props.createWorkItem}
      />
      <div className="workDescriber">
        <div className="workMainLogo">
          <img src={props.work.workPhoto || mainImg} alt={props.work.photoDescription} />
        </div>
        <div className="workMainInfo wrapper">
          <WorkOverviewEdit work={props.work} setColor={props.setColor} />
          <WorkDetailsEdit work={props.work} setWhatIDid={props.setWhatIDid} />
        </div>
      </div>

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
                    <input type="file" name="img" id="mobileImg" onChange={onChangeMobileImg} />
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
    </form>
  );
};

const CreateNewWorkReduxForm = reduxForm({ form: "createNewWork" })(WorkSpaceNewWork);

export default CreateNewWorkReduxForm;
