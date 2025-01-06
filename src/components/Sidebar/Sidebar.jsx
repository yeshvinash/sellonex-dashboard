import React, { useState } from "react";
import {
  ResponsiveMediaQuery,
  SidebarLogo,
  SidebarMain,
  SidebarWrap,
} from "./SidebarStyledComponent";
import Logo from "../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
import SVGIcons from "../Data/SVGIcons";
import { Image } from "antd";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  return (
    <ResponsiveMediaQuery>
      <SidebarMain>
        <SidebarLogo>
          <Link to="/">
            <Image preview={false} src={Logo} />
          </Link>
        </SidebarLogo>
        <SidebarWrap>
          <div className="sidebar-topheader-menuitem">
            <h5 className="fw-300">Main Menu</h5>
            <ul>
              <li>
                <Link
                  className={
                    activeLink === "home" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("home")}
                >
                  {SVGIcons.Home}
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "about" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("about")}
                >
                  {SVGIcons.Order}
                  <span> order</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "customers" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("customers")}
                >
                  {SVGIcons.Customers}
                  <span>Customers</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "products" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("products")}
                >
                  {SVGIcons.Products}
                  <span> Products</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "analytics" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("analytics")}
                >
                  {SVGIcons.Anayltics}
                  <span>Analytics</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-bottomheader-menuitem">
            <h5 className="fw-300">Finance</h5>
            <ul>
              <li>
                <Link
                  className={
                    activeLink === "overview" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("overview")}
                >
                  {SVGIcons.Overview}
                  <span>Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "billing" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("billing")}
                >
                  {SVGIcons.Billing}
                  <span> Billing</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    activeLink === "payout" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleSetActive("payout")}
                >
                  {SVGIcons.Payout}
                  <span>Payout</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout-wrap">
            <Link
              className={
                activeLink === "logout" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleSetActive("logout")}
            >
              {SVGIcons.LogOut}
              <span>Logout</span>
            </Link>
          </div>
        </SidebarWrap>
      </SidebarMain>
    </ResponsiveMediaQuery>
  );
};

export default Sidebar;
