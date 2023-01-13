import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Betting dApp | Home</title>
      </Helmet>
      <Home homeContent={homeContent} connectWallet={connectWallet} />
    </>
  );
};

export default HomeContainer;
