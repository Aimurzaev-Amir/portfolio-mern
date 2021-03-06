import React from "react";
import "./Header.css";
import logo from "./img/Logo.svg";
import logoMobile from "./img/Logo-mobile.svg";
import behance from "./img/socialNetworks/behance-footer.svg";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import vk from "./img/socialNetworks/vk-footer.svg";
import github from "./img/socialNetworks/github.svg";
import { NavLink } from "react-router-dom";

let Navbar = (props) => {
  return (
    <div
      className={props.opacity ? "navOverlay headerOpacity sticky" : "navOverlay sticky"}
      id="myHeader"
    >
      <nav className="wrapper mainNav">
        <div className="logo">
          <NavLink to={"/"}>
            <img className="logoDesktop" src={logo} alt="Aimurzaev Amir logo" />
          </NavLink>
          <NavLink to={"/"}>
            <img className="logoMobile" src={logoMobile} alt="Aimurzaev Amir m-logo" />
          </NavLink>
        </div>
        <div className="hamburger" onClick={props.onToggleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={props.toggle ? "navLinks open" : "navLinks"}>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/about-me"} className="navItemLink">
              About me
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/portfolio"} className="navItemLink">
              Portfolio
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/blog"} className="navItemLink">
              Blog
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/contacts"} className="navItemLink">
              Contacts
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/authorization"} className="navItemLink">
              {props.validation ? "aimurzayev" : "Login"}
            </NavLink>
          </li>
          <li>
            <div className="navSocial">
              <div className="socialItem">
                <a href="https://github.com/Aimurzaev-Amir">
                  <img src={github} alt="github Aimurzaev Amir" />
                </a>
              </div>
              <div className="socialItem">
                <a href="#a">
                  <img src={linkedin} alt="linkedin Aimurzaev Amir" />
                </a>
              </div>
              <div className="socialItem">
                <a href="https://www.behance.net/Aimurzayev">
                  <img src={behance} alt="behance Aimurzaev Amir" />
                </a>
              </div>
              <div className="socialItem">
                <a href="https://vk.com/id140204225">
                  <img src={vk} alt="vk Aimurzaev Amir" />
                </a>
              </div>
              <div className="socialItem">
                <a href="https://www.instagram.com/amiraimurzayev/">
                  <img src={instagram} alt="instagram Aimurzaev Amir" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
