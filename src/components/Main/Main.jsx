import React from "react";
import "./Main.scss";
import Features from "../Features/Features";
import Articles from "../Articles/Articles";
import mockups from "../../assets/images/image-mockups.png";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="introContainer">
        <div className="introSection">
          <div className="introText">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button>Request Invite</button>
          </div>
          <div className="mockups">
            <img src={mockups} alt="mockup images" className="mockupImg" />
          </div>
        </div>
      </div>
      <Features />
      <Articles />
    </div>
  );
};

export default Main;
