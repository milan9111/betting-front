import React from "react";
import { Table, Image, Button } from "antd";
import { ILeagueInFederation } from "../../types/leagues";
import uefa from "../../assets/images/uefa.png";
import { Link } from "react-router-dom";
import { Breakpoint } from "antd/es/_util/responsiveObserve";

interface LeagueProps {
  result: ILeagueInFederation[];
}

const LeagueTable: React.FC<LeagueProps> = ({ result }) => {
  const resultForTable = result.map((item) => {
    return { ...item, key: item.league_key };
  });

  const columns = [
    {
      title: "Country flag",
      dataIndex: "country_logo",
      key: "country_logo",
      render: (el: any, item: ILeagueInFederation) => (
        <Image style={{ maxWidth: "30px" }} src={item.country_logo} />
      ),
      align: "center" as "center",
      responsive: ["sm"] as Breakpoint[],
    },
    {
      title: "Country name",
      dataIndex: "country_name",
      key: "country_name",
      align: "center" as "center",
      responsive: ["sm"] as Breakpoint[],
    },
    {
      title: "Logo",
      dataIndex: "league_logo",
      key: "league_logo",
      render: (el: any, item: ILeagueInFederation) => {
        if (item.league_logo) {
          return <Image style={{ maxWidth: "70px" }} src={item.league_logo} />;
        } else {
          return <Image style={{ maxWidth: "70px" }} src={uefa} />;
        }
      },
      align: "center" as "center",
    },
    {
      title: "League",
      dataIndex: "league_name",
      key: "league_name",
      align: "center" as "center",
      ellipsis: true,
    },
    {
      title: "Open",
      dataIndex: "open",
      key: "open",
      render: (el: any, item: ILeagueInFederation) => (
        <Button type="primary" className="league__button">
          <Link to={`${item.league_key}`}>Open</Link>
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
    />
  );
};

export default LeagueTable;
