import React from "react";
import { Button, Table } from "antd";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import {
  IOpenedLeagueReducer,
  IUndistributedMatches,
} from "../../types/matches";
import UnDistributedPrizesModal from "../Modals/UnDistribitedPrizesModal";
import {
  getItemUnDistributedPizesModal,
  showUnDistributedPrizesModal,
  unDistributedPrizes,
} from "../../redux/actions";

interface UndistributedMatchesProps {
  matches: IUndistributedMatches[];
}

const UndistributedMatchesTable: React.FC<UndistributedMatchesProps> = ({
  matches,
}) => {
  const { isUnDistributebPrizesModal, itemUnDistributedPizesModal } =
    useSelector((state: IOpenedLeagueReducer) => state.openedLeagueReducer);
  const dispatch = useDispatch();

  const resultForTable = matches.map((item) => {
    return { ...item, key: item.odds_id };
  });

  const openModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: IUndistributedMatches
  ) => {
    dispatch(getItemUnDistributedPizesModal(item));
    dispatch(showUnDistributedPrizesModal(true));
  };

  const handleOk = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    _idMongo: string | undefined,
    ethIndex: number | undefined,
    oddsId: number | undefined,
    contract: ethers.Contract | null
  ) => {
    dispatch(unDistributedPrizes(_idMongo, ethIndex, oddsId, contract));
    dispatch(showUnDistributedPrizesModal(false));
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(showUnDistributedPrizesModal(false));
  };

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
      ellipsis: true,
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
          onClick={(e) => openModal(e, item)}
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
        locale={{ emptyText: "There are no undistributed matches!" }}
        scroll={{x: 600}}
      />
      <UnDistributedPrizesModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isUnDistributedPrizesModal={isUnDistributebPrizesModal}
        itemUnDistributedPizesModal={itemUnDistributedPizesModal}
      />
    </>
  );
};

export default UndistributedMatchesTable;
