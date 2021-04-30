/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Sidebar.scss";
import { Link } from 'react-router-dom';
import withTranslator from "../../hoc/withTranslation";

function Sidebar(props) {
  return (
    <div className={props.isSidebar ? 'openSidebar' : 'closeSidebar'}>
      {/* <div className="greeting">Hey Mihir</div> */}
      <div className="category-list">
        <div className="menu">
          <div className="category">{props.strings.Categories}</div>
          <ul className="category-name">
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => props.setIsSidebar(false)} to="/products/men clothing">
                {props.strings.MenClothing}
              </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => props.setIsSidebar(false)} to="/products/women clothing">
                {props.strings.WomenClothing}
              </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => props.setIsSidebar(false)} to="/products/jewelery">
                {props.strings.Jewelery}
              </Link>
            </li>
            <li className="navigation-item">
              <Link className="navigation-link" onClick={() => props.setIsSidebar(false)} to="/products/electronics">
                {props.strings.Electronics}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="sidebar-hr" />

        <ul className="orders">
          <div className="category my-account">{props.strings.MyAccount}</div>
          <li className="navigation-item order">
            <Link className="order-navigation-link" onClick={() => props.setIsSidebar(false)} to="/orders">
              {props.strings.PastOrders}
            </Link>
          </li>
          <li className="navigation-item">
            <a href="#" onClick={() => props.setIsSidebar(false)} className="order-navigation-link">
              {props.strings.AddAddress}
            </a>
          </li>
        </ul>
        <div className="logout">{props.strings.Logout}</div>
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  strings: {
    Categories: "Categories",
    MenClothing: "Men Clothing",
    WomenClothing: "Women Clothing",
    Jewelery: "Jewelery",
    Electronics: "Electronics",
    MyAccount: "My Account",
    PastOrders: "Past Orders",
    AddAddress: "Add Address",
    Logout: "Logout"
  }
}


export default withTranslator('SideBarComponent')(Sidebar);
