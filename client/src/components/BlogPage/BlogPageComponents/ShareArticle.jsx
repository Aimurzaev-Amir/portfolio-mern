import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../BlogPage.css";

const ShareArticle = () => {
  return (
    <div className="shareButtons">
      <a
        href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=[TITLE]&p%5Bsummary%5D=[TEXT]&p%5Burl%5D=[LINK]&p%5Bimages%5D%5B0%5D=[IMAGE]"
        target="_blank"
        // onClick="return Share.me(this);"
      >
        <div className="facebook shareBlock">
          {/* <FontAwesomeIcon icon="facebook" /> */}
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
      </a>

      <a
        href="https://plus.google.com/share?url=[LINK]"
        target="_blank"
        // onClick="return Share.me(this);"
      >
        <div className="google shareBlock">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/cws/share?url=[LINK]"
        target="_blank"
        // onClick="return Share.me(this);"
      >
        <div className="linkedin shareBlock">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>
      </a>

      <a
        href="https://www.pinterest.com/pin/create/bookmarklet/?description=<?=get_the_title($id)?>&url=[LINK]"
        target="_blank"
        // onClick="return Share.me(this);"
      >
        <div className="pinterest shareBlock">
          <i className="fa fa-pinterest" aria-hidden="true"></i>
        </div>
      </a>

      <a
        href="https://vk.com/share.php?url=[LINK]"
        target="_blank"
        // onClick="return Share.me(this);"
      >
        <div className="vk shareBlock">
          <i className="fa fa-vk" aria-hidden="true"></i>
        </div>
      </a>

      <a
        href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=[TITLE]&url=[LINK]"
        target="_blank"
        // onClick="return Share.me(this)"
      >
        <div className="twitter shareBlock">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  );
};

export default ShareArticle;
