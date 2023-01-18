import React from "react";
import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { IMessage } from "../../types/chat";

interface ChatProps {
  messages: IMessage[];
  onChangeMessageValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  messageValue: string;
}

const Chat: React.FC<ChatProps> = ({
  messages,
  messageValue,
  onChangeMessageValue,
  onSendMessage,
}) => {
  const showMessages = messages.map((item) => {
    return (
      <div key={item._id} className="chat__message">
        <div className="chat__message_name">{item.name}</div>
        <div className="chat__message_text">{item.message}</div>
      </div>
    );
  });

  return (
    <div className="chat">
      <div className="chat__container">{showMessages}</div>
      <div className="chat__form">
        <div className="chat__form_input">
          <Input
            onChange={onChangeMessageValue}
            value={messageValue}
            placeholder="Your message"
          />
        </div>
        <div className="chat__form_button">
          <Button type="primary" onClick={onSendMessage}>
            <SendOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
