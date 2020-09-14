import React from "react";
import "./Footer.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Footer() {
  return (
    <footer className="footer">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </button>
      <div className="footer__container">
        <div className="footer__col">
          <div className="footer__colTitle">Get to Know Us</div>
          <div className="footer__colLink">
            <a href="#">Carreers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Tours</a>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Make Money with Us</div>
          <div className="footer__colLink">
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell Your Apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">
              <ChevronRightIcon />
              See More Make Money with Us
            </a>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Amazon Payment Products</div>
          <div className="footer__colLink">
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Let Us Help You</div>
          <div className="footer__colLink">
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Amazon Assistant</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
