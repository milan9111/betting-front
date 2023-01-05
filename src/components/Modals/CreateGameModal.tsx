import React from "react";
import { Modal, Image } from "antd";
import "./modals.scss";
import { ITodayMatch } from "../../types/matches";
import { useSelector } from "react-redux";
import { IEthersReducer } from "../../types/ethers";
import { ethers } from "ethers";

interface CreateGameModalProps {
  handleCreateGameModalOk: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: ITodayMatch,
    contract: ethers.Contract,
    userAccount: string
  ) => void;
  handleCreateGameModalCancel: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  isCreateGameModal: boolean;
  itemCreateGameModal: ITodayMatch | null;
}

const CreateGameModal: React.FC<CreateGameModalProps> = ({
  handleCreateGameModalOk,
  handleCreateGameModalCancel,
  isCreateGameModal,
  itemCreateGameModal,
}) => {
  const { contract, userAccount } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );

  return (
    <Modal
      title="Create a game"
      open={isCreateGameModal}
      onOk={(e) => {
        handleCreateGameModalOk(
          e,
          itemCreateGameModal as ITodayMatch,
          contract as ethers.Contract,
          userAccount
        );
      }}
      onCancel={handleCreateGameModalCancel}
    >
      <div className="createGameModal">
        <div className="createGameModal__container">
          <div className="createGameModal__home">
            <Image
              src={itemCreateGameModal?.home_team_logo}
              style={{ maxWidth: "100px" }}
            />
            <div className="createGameModal__home_name">
              {itemCreateGameModal?.event_home_team}
            </div>
          </div>
          <div className="createGameModal__info">
            <div className="createGameModal__info_name">
              {itemCreateGameModal?.league_name} -{" "}
              {itemCreateGameModal?.league_season}
            </div>
            <div className="createGameModal__info_round">
              {itemCreateGameModal?.league_round}
            </div>
            <div className="createGameModal__info_time">
              {itemCreateGameModal?.event_time}
            </div>
          </div>
          <div className="createGameModal__away">
            <Image
              src={itemCreateGameModal?.away_team_logo}
              style={{ maxWidth: "100px" }}
            />
            <div className="createGameModal__away_name">
              {itemCreateGameModal?.event_away_team}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGameModal;
