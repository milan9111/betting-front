import React from "react";
import { Table, Image } from "antd";
import { IFinishedTodayMatch } from "../../types/matches";
import { Breakpoint } from "antd/es/_util/responsiveObserve";

interface FinishedTodayMatchesProps {
  matches: IFinishedTodayMatch[];
}

const FinishedTodayMatchesTable: React.FC<FinishedTodayMatchesProps> = ({
  matches,
}) => {
  const resultForTable = matches.map((item) => {
    return { ...item, key: item.event_key };
  });

  const columns = [
    {
      title: "Team logo",
      dataIndex: "home_team_logo",
      key: "home_team_logo",
      render: (el: any, item: IFinishedTodayMatch) => (
        <Image height={30} src={item.home_team_logo} />
      ),
      align: "center" as "center",
      responsive: ["xl"] as Breakpoint[],
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
      render: (el: any, item: IFinishedTodayMatch) => (
        <Image height={30} src={item.away_team_logo} />
      ),
      align: "center" as "center",
      responsive: ["xl"] as Breakpoint[],
    },
    {
      title: "Home team",
      dataIndex: "event_away_team",
      key: "event_away_team",
      align: "center" as "center",
    },
    {
      title: "Event data",
      dataIndex: "event_date",
      key: "event_date",
      align: "center" as "center",
      responsive: ["lg"] as Breakpoint[],
    },
    {
      title: "Live",
      dataIndex: "event_status",
      key: "event_status",
      align: "center" as "center",
      render: (el: any, item: IFinishedTodayMatch) => (
        <div style={{ color: "red" }}>{item.event_status}'</div>
      ),
    },
    {
      title: "Current result",
      dataIndex: "event_final_result",
      key: "event_final_result",
      align: "center" as "center",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={resultForTable}
      pagination={{ className: "pagination" }}
      locale={{ emptyText: "There are no live matches!" }}
      scroll={{x: 600}}
    />
  );
};

export default FinishedTodayMatchesTable;
