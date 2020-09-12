import React from "react";
import "../BlogPage.css";
import logo from "../../Header/img/Logo.svg";
import facebook from "../img/facebook.svg";
import googlePlus from "../img/google-plus.svg";
import linkedin from "../img/linkedin.svg";
import pinterest from "../img/pinterest.svg";
import twitter from "../img/twitter.svg";
import vk from "../img/vk.svg";

const ShareArticle = () => {
  const urlAddress = window.location.href;
  return (
    <div className="shareButtons">
      <a
        href={
          "http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=" +
          urlAddress +
          "&p%5Bsummary%5D=Aimurzayev Amir Article&p%5Burl%5D=" +
          urlAddress +
          "&p%5Bimages%5D%5B0%5D=" +
          logo
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="facebook shareBlock">
          <img src={facebook} alt="facebook logo icon" />
        </div>
      </a>

      <a href={"https://plus.google.com/share?url=" + urlAddress} target="_blank" rel="noopener noreferrer">
        <div className="google shareBlock">
          <img src={googlePlus} alt="google plus icon logo" />
        </div>
      </a>

      <a href={"https://www.linkedin.com/cws/share?url=" + urlAddress} target="_blank" rel="noopener noreferrer">
        <div className="linkedin shareBlock">
          <img src={linkedin} alt="linkedin icon logo" />
        </div>
      </a>

      <a
        href={
          "https://www.pinterest.com/pin/create/bookmarklet/?description=<?=get_the_title($id)?>&url=" +
          urlAddress
        }
        target="_blank" rel="noopener noreferrer"
      >
        <div className="pinterest shareBlock">
          <img src={pinterest} alt="pinterest icon logo" />
        </div>
      </a>

      <a href={"https://vk.com/share.php?url=" + urlAddress} target="_blank" rel="noopener noreferrer">
        <div className="vk shareBlock">
          <img src={vk} alt="vk icon logo" />
        </div>
      </a>

      <a
        href={
          "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=" +
          urlAddress +
          "&url=" +
          urlAddress
        }
        target="_blank" rel="noopener noreferrer"
      >
        <div className="twitter shareBlock">
          <img src={twitter} alt="twitter icon logo" />
        </div>
      </a>
    </div>
  );
};

export default ShareArticle;
