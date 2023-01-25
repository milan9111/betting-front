import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

interface OwnerProps {
  ownerAccount: string;
  userAccount: string;
}

const Owner: React.FC<OwnerProps> = ({ ownerAccount, userAccount }) => {
  const [isOwner, setIsOwner] = useState<boolean>(false);

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
      </div>
    </section>
  );
};

export default Owner;
