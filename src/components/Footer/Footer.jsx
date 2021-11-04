import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import Attribution from "../Attribution/Attribution";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerIcons">
          <img src={logo} alt="company logo" className="logo" />
          <ul className="icons">
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </ul>
        </div>
        <ul className="footerLinks">
          <li className="link">About Us</li>
          <li className="link">Contact</li>
          <li className="link">Blog</li>
          <li className="link">Careers</li>
          <li className="link">Support</li>
          <li className="link">Privacy Policy</li>
        </ul>
        <div className="btnComponent">
          <button className="inviteBtn">Request Invite</button>
          <p className="copyright">© Easybank. All Rights Reserved</p>
        </div>
      </div>
      <Attribution />
    </div>
  );
};

export default Footer;
