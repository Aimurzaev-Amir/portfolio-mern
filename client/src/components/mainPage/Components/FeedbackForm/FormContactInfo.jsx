import React from "react";
import "../../MainPage.css";
import behance from "../../../Header/img/socialNetworks/behance-footer.svg";
import instagram from "../../../Header/img/socialNetworks/instagram-footer.svg";
import linkedin from "../../../Header/img/socialNetworks/linkedin-footer.svg";
import vk from "../../../Header/img/socialNetworks/vk-footer.svg";

let FormContactInfo = () => {
  return (
    <div className="contactInfo">
      <p>
        E-mail
        <br />
        <a href="mailto:aimurzaev@mail.ru">aimurzaev@mail.ru</a>
      </p>
      <p>
        Phone <br />
        <a href="tel:+77775167775">+7(777)-516-77-75</a>
      </p>
      <p>
        Adress
        <br />
        Almaty, Kazakhstan
      </p>
      <div className="contactSocial">
        <p>
          for more about me, i'm <br />
          also on social:
        </p>
        <div className="socialList">
          <a href="https://www.behance.net/Aimurzayev" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse behanceEllipse">
              <img src={behance} alt="behance Aimurzayev Amir" />
            </div>
          </a>
          <a href="https://www.instagram.com/amiraimurzayev/" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse instagramEllipse">
              <img src={instagram} alt="instagram Aimurzayev Amir" />
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse linkedinEllipse">
              <img src={linkedin} alt="linkedin Aimurzayev Amir" />
            </div>
          </a>
          <a href="https://vk.com/id140204225" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse vkEllipse">
              <img src={vk} alt="vk Aimurzayev Amir" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormContactInfo;
