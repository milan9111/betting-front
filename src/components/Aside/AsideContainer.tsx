import React from "react";
import { useSelector } from "react-redux";
import "./aside.scss";
import { asideContent } from "../../content/asideContent";
import Aside from "./Aside";
import { IEthersReducer } from "../../types/ethers";

const AsideContainer = () => {
  const { userAccount, userBalance } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );

  return (
    <>
      <Aside
        asideContent={asideContent}
        userAccount={userAccount}
        userBalance={userBalance}
      />
    </>
  );
};

export default AsideContainer;
