import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="tag-header">Litte Tags</h3>
      <div className="greeting">Hey Mihir</div>
      <div className="category-list">
        <div className="menu">
          <div className="category">Categories</div>
          <ul className="category-name">
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Accessories
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Shirts
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Pants
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Jackets
              </a>
            </li>
          </ul>
        </div>
        <ul className="orders">
          <li className="navigation-item order">
            <a href="#" className="order-navigation-link">
              Past Orders
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="order-navigation-link">
              Add Address
            </a>
          </li>
        </ul>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
}