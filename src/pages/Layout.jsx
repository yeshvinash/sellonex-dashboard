import React from "react";
import Header from "../components/Header/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const LayoutWrap = styled.section`
  font-family: var(--primary-font);
  background: var(--black-tint-1);
  color: var(--white);
  display: flex;
  width: 100%;
  padding: 14px;
  @media screen and (max-width: 575px) {
    padding: 12px;
  }
`;

const Main = styled.div`
  width: calc(100% - 220px);
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  height: inherit;
  @media screen and (max-width: 1199px) {
    width: calc(100% - 190px);
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Layout = () => {
  return (
    <LayoutWrap>
      <Sidebar />
      <Main>
        <Header />
        <Dashboard />
      </Main>
    </LayoutWrap>
  );
};

export default Layout;
