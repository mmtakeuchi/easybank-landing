import React from "react";
import "./Main.scss";
import Features from "../Features/Features";
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
      <div className="articlesContainer">
        Latest Articles
        <ul>
          <li>
            By Claire Robinson Receive money in any currency with no fees The
            world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </li>
          <li>
            By Wilson Hutton Treat yourself without worrying about money Our
            simple budgeting feature allows you to separate out your spending
            and set realistic limits each month. That means you …
          </li>
          <li>
            By Wilson Hutton Take your Easybank card wherever you go We want you
            to enjoy your travels. This is why we don’t charge any fees on
            purchases while you’re abroad. We’ll even show you …
          </li>
          <li>
            By Claire Robinson Our invite-only Beta accounts are now live! After
            a lot of hard work by the whole team, we’re excited to launch our
            closed beta. It’s easy to request an invite through the site ...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
