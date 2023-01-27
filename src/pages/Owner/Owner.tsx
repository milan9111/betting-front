import { Button } from "antd";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

interface OwnerProps {
  ownerAccount: string;
  userAccount: string;
  contractBalance: string;
  showBalance: () => void;
}

const Owner: React.FC<OwnerProps> = ({
  ownerAccount,
  userAccount,
  contractBalance,
  showBalance,
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
              Show contract balance
            </Button>
          </div>
          <div className="owner__balance_value">{editedBalance} ETH</div>
        </div>
        <div className="owner__putStorage">
          <div className="owner__putStorage_button">

          </div>
          <div className="owner__putStorage_input">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
