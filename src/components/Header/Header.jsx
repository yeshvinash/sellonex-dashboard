import React, { useState } from "react";
import {
  Container,
  GlobalStyle,
  HamburgerLine,
  HeaderLogo,
  HeaderRightWrap,
  HeaderWrap,
  ResponsiveMediaQuery,
  SearchBarWrap,
  ToggleButton,
} from "./HeaderStyledComponent";
import { SidebarWrap } from "../Sidebar/SidebarStyledComponent";
import SVGIcons from "../Data/SVGIcons";
import { Dropdown, Space, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
  font-family: var(--primary-font);
  cursor: pointer;
  &.profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    .profile-wrap {
      display: flex;
      align-items: center;
      .ant-avatar {
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        margin-right: 8px;

        @media screen and (max-width: 1199px) {
          width: 34px;
          height: 34px;
        }
      }
      .profile-name {
        font-weight: 400;
        font-size: 13px;
        color: var(--white);
        -webkit-line-clamp: 2;
        word-break: break-word;
      }
      .profile-role {
        font-size: 11px;
        word-break: break-word;
        color: var(--light-gray);
      }
    }
    .arrow-icon {
      width: 10px;
      flex-shrink: 0;
      height: auto;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [userState, setUserState] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Bryan Regon",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const users = [
    {
      name: "Bryan Regon",
      role: "Administrator",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Alice Johnson",
      role: "Editor",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  const handleMenuClick = ({ key }) => {
    const selectedUser = users.find((user) => user.name === key);
    setCurrentUser(selectedUser);
  };

  const items = users.map((user) => ({
    key: user.name,
    label: (
      <Space>
        <Avatar src={user.avatar} />
        <span>
          {user.name} ({user.role})
        </span>
      </Space>
    ),
  }));
  const toggleMenu = () => {
    const body = document.querySelector("html");
    setUserState(!userState);
    body.classList.toggle("show-menu");
  };
  return (
    <>
      <ResponsiveMediaQuery>
        <GlobalStyle />
        <Container id="header">
          <HeaderWrap>
            <div className="d-align header-logo-wrap">
              <HeaderLogo>
                <Link to="/">
                  <Image preview={false} src={Logo} />
                </Link>
              </HeaderLogo>
              <div className="header-content-wrap">
                <h1 className="text-ellipsis">
                  Good Morning, {currentUser.name.split(" ")[0]}{" "}
                </h1>
                <p>Manage your order and sells with your dashboard</p>
              </div>
            </div>
            <HeaderRightWrap>
              <SearchBarWrap>
                <div className="searchbar-input">
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Search here..."
                  />
                  <span className="search-icon">{SVGIcons.Search}</span>
                </div>
                <div>
                  <Link>{SVGIcons.Notification}</Link>
                </div>
                <div>
                  <Link>{SVGIcons.Theme}</Link>
                </div>
              </SearchBarWrap>
              <StyledDropdown
                trigger={["click"]}
                menu={{ items, onClick: handleMenuClick }}
              >
                <div className="profile">
                  <div className="profile-wrap">
                    <Avatar src={currentUser.avatar} />
                    <div style={{ paddingRight: "4px" }}>
                      <p className="profile-name text-ellipsis">
                        {currentUser.name}
                      </p>
                      <span className="profile-role">{currentUser.role}</span>
                    </div>
                  </div>
                  <span className="arrow-icon"> {SVGIcons.DownArrow}</span>
                </div>
              </StyledDropdown>
              <ToggleButton
                className="hamburger toggle-btn"
                id="hamburger"
                onClick={toggleMenu}
              >
                <HamburgerLine />
              </ToggleButton>
            </HeaderRightWrap>
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
                        activeLink === "customers"
                          ? "nav-link active"
                          : "nav-link"
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
                        activeLink === "products"
                          ? "nav-link active"
                          : "nav-link"
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
                        activeLink === "analytics"
                          ? "nav-link active"
                          : "nav-link"
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
                        activeLink === "overview"
                          ? "nav-link active"
                          : "nav-link"
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
                        activeLink === "billing"
                          ? "nav-link active"
                          : "nav-link"
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
          </HeaderWrap>
        </Container>
      </ResponsiveMediaQuery>
    </>
  );
};

export default Header;
