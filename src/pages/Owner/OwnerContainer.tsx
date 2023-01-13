import React from "react";
import { Helmet } from "react-helmet";
import Owner from "./Owner";

const OwnerContainer = () => {
  return (
    <>
      <Helmet>
        <title>Betting dApp | Owner</title>
      </Helmet>
      <Owner />
    </>
  );
};

export default OwnerContainer;
