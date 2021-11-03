import React from "react";
import "./Footer.scss";
import Attribution from "../Attribution/Attribution";

const Footer = () => {
  return (
    <div className="footer">
      About Us Contact Blog Careers Support Privacy Policy Request Invite ©
      Easybank. All Rights Reserved
      <Attribution />
    </div>
  );
};

export default Footer;
