import styled, { createGlobalStyle } from "styled-components";
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
  z-index: 5;

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
  .searchbar-input {
    position: relative;
    .custom-input {
      font-family: var(--primary-font);
      width: 320px;
      padding: 11px 16px 11px 35px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 400;
      background: var(--black-tint-2);
      outline: none;
      border: 1px solid var(--light-gray-tint-1);
      color: var(--white);
    }
    .search-icon {
      color: var(--light-gray);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 11px;
      display: flex;
      svg {
        width: 16px;
        height: 16px;
      }
    }
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
}
`;

export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1279px) {
    ${SearchBarWrap} {
      .custom-input {
        max-width: 280px;
      }
    }
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
    ${SearchBarWrap} {
      .custom-input {
        max-width: 220px;
      }
    }
    ${HeaderWrap} {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 10px;
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
    .header-content-wrap {
      display: none;
    }
    ${HeaderWrap} {
      .header-logo-wrap {
        ${HeaderLogo} {
          display: block;
        }
      }
    }
    ${ToggleButton} {
      display: block;
    }
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
    padding: 80px 30px 30px;
    border: none;
    background-color: var(--black-tint-1);
    transition: all 0.7s ease 0s;
    transform: translateX(110%);
    .show-menu & {
      transform: translateX(0%);
    }
    /* .nav-link {
      width: 200px;
    } */
  }
`;
