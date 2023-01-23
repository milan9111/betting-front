import React, { useState } from "react";
import { Button, Table } from "antd";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { ICreatedGames, IMatchesReducer } from "../../types/matches";
import {
  bidMatch,
  getItemShortBetModal,
  showShortBetModal,
} from "../../redux/actions";
import ShortBetModal from "../Modals/ShortBetModal";

interface CreatedGamesProps {
  createdGames: ICreatedGames[];
}

const CreatedGamesTable: React.FC<CreatedGamesProps> = ({ createdGames }) => {
  const { isShortBetModal, itemShortBetModal } = useSelector(
    (state: IMatchesReducer) => state.matchesReducer
  );

  const [bidValueHomeTeam, setBidValueHomeTeam] = useState<string>("");
  const [bidValueAwayTeam, setBidValueAwayTeam] = useState<string>("");
  const [bidValueDraw, setBidValueDraw] = useState<string>("");
  const [errorInput, setErrorInput] = useState<boolean>(false);

  const dispatch = useDispatch();

  const resultForTable = createdGames.map((item) => {
    return { ...item, key: item.odds_id };
  });

  const openBetModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: ICreatedGames
  ) => {
    dispatch(getItemShortBetModal(item));
    dispatch(showShortBetModal(true));
  };

  const handleBetModalOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(showShortBetModal(false));
    setBidValueHomeTeam("");
    setBidValueAwayTeam("");
    setBidValueDraw("");
  };

  const handleBetModalCancel = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(showShortBetModal(false));
    setBidValueHomeTeam("");
    setBidValueAwayTeam("");
    setBidValueDraw("");
  };

  const onBidValue = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    ethIndex: number | undefined,
    teamSelected: number,
    bidValue: string,
    contract: ethers.Contract | null
  ) => {
    if (/^\s*[\d]+([,\.][\d]+)?\s*$/.test(bidValue)) {
      dispatch(showShortBetModal(false));
      dispatch(bidMatch(ethIndex, teamSelected, bidValue, contract));
      setBidValueHomeTeam("");
      setBidValueAwayTeam("");
      setBidValueDraw("");
    } else {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false);
      }, 1000);
    }
  };

  const columns = [
    {
      title: "Event data",
      dataIndex: "event_date",
      key: "event_date",
      align: "center" as "center",
    },
    {
      title: "Event time",
      dataIndex: "event_time",
      key: "event_time",
      align: "center" as "center",
    },
    {
      title: "Home team",
      dataIndex: "home_team",
      key: "home_team",
      align: "center" as "center",
    },
    {
      title: "Away team",
      dataIndex: "away_team",
      key: "event_team",
      align: "center" as "center",
    },
    {
      title: "Odds_1",
      dataIndex: "odd_1",
      key: "odd_1",
      align: "center" as "center",
    },
    {
      title: "Odds_X",
      dataIndex: "odd_x",
      key: "odd_x",
      align: "center" as "center",
    },
    {
      title: "Odds_2",
      dataIndex: "odd_2",
      key: "odd_2",
      align: "center" as "center",
    },
    {
      title: "Bet",
      dataIndex: "bet",
      key: "bet",
      render: (el: any, item: ICreatedGames) => (
        <Button
          type="primary"
          style={{ backgroundColor: "#ff4d00" }}
          onClick={(e) => {
            openBetModal(e, item);
          }}
        >
          Bet
        </Button>
      ),
      align: "center" as "center",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={resultForTable}
        pagination={{ className: "pagination" }}
        locale={{ emptyText: "There are no created games!" }}
        scroll={{ x: 600 }}
      />
      <ShortBetModal
        handleBetModalOk={handleBetModalOk}
        handleBetModalCancel={handleBetModalCancel}
        isBetModal={isShortBetModal}
        itemBetModal={itemShortBetModal}
        onBidValue={onBidValue}
        bidValueHomeTeam={bidValueHomeTeam}
        bidValueAwayTeam={bidValueAwayTeam}
        bidValueDraw={bidValueDraw}
        errorInput={errorInput}
        setBidValueHomeTeam={setBidValueHomeTeam}
        setBidValueAwayTeam={setBidValueAwayTeam}
        setBidValueDraw={setBidValueDraw}
      />
    </>
  );
};

export default CreatedGamesTable;
