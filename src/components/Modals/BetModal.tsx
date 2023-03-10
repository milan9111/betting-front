import React from "react";
import { Modal, Image, Input, Button } from "antd";
import { ITodayMatch } from "../../types/matches";
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
  itemBetModal: ITodayMatch | null;
}

const BetModal: React.FC<BetModalProps> = ({
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
      <div className="betModal">
        <div className="betModal__container">
          <div className="betModal__logos">
            <div className="betModal__logos_home">
              <Image
                src={itemBetModal?.home_team_logo}
                style={{ maxWidth: "100px" }}
              />
              <p className="betModal__logos_home-name">
                {itemBetModal?.event_home_team}
              </p>
            </div>
            <div className="betModal__logos_info">
              <p className="betModal__logos_info-name">
                {itemBetModal?.league_name} - {itemBetModal?.league_season}
              </p>
              <p className="betModal__logos_info-round">
                {itemBetModal?.league_round}
              </p>
              <p className="betModal__logos_info-time">
                {itemBetModal?.event_time}
              </p>
            </div>
            <div className="betModal__logos_away">
              <Image
                src={itemBetModal?.away_team_logo}
                style={{ maxWidth: "100px" }}
              />
              <p className="betModal__logos_away-name">
                {itemBetModal?.event_away_team}
              </p>
            </div>
          </div>
          <div className="betModal__odds">
            <p className="betModal__odds_home">
              odds_1: {itemBetModal?.odds_1}
            </p>
            <p className="betModal__odds_x">odds_x: {itemBetModal?.odds_x}</p>
            <p className="betModal__odds_away">
              odds_2: {itemBetModal?.odds_2}
            </p>
          </div>
          <div className="betModal__bids">
            <div className="betModal__bids_home">
              <div className="betModal__bids_home-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueHomeTeam(e.target.value)}
                  value={bidValueHomeTeam}
                />
              </div>
              <div className="betModal__bids_home-button">
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
            <div className="betModal__bids_x">
              <div className="betModal__bids_x-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueDraw(e.target.value)}
                  value={bidValueDraw}
                />
              </div>
              <div className="betModal__bids_x-button">
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
                    ? "betModal__bids_error-visible"
                    : "betModal__bids_error-hidden"
                }
              >
                Bid value error!
              </p>
            </div>
            <div className="betModal__bids_away">
              <div className="betModal__bids_away-value">
                <Input
                  placeholder="ETH"
                  onChange={(e) => setBidValueAwayTeam(e.target.value)}
                  value={bidValueAwayTeam}
                />
              </div>
              <div className="betModal__bids_away-button">
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

export default BetModal;
