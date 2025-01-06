import styled from "styled-components";

export const Container = styled.header`
  z-index: 99;
  width: 100%;
  margin-bottom: 12px;
`;
export const HeaderLogo = styled.div`
  width: 168px;
  height: auto;
  z-index: 5;

  .ant-image {
    display: block;
  }
  @media screen and (max-width: 991px) {
    width: 150px;
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
  margin-left: auto;
`;
