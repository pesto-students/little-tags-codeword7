// eslint-disable-next-line
import React from "react";
import "./Footer.scss";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="main-part">
        <div className="contact-info">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Phone: (+91) 9876 543 210
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Address: 1418 Riverwood Drive, Suite 3245, Cottonwood, CA 96052,
                United States
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                We accept
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
          <h3 className="footer-heading">Category</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Accessories
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Jeans
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Tops
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                Jackets
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h3 className="footer-heading">Let's saty in touch</h3>
          <form className="subscribe-input">
            <input type="text" className="footer-input" />
            <button className="footer-btn">Subscribe</button>
          </form>
          <p className="footer-paragraph">
            keep up to date with our latest news and special offers
          </p>
        </div>
      </div>
      <div className="creator-part">
        <div className="copyright-text">
          <p>Copyright &copy; 2021. Little Tags website. All Rights Reserved</p>
        </div>
        <div className="text-right">
          <p>Made by Mihir and Niraj</p>
        </div>
      </div>
    </footer>
  );
}
