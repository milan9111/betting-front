import React from "react";
import { Table, Image, Button } from "antd";
import {
  IFinishedTodayMatch,
  IOpenedLeagueReducer,
  ITodayCreatedMatches,
} from "../../types/matches";
import DistributePrizesModal from "../Modals/DistributePrizesModal";
import { useDispatch, useSelector } from "react-redux";
import {
  distributePrizes,
  getItemDistributePizesModal,
  showDistributePrizesModal,
} from "../../redux/actions";
import { ethers } from "ethers";
import { Breakpoint } from "antd/es/_util/responsiveObserve";

interface FinishedTodayMatchesProps {
  matches: IFinishedTodayMatch[];
  createdMatches: ITodayCreatedMatches[];
}

const FinishedTodayMatchesTable: React.FC<FinishedTodayMatchesProps> = ({
  matches,
  createdMatches,
}) => {
  const { isDistributePrizesModal, itemDistributePizesModal } = useSelector(
    (state: IOpenedLeagueReducer) => state.openedLeagueReducer
  );

  const dispatch = useDispatch();

  const resultForTable = matches.map((item) => {
    createdMatches.forEach((el) => {
      if (item.event_key === el.odds_id) {
        item.eth_index = el.eth_index;
        item._idMongo = el._id;
        item.created_in_contract = true;
        item.finished = el.finished ? true : false;
      }
    });
    return { ...item, key: item.event_key };
  });

  const openModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: IFinishedTodayMatch
  ) => {
    dispatch(getItemDistributePizesModal(item));
    dispatch(showDistributePrizesModal(true));
  };

  const handleOk = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    _idMongo: string | undefined,
    ethIndex: number | undefined,
    winner: string | undefined,
    contract: ethers.Contract | null
  ) => {
    dispatch(distributePrizes(_idMongo, ethIndex, winner, contract));
    dispatch(showDistributePrizesModal(false));
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(showDistributePrizesModal(false));
  };

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
      title: "Final result",
      dataIndex: "event_final_result",
      key: "event_final_result",
      align: "center" as "center",
      render: (el: any, item: IFinishedTodayMatch) => {
        if (!item.event_penalty_result) {
          return <div>{item.event_final_result}</div>;
        } else {
          return (
            <div>
              {item.event_final_result} ({item.event_penalty_result})
            </div>
          );
        }
      },
    },
    {
      title: "Distribute prizes",
      dataIndex: "distribute",
      key: "distribute",
      render: (el: any, item: IFinishedTodayMatch) => (
        <Button
          type="primary"
          style={{ backgroundColor: "#ff4d00" }}
          onClick={(e) => openModal(e, item)}
          disabled={!item.created_in_contract || item.finished}
        >
          Distribute
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
        locale={{ emptyText: "Today's matches are not over yet!" }}
        scroll={{x: 600}}
      />
      <DistributePrizesModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isDistributePrizesModal={isDistributePrizesModal}
        itemDistributePizesModal={itemDistributePizesModal}
      />
    </>
  );
};

export default FinishedTodayMatchesTable;
