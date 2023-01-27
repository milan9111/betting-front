import React, { useEffect, useState } from "react";
import "./owner.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  getBalance,
  getOwner,
  sendValueToContract,
  transferBalance,
} from "../../redux/actions";
import { IEthersReducer } from "../../types/ethers";
import { IOwnerReducer } from "../../types/owner";
import Owner from "./Owner";

const OwnerContainer: React.FC = () => {
  const { contract, userAccount } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );
  const { ownerAccount, contractBalance } = useSelector(
    (state: IOwnerReducer) => state.ownerReducer
  );
  const [valueToContract, setValueToContract] = useState<string>("");
  const [errorInput, setErrorInput] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (contract) {
      dispatch(getOwner(contract));
    }
  }, [contract]);

  const showBalance = () => {
    dispatch(getBalance(contract));
  };

  const onSendValue = () => {
    if (/^\s*[\d]+([,\.][\d]+)?\s*$/.test(valueToContract)) {
      dispatch(sendValueToContract(valueToContract, contract));
      setValueToContract("");
    } else {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false);
      }, 1000);
    }
  };

  const onTransferBalance = () => {
    dispatch(transferBalance(contract));
  };

  return (
    <>
      <Helmet>
        <title>Betting dApp | Owner</title>
      </Helmet>
      <Owner
        ownerAccount={ownerAccount}
        userAccount={userAccount}
        showBalance={showBalance}
        contractBalance={contractBalance}
        onSendValue={onSendValue}
        valueToContract={valueToContract}
        setValueToContract={setValueToContract}
        errorInput={errorInput}
        onTransferBalance={onTransferBalance}
      />
    </>
  );
};

export default OwnerContainer;
