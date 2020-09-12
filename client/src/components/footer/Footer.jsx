import React from "react";
import "./Footer.css";
import Logo from "./img/Logo.svg";
import behance from "./img/socialNetworks/behance-footer.svg";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import vk from "./img/socialNetworks/vk-footer.svg";
import { NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <div className="footer">
      <div className="logoFooter" data-aos="zoom-in-up" data-aos-duration="600">
        <NavLink to={"/"}>
          <img src={Logo} alt="Logo Aimurzayev Amir" />
        </NavLink>
      </div>
      <nav className="footerNav" data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="200">
        <ul className="navLinks">
          <li className="navItem">
            <NavLink to={"/about-me"} className="navItemLink">
              About me
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/portfolio"} className="navItemLink">
              Portfolio
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/blog"} className="navItemLink">
              Blog
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/contacts"} className="navItemLink">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>

      <p data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="300">
        © 2020 Amir Aimurzayev. All rights reserved.
      </p>
      <div
        className="footerSocial"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="600"
      >
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin Aimurzayev Amir" />
        </a>
        <a href="https://www.behance.net/Aimurzayev" target="_blank" rel="noopener noreferrer">
          <img src={behance} alt="behance Aimurzayev Amir" />
        </a>
        <a href="https://vk.com/id140204225" target="_blank" rel="noopener noreferrer">
          <img src={vk} alt="vk Aimurzayev Amir" />
        </a>
        <a href="https://www.instagram.com/amiraimurzayev/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram Aimurzayev Amir" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
