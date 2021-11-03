import React from "react";
import "./Articles.scss";
import currency from "../../assets/images/image-currency.jpg";
import confetti from "../../assets/images/image-confetti.jpg";
import plane from "../../assets/images/image-plane.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";

const Articles = () => {
  return (
    <div className="articlesContainer">
      <h1 className="title">Latest Articles</h1>
      <ul className="articleList">
        <li className="article">
          <img src={currency} alt="currency" className="articleImg" />
          <div className="articleDetails">
            <p className="author">By Claire Robinson</p>
            <h3 className="articleTitle">
              Receive money in any currency with no fees
            </h3>
            <div className="articleText">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </div>
          </div>
        </li>
        <li className="article">
          <img src={restaurant} alt="restaurant" className="articleImg" />
          <div className="articleDetails">
            <p className="author">By Wilson Hutton</p>
            <h3 className="articleTitle">
              Treat yourself without worrying about money
            </h3>
            <div className="articleText">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </div>
          </div>
        </li>
        <li className="article">
          <img src={plane} alt="plane" className="articleImg" />
          <div className="articleDetails">
            <p className="author">By Wilson Hutton</p>
            <h3 className="articleTitle">
              Take your Easybank card wherever you go
            </h3>
            <div className="articleText">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </div>
          </div>
        </li>
        <li className="article">
          <img src={confetti} alt="confetti" className="articleImg" />
          <div className="articleDetails">
            <p className="author">By Claire Robinson</p>
            <h3 className="articleTitle">
              Our invite-only Beta accounts are now live!
            </h3>
            <div className="articleText">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
