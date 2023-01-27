import { Button, Input } from "antd";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

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
}) => {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const editedBalance = Number(
    ethers.utils.formatEther(contractBalance)
  ).toFixed(5);

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
            <Button type="primary" onClick={showBalance}>
              Show a contract balance
            </Button>
          </div>
          <div className="owner__balance_value">{editedBalance} ETH</div>
        </div>
        <div className="owner__putStorage">
          <div className="owner__putStorage_button">
            <Button type="primary" onClick={onSendValue}>
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
                <Button type="primary" onClick={onTransferBalance}>
                  Transfer of the entire bank to the owner
                </Button>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
