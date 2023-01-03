import React from "react";
import { Table, Image, Button } from "antd";
import { IFinishedTodayMatch } from "../../types/matches";

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
    },
    {
      title: "Final result",
      dataIndex: "event_final_result",
      key: "event_final_result",
      align: "center" as "center",
    },
    {
      title: "Distribute prizes",
      dataIndex: "distribute",
      key: "distribute",
      render: (el: any, item: IFinishedTodayMatch) => (
        <Button
          type="primary"
          style={{ backgroundColor: "#ff4d00" }}
          disabled={false}
        >
          Distribute
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
      locale={{ emptyText: "Today's matches are not over yet!" }}
    />
  );
};

export default FinishedTodayMatchesTable;
