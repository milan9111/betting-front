import React from "react";
import { ethers } from "ethers";
import { IAsideContent } from "../../types/contents";
import ChatContainer from "../Chat/ChatContainer";

interface asideProps {
  asideContent: IAsideContent;
  userAccount: string;
  userBalance: string;
}

const Aside: React.FC<asideProps> = ({
  asideContent,
  userAccount,
  userBalance,
}) => {
  const editedAccount =
    userAccount.slice(0, 4) + "...." + userAccount.slice(-4);
  const editedBalance = Number(ethers.utils.formatEther(userBalance)).toFixed(
    5
  );

  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__banner">
          <div className="aside__banner_title">{asideContent.title}</div>
          <div className="aside__banner_image">
            <img src={asideContent.img} alt="banner" />
          </div>
        </div>
        <div className="aside__user-info">
          <div className="aside__user-info_title">{asideContent.userTitle}</div>
          <div className="aside__user-info_account">
            Account: {editedAccount}
          </div>
          <div className="aside__user-info_balance">
            Balance: {editedBalance} ETH
          </div>
        </div>
        <div className="aside__chat">
          <div className="aside__chat_title">{asideContent.chatTitle}</div>
          <div className="aside__chat_body">
            <ChatContainer />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
