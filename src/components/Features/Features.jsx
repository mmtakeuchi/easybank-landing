import React from "react";
import "./Features.scss";
import online from "../../assets/images/icon-online.svg";
import budgeting from "../../assets/images/icon-budgeting.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import api from "../../assets/images/icon-api.svg";

const Features = () => {
  return (
    <div className="featureContainer">
      <div className="featureHeader">
        <h1 className="title">Why choose Easybank?</h1>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </div>
      <ul className="featuresList">
        <li className="feature">
          <img src={online} alt="online banking icon" className="icon" />
          <div className="featureText">
            <h2 className="featureTitle">Online Banking</h2>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </div>
        </li>
        <li className="feature">
          <img src={budgeting} alt="budgeting icon" className="icon" />
          <div className="featureText">
            <h2 className="featureTitle">Simple Budgeting</h2>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </div>
        </li>
        <li className="feature">
          <img src={onboarding} alt="onboarding icon" className="icon" />
          <div className="featureText">
            <h2 className="featureTitle">Fast Onboarding</h2>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </div>
        </li>
        <li className="feature">
          <img src={api} alt="api icon" className="icon" />
          <div className="featureText">
            <h2 className="featureTitle">Open API</h2>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
