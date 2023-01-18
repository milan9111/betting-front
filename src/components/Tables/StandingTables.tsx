import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { IStandings } from "../../types/matches";

interface StandingTablesProps {
  standings: IStandings[];
}

const StandingTables: React.FC<StandingTablesProps> = ({ standings }) => {
  const [standingForTables, setStandingForTables] = useState<IStandings[][]>(
    []
  );

  useEffect(() => {
    let sortGroups: IStandings[][] = [];
    let step: number = 1;
    for (let i = 0; i < standings.length; i = i + step) {
      let group: IStandings[] = standings.filter((item) =>
        item.league_round
          ? item.league_round === standings[i].league_round
          : item.stage_name === standings[i].stage_name
      );
      group = group.map((item) => {
        return { ...item, key: item.team_key };
      });
      step = group.length;
      sortGroups.push(group);
    }
    setStandingForTables(sortGroups);
  }, [standings]);

  const columns = [
    {
      title: "Place",
      dataIndex: "standing_place",
      key: "standing_place",
      align: "center" as "center",
    },
    {
      title: "Team",
      dataIndex: "standing_team",
      key: "standing_team",
      align: "center" as "center",
    },
    {
      title: "MP",
      dataIndex: "standing_P",
      key: "standing_P",
      align: "center" as "center",
    },
    {
      title: "W",
      dataIndex: "standing_W",
      key: "standing_W",
      align: "center" as "center",
    },
    {
      title: "D",
      dataIndex: "standing_D",
      key: "standing_D",
      align: "center" as "center",
    },
    {
      title: "L",
      dataIndex: "standing_L",
      key: "standing_L",
      align: "center" as "center",
    },
    {
      title: "PTS",
      dataIndex: "standing_PTS",
      key: "standing_PTS",
      align: "center" as "center",
    },
  ];

  const showTables = standingForTables.map((item, index) => {
    return (
      <div key={index}>
        <div className="openedLeague__title-group">
          {item[0].league_round ? item[0].league_round : item[0].stage_name}
        </div>
        <Table
          columns={columns}
          dataSource={item}
          pagination={false}
          scroll={{ x: 600 }}
        />
      </div>
    );
  });

  return <>{showTables}</>;
};

export default StandingTables;
