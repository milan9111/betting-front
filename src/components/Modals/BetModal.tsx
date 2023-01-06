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
          <div className="betModal__home">
            <Image
              src={itemBetModal?.home_team_logo}
              style={{ maxWidth: "100px" }}
            />
            <div className="betModal__home_name">
              {itemBetModal?.event_home_team}
            </div>
            <div className="betModal__home_odds">
              odds_1: {itemBetModal?.odds_1}
            </div>
            <div className="betModal__home_value">
              <Input
                placeholder="ETH"
                onChange={(e) => setBidValueHomeTeam(e.target.value)}
                value={bidValueHomeTeam}
              />
            </div>
            <div className="betModal__home_button">
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
          <div className="betModal__info">
            <div className="betModal__info_name">
              {itemBetModal?.league_name} - {itemBetModal?.league_season}
            </div>
            <div className="betModal__info_round">
              {itemBetModal?.league_round}
            </div>
            <div className="betModal__info_time">
              {itemBetModal?.event_time}
            </div>
            <div className="betModal__info_odds">
              odds_x: {itemBetModal?.odds_x}
            </div>
            <div className="betModal__info_value">
              <Input
                placeholder="ETH"
                onChange={(e) => setBidValueDraw(e.target.value)}
                value={bidValueDraw}
              />
            </div>
            <div className="betModal__info_button">
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
            <div
              className={
                errorInput
                  ? "betModal__info_error-visible"
                  : "betModal__info_error-hidden"
              }
            >
              Bid value error!
            </div>
          </div>
          <div className="betModal__away">
            <Image
              src={itemBetModal?.away_team_logo}
              style={{ maxWidth: "100px" }}
            />
            <div className="betModal__away_name">
              {itemBetModal?.event_away_team}
            </div>
            <div className="betModal__away_odds">
              odds_2: {itemBetModal?.odds_2}
            </div>
            <div className="betModal__away_value">
              <Input
                placeholder="ETH"
                onChange={(e) => setBidValueAwayTeam(e.target.value)}
                value={bidValueAwayTeam}
              />
            </div>
            <div className="betModal__away_button">
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
    </Modal>
  );
};

export default BetModal;
