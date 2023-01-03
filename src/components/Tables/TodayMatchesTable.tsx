import React from "react";
import { Table, Image, Button } from "antd";
import { ITodayMatch, ITodayOdds } from "../../types/matches";

interface TodayMatchesProps {
  matches: ITodayMatch[];
  odds: ITodayOdds;
}

const TodayMatchesTable: React.FC<TodayMatchesProps> = ({ matches, odds }) => {
  const resultForTable = matches.map((item) => {
    return {
      ...item,
      key: item.event_key,
      odds_1: odds[item.event_key][0].odd_1,
      odds_2: odds[item.event_key][0].odd_2,
      odds_x: odds[item.event_key][0].odd_x,
    };
  });

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
        <Button type="primary" disabled={false}>
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
          disabled={false}
        >
          Bet
        </Button>
      ),
      align: "center" as "center",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={resultForTable}
      pagination={{ className: "pagination" }}
      locale={{ emptyText: "No matches today!" }}
    />
  );
};

export default TodayMatchesTable;
