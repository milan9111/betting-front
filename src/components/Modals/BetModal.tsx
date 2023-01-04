import React from "react";
import { Modal } from "antd";
import { ITodayMatch } from "../../types/matches";
 

interface BetModalProps {
  handleBetModalOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleBetModalCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isBetModal: boolean;
  itemBetModal: ITodayMatch | null;
}

const BetModal: React.FC<BetModalProps> = ({
  handleBetModalOk,
  handleBetModalCancel,
  isBetModal,
  itemBetModal,
}) => {
 console.log(itemBetModal);
 
  return (
    <Modal
      title="Basic Modal"
      open={isBetModal}
      onOk={handleBetModalOk}
      onCancel={handleBetModalCancel}
    >
      <p>Coming soon...</p>
    </Modal>
  );
};

export default BetModal;