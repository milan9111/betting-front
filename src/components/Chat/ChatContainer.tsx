import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/actions";
import { IChatReducer } from "../../types/chat";
import Chat from "./Chat";

const ChatContainer = () => {
  const messages = useSelector(
    (state: IChatReducer) => state.chatReducer.messages
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return <Chat messages={messages}/>;
};

export default ChatContainer;
