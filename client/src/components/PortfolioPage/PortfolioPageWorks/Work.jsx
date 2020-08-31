import React from "react";
import BlockTitleText from "../../../common/BlockTitle";
import Button from "../../../common/Button";
import "./PortfolioPageWorks.css";

let Work = (props) => {
  let WorkData = props.works.map((work) => {
    if (props.workName) {
      if (work.urlAdress === props.workName) {
        let workStyle = work.additional.textStyles.map((style) => {
          return (
            <p
              key={style.id}
              className="workStyle"
              style={{ fontSize: style.size + "px", fontWeight: style.weight }}
            >
              {style.name}
            </p>
          );
        });
        let workColors = work.additional.colors.map((color) => {
          return (
            <div key={color.id} className="colorEllipse" style={{ background: color.color }}></div>
          );
        });
        let whatIDid = work.additional.whatIDid.map((point) => {
          return <p key={point.id}> {point.name}</p>;
        });
        return (
          <div>
            <header
              className="workHeader"
              style={{ backgroundImage: "url(" + work.workBackground + ")" }}
            >
              <div className="workIntro">
                <div className="workIntroText wrapper">
                  <h1>{work.workName}</h1>
                  <p>{work.additional.workTitle}</p>
                </div>
              </div>
            </header>

            <div className="workDescriber">
              <div className="workMainLogo">
                <img src={work.workPhoto} alt="" />
              </div>
              <div className="workMainInfo wrapper">
                <div className="workOverview">
                  <div className="workTitle">
                    <h2>ABOUT PROJECT</h2>
                    <p>{work.additional.aboutProject}</p>
                  </div>
                  <div className="designInfo">
                    <div className="workTypography">
                      <h2>Typography</h2>
                      <p>{work.additional.fontName}</p>
                      <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
                      <p>abcdefgijklmnopqrstuvwxyz</p>
                    </div>
                    <div className="workStyles">
                      <h2>Text styles</h2>
                      {workStyle}
                    </div>
                    <div className="workColors">
                      <h2>Colors</h2>
                      <div className="colorEllipses">{workColors}</div>
                    </div>
                  </div>
                </div>
                <div className="workDetails">
                  <div className="detailsInfo">
                    <h3>PROJECT TYPE</h3>
                    <p>{work.smallDescription}</p>
                  </div>
                  <div className="detailsInfo">
                    <h3>WHAT I DID</h3>
                    {whatIDid}
                  </div>
                  <div className="detailsInfo">
                    <h3>TECHNOLOGY USED</h3>
                    <p>{work.additional.technologyUsed}</p>
                  </div>
                  <Button btnUrl={work.onlineUrl} btnTarget="_blank" btnText="Visit site" />
                </div>
              </div>
            </div>

            <div className="workScreenshots wrapper">
              <BlockTitleText
                titleclassName="titleLines titleLines3"
                blockTitleText="desktop version"
              />
              <p className="sectionsParagraph">
                Main sections of the KazTransGas website (concept). <br />
                Display on the desktop version.
              </p>

              <table className="desktopScreenshots">
                <tbody>
                  <tr>
                    <td className="desktopScreenshotsRow">
                      <img src={work.additional.desktopImg[0].img} alt=""></img>
                    </td>
                    <td className="desktopScreenshotsRow">
                      <img src={work.additional.desktopImg[1].img} alt=""></img>
                    </td>
                  </tr>
                  <tr>
                    <td className="desktopScreenshotsRow">
                      <img src={work.additional.desktopImg[2].img} alt=""></img>
                    </td>
                    <td className="desktopScreenshotsRow">
                      <img src={work.additional.desktopImg[3].img} alt=""></img>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mobileVersionSection">
                <BlockTitleText
                  titleclassName="titleLines titleLines3"
                  blockTitleText="mobile version"
                />
                <p className="sectionsParagraph">
                  Main sections of the dental clinic website. <br />
                  Display on the mobile version.
                </p>

                <table>
                  <tbody>
                    <tr>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[0].img} alt=""></img>
                      </td>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[1].img} alt=""></img>
                      </td>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[2].img} alt=""></img>
                      </td>
                    </tr>
                    <tr>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[3].img} alt=""></img>
                      </td>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[4].img} alt=""></img>
                      </td>
                      <td className="mobileScreenshotsRow">
                        <img src={work.additional.mobileImg[5].img} alt=""></img>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="viewAllParagraph">
                To view all sections, please go to the project website.
              </p>
              <Button btnUrl={work.onlineUrl} btnTarget="_blank" btnText="Visit site" />
            </div>
          </div>
        );
      }
    }
  });

  return <div>{WorkData}</div>;
};

export default Work;
