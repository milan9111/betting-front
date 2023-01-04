import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Image, Button } from "antd";
import {
  IOpenedLeagueReducer,
  ITodayMatch,
  ITodayOdds,
} from "../../types/matches";
import CreateGameModal from "../Modals/CreateGameModal";
import {
  createGame,
  getItemBetModal,
  getItemCreateGameModal,
  showBetModal,
  showCreateGameModal,
} from "../../redux/actions";
import BetModal from "../Modals/BetModal";
import { ethers } from "ethers";

interface TodayMatchesProps {
  matches: ITodayMatch[];
  odds: ITodayOdds;
}

const TodayMatchesTable: React.FC<TodayMatchesProps> = ({ matches, odds }) => {
  const { isCreateGameModal, itemCreateGameModal, isBetModal, itemBetModal } =
    useSelector((state: IOpenedLeagueReducer) => state.openedLeagueReducer);

  const dispatch = useDispatch();

  const resultForTable = matches
    .map((item) => {
      return {
        ...item,
        key: item.event_key,
        odds_1: odds[item.event_key][0].odd_1,
        odds_2: odds[item.event_key][0].odd_2,
        odds_x: odds[item.event_key][0].odd_x,
      };
    })
    .sort(
      (a, b) =>
        new Date(`${a.event_date} ${a.event_time}`).getTime() -
        new Date(`${b.event_date} ${b.event_time}`).getTime()
    );

  const openCreateGameModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: ITodayMatch
  ) => {
    dispatch(getItemCreateGameModal(item));
    dispatch(showCreateGameModal(true));
  };

  const handleCreateGameModalOk = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: ITodayMatch,
    contract: ethers.Contract
  ) => {
    dispatch(showCreateGameModal(false));
    dispatch(createGame(item, contract));
    contract.on("MatchCreated", (index) => {
      console.log(index.toString()); // dispatch with ethIndex, item, userAccount
   });
  };

  const handleCreateGameModalCancel = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(showCreateGameModal(false));
  };

  const openBetModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: ITodayMatch
  ) => {
    dispatch(getItemBetModal(item));
    dispatch(showBetModal(true));
  };

  const handleBetModalOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(showBetModal(false));
  };

  const handleBetModalCancel = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(showBetModal(false));
  };

  const columns = [
    {
      title: "Team logo",
      dataIndex: "home_team_logo",
      key: "home_team_logo",
      render: (el: any, item: ITodayMatch) => (
        <Image height={30} src={item.home_team_logo} />
      ),
      align: "center" as "center",
    },
    {
      title: "Home team",
      dataIndex: "event_home_team",
      key: "event_home_team",
      align: "center" as "center",
    },
    {
      title: "Team logo",
      dataIndex: "away_team_logo",
      key: "away_team_logo",
      render: (el: any, item: ITodayMatch) => (
        <Image height={30} src={item.away_team_logo} />
      ),
      align: "center" as "center",
    },
    {
      title: "Away team",
      dataIndex: "event_away_team",
      key: "event_away_team",
      align: "center" as "center",
    },
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
      title: "Odds_1",
      dataIndex: "odds_1",
      key: "odds_1",
      align: "center" as "center",
    },
    {
      title: "Odds_X",
      dataIndex: "odds_x",
      key: "odds_x",
      align: "center" as "center",
    },
    {
      title: "Odds_2",
      dataIndex: "odds_2",
      key: "odds_2",
      align: "center" as "center",
    },
    {
      title: "Create a game",
      dataIndex: "create_game",
      key: "create_game",
      render: (el: any, item: ITodayMatch) => (
        <Button
          type="primary"
          onClick={(e) => {
            openCreateGameModal(e, item);
          }}
          disabled={false}
        >
          Create
        </Button>
      ),
      align: "center" as "center",
    },
    {
      title: "Bet",
      dataIndex: "bet",
      key: "bet",
      render: (el: any, item: ITodayMatch) => (
        <Button
          type="primary"
          style={{ backgroundColor: "#ff4d00" }}
          onClick={(e) => {
            openBetModal(e, item);
          }}
          disabled={false}
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
        locale={{ emptyText: "No matches today!" }}
      />
      <CreateGameModal
        handleCreateGameModalOk={handleCreateGameModalOk}
        handleCreateGameModalCancel={handleCreateGameModalCancel}
        isCreateGameModal={isCreateGameModal}
        itemCreateGameModal={itemCreateGameModal}
      />
      <BetModal
        handleBetModalOk={handleBetModalOk}
        handleBetModalCancel={handleBetModalCancel}
        isBetModal={isBetModal}
        itemBetModal={itemBetModal}
      />
    </>
  );
};

export default TodayMatchesTable;
