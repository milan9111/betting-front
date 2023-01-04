import React from "react";
import { Modal } from "antd";
import { IFinishedTodayMatch } from "../../types/matches";

interface DistributePrizesModalProps {
  handleOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
 console.log(itemDistributePizesModal);
 
  return (
    <Modal
      title="Basic Modal"
      open={isDistributePrizesModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Coming soon...</p>
    </Modal>
  );
};

export default DistributePrizesModal;
