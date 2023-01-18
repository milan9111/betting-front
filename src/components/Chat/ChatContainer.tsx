import React, { useEffect, useState } from "react";
import './chat.scss';
import { useDispatch, useSelector } from "react-redux";
import { notificationError } from "../../helpers/notificationError";
import { createMessage, getMessages } from "../../redux/actions";
import { socket } from "../../sockets";
import { IChatReducer } from "../../types/chat";
import { IEthersReducer } from "../../types/ethers";
import Chat from "./Chat";

const ChatContainer = () => {
  const messages = useSelector(
    (state: IChatReducer) => state.chatReducer.messages
  );
  const userAccount = useSelector(
    (state: IEthersReducer) => state.ethersReducer.userAccount
  );
  const dispatch = useDispatch();
  const [messageValue, setMessageValue] = useState<string>("");
  const [eventValue, setEventValue] = useState<string>("");
  const editedAccount =
    userAccount.slice(0, 4) + "...." + userAccount.slice(-4);

  useEffect(() => {
    socket.on("message", (data: string) => {
      setEventValue(data);
    });
    dispatch(getMessages());

    return () => {
      socket.off("message");
    };
  }, [eventValue]);

  const onChangeMessageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(e.target.value);
  };

  const onSendMessage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (messageValue.trim().length > 0 && editedAccount !== "....") {
      const messageInfo = {
        name: editedAccount,
        message: messageValue,
      };
      dispatch(createMessage(JSON.stringify(messageInfo)));
      setMessageValue("");
    } else {
      notificationError({
        message: "The field can't be empty or you need to login!",
      });
    }
  };

  return (
    <Chat
      messages={messages}
      onChangeMessageValue={onChangeMessageValue}
      onSendMessage={onSendMessage}
      messageValue={messageValue}
    />
  );
};

export default ChatContainer;
