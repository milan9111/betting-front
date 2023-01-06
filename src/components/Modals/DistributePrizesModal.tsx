import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { IFinishedTodayMatch } from "../../types/matches";
import { openedLeagueContent } from "../../content/openedLeague";
import { IEthersReducer } from "../../types/ethers";

interface DistributePrizesModalProps {
  handleOk: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    _idMongo: string | undefined,
    ethIndex: number | undefined,
    winner: string | undefined,
    contract: ethers.Contract | null
  ) => void;
  handleCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isDistributePrizesModal: boolean;
  itemDistributePizesModal: IFinishedTodayMatch | null;
}

const DistributePrizesModal: React.FC<DistributePrizesModalProps> = ({
  handleOk,
  handleCancel,
  isDistributePrizesModal,
  itemDistributePizesModal,
}) => {
  const { contract } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );

  return (
    <Modal
      title="Distribute prizes in the game"
      open={isDistributePrizesModal}
      onOk={(e) =>
        handleOk(
          e,
          itemDistributePizesModal?._idMongo,
          itemDistributePizesModal?.eth_index,
          itemDistributePizesModal?.event_final_result,
          contract
        )
      }
      onCancel={handleCancel}
    >
      <div className="distributePrizesModal">
        <div className="distributePrizesModal__container">
          <div className="distributePrizesModal__text">
            {openedLeagueContent.textDistributePrizesModal}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DistributePrizesModal;
