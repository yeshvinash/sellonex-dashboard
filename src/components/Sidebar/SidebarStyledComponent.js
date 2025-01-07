import styled from "styled-components";

export const SidebarMain = styled.section`
  position: sticky;
  top: 0;
  width: 220px;
  flex-shrink: 0;
`;
export const SidebarLogo = styled.div`
  margin-bottom: 28px;
  border-right: 1px solid var(--light-gray-tint-1);
  .ant-image {
    height: auto;
    width: 169px;
    display: block;
    .ant-image-img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const SidebarWrap = styled.div`
  color: var(--white);
  background: var(--black-tint-2);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--light-gray-tint-1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  h5 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  li:not(:last-child) {
    margin-bottom: 4px;
  }

  .nav-link {
    font-family: var(--primary-font);
    color: var(--light-gray);
    padding: 12px 14px;
    font-size: 14px;
    border: none;
    font-weight: 400;
    background: transparent;
    transition: 0.3s all ease;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-transform: capitalize;
    border-radius: 8px;
    &.active {
      color: var(--white);
      background: var(--purple);
    }
    svg {
      width: 18px;
      height: 18px;
    }
    span {
      margin-left: 12px;
    }
  }
  .sidebar-topheader-menuitem {
    border-bottom: 1px solid var(--dark-gray);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  .sidebar-bottomheader-menuitem {
    margin-bottom: 16px;
  }
  .logout-wrap {
    padding-top: 16px;
    border-top: 1px solid var(--dark-gray);
    margin-top: auto;
    .nav-link {
      &.active {
        color: var(--white);
        background: var(--red);
      }
    }
  }
`;

export const ResponsiveMediaQuery = styled.div`
  @media screen and (max-width: 1279px) {
    ${SidebarWrap} {
    }
    ${SidebarLogo} {
      margin-bottom: 22px;
    }
  }
  @media screen and (max-width: 1199px) {
    ${SidebarMain} {
      width: 190px;
    }
    ${SidebarLogo} {
      margin-bottom: 22px;
      .ant-image {
        width: 150px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    ${SidebarMain} {
      display: none;
    }
  }
`;
