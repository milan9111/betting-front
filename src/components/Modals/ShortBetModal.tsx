import React from "react";
import { Modal, Input, Button } from "antd";
import { ICreatedGames } from "../../types/matches";
import { useSelector } from "react-redux";
import { IEthersReducer } from "../../types/ethers";
import { ethers } from "ethers";

interface BetModalProps {
  handleBetModalOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleBetModalCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onBidValue: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    ethIndex: number | undefined,
    teamSelected: number,
    bidValue: string,
    contract: ethers.Contract | null
  ) => void;
  bidValueHomeTeam: string;
  bidValueAwayTeam: string;
  bidValueDraw: string;
  errorInput: boolean;
  setBidValueHomeTeam: (e: string) => void;
  setBidValueAwayTeam: (e: string) => void;
  setBidValueDraw: (e: string) => void;
  isBetModal: boolean;
  itemBetModal: ICreatedGames | null;
}

const ShortBetModal: React.FC<BetModalProps> = ({
  handleBetModalOk,
  handleBetModalCancel,
  isBetModal,
  itemBetModal,
  onBidValue,
  bidValueHomeTeam,
  bidValueAwayTeam,
  bidValueDraw,
  errorInput,
  setBidValueHomeTeam,
  setBidValueAwayTeam,
  setBidValueDraw,
}) => {
  const { contract } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );

  return (
    <Modal
      title="Bet"
      open={isBetModal}
      onOk={handleBetModalOk}
      onCancel={handleBetModalCancel}
    >
      <div className="shortBetModal">
        <div className="shortBetModal__container">
          <div className="shortBetModal__logos">
            <div className="shortBetModal__logos_home">
              <p className="shortBetModal__logos_home-name">
                {itemBetModal?.home_team}
              </p>
            </div>
            <div className="shortBetModal__logos_info">
              <p className="shortBetModal__logos_info-time">
                {itemBetModal?.event_time}
              </p>
            </div>
            <div className="shortBetModal__logos_away">
              <p className="shortBetModal__logos_away-name">
                {itemBetModal?.away_team}
              </p>
            </div>
          </div>
          <div className="shortBetModal__odds">
            <p className="shortBetModal__odds_home">
              odds_1: {itemBetModal?.odd_1}
            </p>
            <p className="shortBetModal__odds_x">
              odds_x: {itemBetModal?.odd_x}
            </p>
            <p className="shortBetModal__odds_away">
              odds_2: {itemBetModal?.odd_2}
            </p>
          </div>
          <div className="shortBetModal__bids">
            <div className="shortBetModal__bids_home">
              <div className="shortBetModal__bids_home-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueHomeTeam(e.target.value)}
                  value={bidValueHomeTeam}
                />
              </div>
              <div className="shortBetModal__bids_home-button">
                <Button
                  type="primary"
                  onClick={(e) => {
                    onBidValue(
                      e,
                      itemBetModal?.eth_index,
                      1,
                      bidValueHomeTeam,
                      contract
                    );
                  }}
                >
                  Bid
                </Button>
              </div>
            </div>
            <div className="shortBetModal__bids_x">
              <div className="shortBetModal__bids_x-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueDraw(e.target.value)}
                  value={bidValueDraw}
                />
              </div>
              <div className="shortBetModal__bids_x-button">
                <Button
                  type="primary"
                  onClick={(e) => {
                    onBidValue(
                      e,
                      itemBetModal?.eth_index,
                      3,
                      bidValueDraw,
                      contract
                    );
                  }}
                >
                  Bid
                </Button>
              </div>
              <p
                className={
                  errorInput
                    ? "shortBetModal__bids_error-visible"
                    : "shortBetModal__bids_error-hidden"
                }
              >
                Bid value error!
              </p>
            </div>
            <div className="shortBetModal__bids_away">
              <div className="shortBetModal__bids_away-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueAwayTeam(e.target.value)}
                  value={bidValueAwayTeam}
                />
              </div>
              <div className="shortBetModal__bids_away-button">
                <Button
                  type="primary"
                  onClick={(e) => {
                    onBidValue(
                      e,
                      itemBetModal?.eth_index,
                      2,
                      bidValueAwayTeam,
                      contract
                    );
                  }}
                >
                  Bid
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShortBetModal;
