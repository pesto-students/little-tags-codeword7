/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React from "react";
import "./Footer.scss";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";
import withTranslator from "../../hoc/withTranslation";

function Footer(props) {
  return (
    <footer>
      <div className="main-part">
        <div className="contact-info">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.Phone}: (+91) 9876 543 210
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.Address}: 1418 Riverwood Drive, Suite 3245, Cottonwood, CA 96052,
                United States
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.WeAaccept}
              </a>
            </li>
            <li className="footer-list-item footer-payment">
              <a href="#" className="footer-list-link">
                <FaCcMastercard className="payment-icon" />
              </a>
              <a href="#" className="footer-list-link">
                <FaCcPaypal className="payment-icon" />
              </a>
              <a href="#" className="footer-list-link">
                <FaCcVisa className="payment-icon" />
              </a>
              <a href="#" className="footer-list-link">
                <AiFillAmazonSquare className="payment-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-category">
          <h3 className="footer-heading">{props.strings.Category}</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.MenClothing}
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.WomenClothing}
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.Jewelery}
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                {props.strings.Electronics}
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h3 className="footer-heading">{props.strings.LetsSatyInTouch}</h3>
          <form className="subscribe-input">
            <input type="text" className="footer-input" />
            <button className="footer-btn">{props.strings.Subscribe}</button>
          </form>
          <p className="footer-paragraph">
            {props.strings.keepUpToDateWithOurLatestNewsAndSpecialOffers}
          </p>
        </div>
      </div>
      <div className="creator-part">
        <div className="copyright-text">
          <p>{props.strings.Copyright} &copy; 2021. {props.strings.LittleTagsWebsiteAllRightsReserved}</p>
        </div>
        <div className="text-right">
          <p>{props.strings.MadeByMihirAndNiraj}</p>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  strings: {
    ContactInfo: "Contact Info",
    Phone: "Phone",
    Address: "Address",
    WeAaccept: "We accept",
    Category: "Category",
    MenClothing: "Men Clothing",
    WomenClothing: "Women Clothing",
    Jewelery: "Jewelery",
    Electronics: "Electronics",
    LetsSatyInTouch: "Let's saty in touch",
    Subscribe: "Subscribe",
    keepUpToDateWithOurLatestNewsAndSpecialOffers: "keep up to date with our latest news and special offers",
    Copyright: "Copyright",
    LittleTagsWebsiteAllRightsReserved: "Little Tags website. All Rights Reserved",
    MadeByMihirAndNiraj: "Made by Mihir and Niraj"
  }
}

export default withTranslator('Footer')(Footer);
