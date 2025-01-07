import React, { useState } from "react";
import styled from "styled-components";
import SVGIcons from "./Data/SVGIcons";

const SearchWrap = styled.div`
  position: relative;
  z-index: 9;
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
`;

export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1279px) {
    ${SearchWrap} {
      .custom-input {
        max-width: 280px;
      }
    }
  }
  @media screen and (max-width: 1199px) {
    ${SearchWrap} {
      .custom-input {
        max-width: 220px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    ${SearchWrap} {
      .custom-input {
        width: 34px;
        height: 34px;
        padding: 4px;
        max-width: 100%;
        &:placeholder-shown {
          font-size: 0;
        }
      }
      .search-icon {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &.focused {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        z-index: 999;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        .custom-input {
          width: 100%;
          max-width: 100%;
          height: 40px;
          padding: 10px 16px 10px 35px;
          &:placeholder-shown {
            font-size: 12px;
          }
        }
        .search-icon {
          top: 50%;
          left: 11px;
          transform: translateY(-50%);
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    ${SearchWrap} {
      .custom-input {
        width: 32px;
        height: 32px;
      }
    }
  }
  @media screen and (max-width: 374px) {
    ${SearchWrap} {
      .custom-input {
        width: 28px;
        height: 28px;
      }
      .search-icon {
        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`;

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <ResponsiveMediaQuery>
      <SearchWrap className={`searchbar-input ${isFocused ? "focused" : ""}`}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="custom-input"
          placeholder="Search here..."
        />
        <span className="search-icon">{SVGIcons.Search}</span>
      </SearchWrap>
    </ResponsiveMediaQuery>
  );
};

export default SearchBar;
