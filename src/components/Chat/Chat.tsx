import { Button, Input } from "antd";
import React from "react";
import { IMessage } from "../../types/chat";

interface ChatProps {
  messages: IMessage[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
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
        <div>
            <Input />
        </div>
        <div>
            <Button type="primary">Send</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Chat;
