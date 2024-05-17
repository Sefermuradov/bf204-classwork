import React from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router";
const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoot;
