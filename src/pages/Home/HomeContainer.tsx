import React, { useEffect } from "react";
import "./home.scss";
import { homeContent } from "../../content/homeContent";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { getUserAccount } from "../../redux/actions";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const connectWallet = () => {
    dispatch(getUserAccount());
  };

  return (
    <>
      <Home homeContent={homeContent} connectWallet={connectWallet} />
    </>
  );
};

export default HomeContainer;
