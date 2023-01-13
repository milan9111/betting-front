import React from "react";
import { Helmet } from "react-helmet";
import Tables from "./Tables";

const TablesContainer = () => {
  return (
    <>
      <Helmet>
        <title>Betting dApp | Tables</title>
      </Helmet>
      <Tables />
    </>
  );
};

export default TablesContainer;
