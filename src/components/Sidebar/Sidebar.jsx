/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Sidebar.scss";
import { Link } from 'react-router-dom';

export default function Sidebar({ isSidebar, setIsSidebar }) {
  return (
    <div className={isSidebar ? 'openSidebar' : 'closeSidebar'}>
      {/* <div className="greeting">Hey Mihir</div> */}
      <div className="category-list">
        <div className="menu">
          <div className="category">Categories</div>
          <ul className="category-name">
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => setIsSidebar(false)} to="/products/men clothing">
                Men Clothing
                </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => setIsSidebar(false)} to="/products/women clothing">
                Women's Clothing
                </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => setIsSidebar(false)} to="/products/jewelery">
                Jewlery
                </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => setIsSidebar(false)} to="/products/electronics">
                Electronics
                </Link>
            </li>
          </ul>
        </div>
        <hr className="sidebar-hr" />

        <ul className="orders">
          <div className="category my-account">My Account</div>
          <li className="navigation-item order">
            <Link className="order-navigation-link" onClick={() => setIsSidebar(false)} to="/orders">
              Past Orders
            </Link>
          </li>
          <li className="navigation-item">
            <a href="#" onClick={() => setIsSidebar(false)} className="order-navigation-link">
              Add Address
            </a>
          </li>
        </ul>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
}
