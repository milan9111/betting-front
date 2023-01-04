import React from "react";
import { Modal } from "antd";
import { ITodayMatch } from "../../types/matches";
 

interface CreateGameModalProps {
  handleCreateGameModalOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleCreateGameModalCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isCreateGameModal: boolean;
  itemCreateGameModal: ITodayMatch | null;
}

const CreateGameModal: React.FC<CreateGameModalProps> = ({
  handleCreateGameModalOk,
  handleCreateGameModalCancel,
  isCreateGameModal,
  itemCreateGameModal,
}) => {
 console.log(itemCreateGameModal);
 
  return (
    <Modal
      title="Basic Modal"
      open={isCreateGameModal}
      onOk={handleCreateGameModalOk}
      onCancel={handleCreateGameModalCancel}
    >
      <p>Coming soon...</p>
    </Modal>
  );
};

export default CreateGameModal;