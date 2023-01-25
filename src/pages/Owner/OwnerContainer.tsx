import React, { useEffect } from "react";
import "./owner.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getOwner } from "../../redux/actions";
import { IEthersReducer } from "../../types/ethers";
import { IOwnerReducer } from "../../types/owner";
import Owner from "./Owner";

const OwnerContainer: React.FC = () => {
  const { contract, userAccount } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );
  const { ownerAccount } = useSelector(
    (state: IOwnerReducer) => state.ownerReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (contract) {
      dispatch(getOwner(contract));
    }
  }, [contract]);

  return (
    <>
      <Helmet>
        <title>Betting dApp | Owner</title>
      </Helmet>
      <Owner ownerAccount={ownerAccount} userAccount={userAccount} />
    </>
  );
};

export default OwnerContainer;
