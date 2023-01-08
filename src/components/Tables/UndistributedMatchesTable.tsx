import React from "react";
import { Button, Table } from "antd";
import { IUndistributedMatches } from "../../types/matches";

interface UndistributedMatchesProps {
  matches: IUndistributedMatches[];
}

const UndistributedMatchesTable: React.FC<UndistributedMatchesProps> = ({
  matches,
}) => {
  const resultForTable = matches.map((item) => {
    return { ...item, key: item.odds_id };
  });

  console.log(resultForTable);
  
  const columns = [
    {
        title: "Event data",
        dataIndex: "event_date",
        key: "event_date",
        align: "center" as "center",
    },
    {
        title: "Creator",
        dataIndex: "creator",
        key: "creator",
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
        title: "Distribute prizes",
        dataIndex: "distribute_prizes",
        key: "distribute_prizes",
        render: (el: any, item: IUndistributedMatches) => (
          <Button
            type="primary"
            style={{ backgroundColor: "#ff4d00" }}
            onClick={(e) => {
            //   openBetModal(e, item);
            }}
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
      locale={{ emptyText: "There are no live matches!" }}
    />
  );
};

export default UndistributedMatchesTable;
