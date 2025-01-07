import React, { useState, useEffect } from "react";
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
  StyledDropdown,
} from "./HeaderStyledComponent";
import { SidebarWrap } from "../Sidebar/SidebarStyledComponent";
import SVGIcons from "../Data/SVGIcons";
import { Space, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import SearchBar from "../SearchBar";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [userState, setUserState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // First useEffect to calculate Header Height
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementById("header");
      const spaceTop = document.querySelector(".header-space");
      spaceTop.style.paddingTop = `${headerElement.offsetHeight}px`;
    };

    updateHeaderHeight();

    const handleResize = () => {
      updateHeaderHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Second useEffect run to  Header Height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const body = document.querySelector("html");
    setUserState(!userState);
    body.classList.toggle("show-menu");
  };
  return (
    <>
      <ResponsiveMediaQuery>
        <GlobalStyle />
        <Container id="header" className={isScrolled ? "scrolled" : ""}>
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
                <SearchBar />
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
        <div className="header-space"></div>
      </ResponsiveMediaQuery>
    </>
  );
};

export default Header;
