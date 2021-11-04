import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="easybank logo" />
      <ul className="headerLinks">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="inviteBtn">Request Invite</button>

      <img src={hamburger} alt="hamburger" className="hamburger" />
    </header>
  );
};

export default Header;
