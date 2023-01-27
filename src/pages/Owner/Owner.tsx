import { Button, Input } from "antd";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { getEthFromWei } from "../../helpers/weiToEth";

interface OwnerProps {
  ownerAccount: string;
  userAccount: string;
  contractBalance: string;
  showBalance: () => void;
  onSendValue: () => void;
  valueToContract: string;
  setValueToContract: (e: string) => void;
  errorInput: boolean;
  onTransferBalance: () => void;
  faildAccountAddress: string;
  setFaildAccountAddress: (e: string) => void;
  onCheckFailedAccountAddress: () => void;
  failedDebt: string | null;
}

const Owner: React.FC<OwnerProps> = ({
  ownerAccount,
  userAccount,
  contractBalance,
  showBalance,
  onSendValue,
  valueToContract,
  setValueToContract,
  errorInput,
  onTransferBalance,
  faildAccountAddress,
  setFaildAccountAddress,
  onCheckFailedAccountAddress,
  failedDebt,
}) => {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  const editedBalance = getEthFromWei(contractBalance);
  const editedDebt = failedDebt && getEthFromWei(failedDebt);

  useEffect(() => {
    if (ownerAccount && userAccount) {
      setIsOwner(ownerAccount === ethers.utils.getAddress(userAccount));
    }
  }, [ownerAccount, userAccount]);

  if (!isOwner) {
    return (
      <section className="owner">
        <div className="owner__container">
          <p className="owner__title_notOwner">
            Sorry! You dont have access to this page!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="owner">
      <div className="owner__container">
        <p className="owner__title_owner">Owner</p>
        <div className="owner__balance">
          <div className="owner__balance_button">
            <Button
              type="primary"
              className="owner__button"
              onClick={showBalance}
            >
              Show a contract balance
            </Button>
          </div>
          <div className="owner__balance_value">{editedBalance} ETH</div>
        </div>
        <div className="owner__putStorage">
          <div className="owner__putStorage_button">
            <Button
              type="primary"
              className="owner__button"
              onClick={onSendValue}
            >
              Send value to the contract
            </Button>
            <p
              className={
                errorInput ? "owner__error-visible" : "owner__error-hidden"
              }
            >
              Value error!
            </p>
          </div>
          <div className="owner__putStorage_input">
            <Input
              placeholder="ETH"
              onChange={(e) => setValueToContract(e.target.value)}
              value={valueToContract}
            />
          </div>
        </div>
        <div className="owner__transfer">
          <div className="owner__transfer_button">
            <Button
              type="primary"
              className="owner__button"
              onClick={onTransferBalance}
            >
              Transfer of the entire bank to the owner
            </Button>
          </div>
        </div>
        <div className="owner__checkFailedPrizes">
          <div className="owner__checkFailedPrizes_button">
            <Button
              type="primary"
              className="owner__button"
              onClick={onCheckFailedAccountAddress}
            >
              Check debt (failed prize)
            </Button>
          </div>
          <div className="owner__checkFailedPrizes_input">
            <Input
              placeholder="Account address"
              onChange={(e) => setFaildAccountAddress(e.target.value)}
              value={faildAccountAddress}
            />
          </div>
          <div className="owner__checkFailedPrizes_result">
            {failedDebt && `${editedDebt} ETH`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
