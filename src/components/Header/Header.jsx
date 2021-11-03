import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";

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
      <span className="inviteBtn">Request Invite</span>
    </header>
  );
};

export default Header;
