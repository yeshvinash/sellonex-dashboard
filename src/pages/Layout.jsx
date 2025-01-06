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
  min-height: 100vh;
  /* height: 100vh; */
  padding: 14px;
`;

const Main = styled.div`
  width: calc(100% - 220px);
  padding-left: 14px;
  /* margin-left: 220px; */
  display: flex;
  flex-direction: column;
  height: inherit;
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
