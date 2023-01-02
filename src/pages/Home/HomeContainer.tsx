import React from "react";
import "./home.scss";
import { homeContent } from "../../content/homeContent";
import Home from "./Home";

const HomeContainer = () => {
  return (
    <>
      <Home homeContent={homeContent} />
    </>
  );
};

export default HomeContainer;
