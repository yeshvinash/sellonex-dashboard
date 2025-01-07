import styled, { createGlobalStyle } from "styled-components";
import { Dropdown } from "antd";
import { SidebarWrap } from "../Sidebar/SidebarStyledComponent";

export const Container = styled.header`
  z-index: 99;
  width: 100%;
  margin-bottom: 12px;

  ${SidebarWrap} {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  width: 168px;
  height: auto;
  z-index: 99;
  padding-right: 20px;
  border-right: 1px solid var(--light-gray-tint-1);

  .ant-image {
    display: block;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 28px;
    font-weight: 600;
    -webkit-line-clamp: 1;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--light-gray);
  }
  .header-logo-wrap {
    ${HeaderLogo} {
      display: none;
    }
  }
`;

export const SearchBarWrap = styled.div`
  display: flex;
  align-items: center;
  padding-right: 14px;
  margin-right: 14px;
  border-right: 1px solid var(--light-gray-tint-1);
  & > div:not(:last-child) {
    margin-right: 10px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    width: 38px;
    height: 38px;
    background: var(--black-tint-2);
    border-radius: 8px;
    border: 1px solid var(--light-gray-tint-1);
    color: var(--white);
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const HeaderRightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ToggleButton = styled.div`
  line-height: normal;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 99;
  display: block;
  margin-left: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.5s ease 0s;
  display: none;
`;

export const HamburgerLine = styled.div`
  position: relative;
  width: 25px;
  height: 2px;
  background-color: var(--white);
  display: inline-block;
  vertical-align: middle;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 17px;
    height: 2px;
    background-color: var(--white);
    right: 0;
    transition: all 0.5s;
    animation: 0.3s linear forwards openCloseByeSpan;
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
  }

  html.show-menu & {
    height: 0;
  }

  html.show-menu &::after,
  html.show-menu &::before {
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(45deg);
    top: -1px;
    background-color: var(--white);
  }

  html.show-menu &::after {
    transform: rotate(-45deg);
  }
`;

export const GlobalStyle = createGlobalStyle`
    .header-space{
      display: none;
    }

  @media screen and (max-width: 991px) {
    html.show-menu {
      overflow: hidden;
      & body{
        height: 100%;
      }
      &:after {
      content: "";
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgb(0 0 0 / 60%); 
      }
    }
    ${ToggleButton} { 
      display: block;
    }
    .header-space{
      display: block;
    }
}
`;

export const StyledDropdown = styled(Dropdown)`
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

// Responsive Media Query
export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1279px) {
    ${HeaderWrap} {
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 1199px) {
    ${HeaderWrap} {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 10px;
      }
    }
    ${StyledDropdown} {
      &.profile {
        .profile-wrap {
          .ant-avatar {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
    ${SearchBarWrap} {
      .custom-input {
        font-size: 12px;
        padding: 9px 11px 9px 35px;
      }
      a {
        width: 34px;
        height: 34px;
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    ${Container} {
      position: fixed;
      top: 0;
      left: 0;
      padding: 14px;
      z-index: 99;
      margin-bottom: 0;
      &.scrolled {
        background-color: var(--black-tint-1);
      }
    }
    .header-content-wrap {
      display: none;
    }
    ${HeaderWrap} {
      .header-logo-wrap {
        ${HeaderLogo} {
          width: 150px;
          display: block;
        }
      }
    }
    ${ToggleButton} {
      display: block;
    }

    ${SidebarWrap} {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 60%;
      overflow: auto;
      text-align: center;
      z-index: 10;
      height: 100vh;
      display: block;
      padding: 60px 30px 30px;
      border: none;
      background-color: var(--black-tint-1);
      transition: all 0.7s ease 0s;
      transform: translateX(110%);
      .show-menu & {
        transform: translateX(0%);
      }
      li {
        max-width: 220px;
      }
      .logout-wrap {
        a {
          max-width: 220px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    ${Container} {
      padding: 12px;
    }
    ${SidebarWrap} {
      width: 100%;
    }
    ${StyledDropdown} {
      &.profile {
        width: 90px;
        .profile-wrap {
          .profile-name {
            width: 3ch;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 12px;
          }
          .profile-role {
            width: 5ch;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 11px;
          }
        }
      }
    }
    ${HeaderWrap} {
      .header-logo-wrap {
        ${HeaderLogo} {
          padding-right: 10px;
          width: 130px;
        }
      }
    }
    ${SearchBarWrap} {
      & > div:not(:last-child) {
        margin-right: 6px;
      }
      padding-right: 10px;
      margin-right: 10px;
      a {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    ${HeaderWrap} {
      .header-logo-wrap {
        ${HeaderLogo} {
          width: 110px;
        }
      }
    }
    ${StyledDropdown} {
      &.profile {
        width: 70px;
        .profile-wrap {
          .ant-avatar {
            width: 30px;
            height: 30px;
            margin-right: 4px;
          }
          .profile-name {
            font-size: 11px;
          }
          .profile-role {
            font-size: 10px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 374px) {
    ${HeaderWrap} {
      .header-logo-wrap {
        ${HeaderLogo} {
          border-right: none;
          width: 100px;
        }
      }
    }
    ${StyledDropdown} {
      &.profile {
        width: 50px;
        .profile-wrap {
          .ant-avatar {
            width: 26px;
            height: 26px;
          }
          .profile-name {
            font-size: 10px;
          }
          .profile-role {
            font-size: 8px;
          }
        }
      }
    }
    ${SearchBarWrap} {
      padding-right: 8px;
      margin-right: 8px;
      a {
        width: 28px;
        height: 28px;
        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`;
