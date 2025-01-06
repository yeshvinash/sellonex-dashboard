import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
