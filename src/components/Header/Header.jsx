import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderLogo,
  HeaderRightWrap,
  HeaderWrap,
  SearchBarWrap,
} from "./HeaderStyledComponent";
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
  const [currentUser, setCurrentUser] = useState({
    name: "Bryan Regon",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

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
  return (
    <>
      <Container id="header">
        <HeaderWrap>
          {/* <HeaderLogo>
            <Link to="/">
              <Image preview={false} src={Logo} />
            </Link>
          </HeaderLogo> */}
          <div>
            <h1 className="text-ellipsis">
              Good Morning, {currentUser.name.split(" ")[0]}{" "}
            </h1>
            <p>Manage your order and sells with your dashboard</p>
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
          </HeaderRightWrap>
        </HeaderWrap>
      </Container>
    </>
  );
};

export default Header;
