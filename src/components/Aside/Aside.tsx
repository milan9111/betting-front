import React from "react";
import { IAsideContent } from "../../types/contents";

interface asideProps {
  asideContent: IAsideContent;
}

const Aside: React.FC<asideProps> = ({ asideContent }) => {
  const temporaryAccount = "0x44a6Cb6Cb07A78fc843a5F0F8BD81F98c27A4537";
  const editedAccount =
    temporaryAccount.slice(0, 4) + "...." + temporaryAccount.slice(-4);

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
          <div className="aside__user-info_email">Email: milan9111@ukr.net</div>
          <div className="aside__user-info_account">
            Account: {editedAccount}
          </div>
          <div className="aside__user-info_balance">Balance: 1.6 GoerliETH</div>
        </div>
        <div className="aside__chat">
            <div className="aside__chat_title">
                {asideContent.chatTitle}
            </div>
            <div className="aside__chat_body">
                Coming soon...
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
