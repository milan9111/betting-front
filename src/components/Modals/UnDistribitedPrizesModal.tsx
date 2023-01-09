import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { IUndistributedMatches } from "../../types/matches";
import { openedLeagueContent } from "../../content/openedLeague";
import { IEthersReducer } from "../../types/ethers";

interface UnDistributedPrizesModalProps {
  handleOk: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    _idMongo: string | undefined,
    ethIndex: number | undefined,
    oddsId: number | undefined,
    contract: ethers.Contract | null
  ) => void;
  handleCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isUnDistributedPrizesModal: boolean;
  itemUnDistributedPizesModal: IUndistributedMatches | null;
}

const UnDistributedPrizesModal: React.FC<UnDistributedPrizesModalProps> = ({
  handleOk,
  handleCancel,
  isUnDistributedPrizesModal,
  itemUnDistributedPizesModal,
}) => {
  const { contract } = useSelector(
    (state: IEthersReducer) => state.ethersReducer
  );

  return (
    <Modal
      title="Distribute prizes in the game"
      open={isUnDistributedPrizesModal}
      onOk={(e) =>
        handleOk(
          e,
          itemUnDistributedPizesModal?._id,
          itemUnDistributedPizesModal?.eth_index,
          itemUnDistributedPizesModal?.odds_id,
          contract
        )
      }
      onCancel={handleCancel}
    >
      <div className="unDistributedPrizesModal">
        <div className="UnDistributedPrizesModal__container">
          <div className="UnDistributedPrizesModal__text">
            {openedLeagueContent.textUndistributedPrizesModal}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UnDistributedPrizesModal;
