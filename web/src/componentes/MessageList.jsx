import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Message from "./Message";
import Loader from "./Loader.jsx";

const MessageListContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #09090a;
  color: #fff;
`;

const MessageList = ({ messages, loading }) => {
  let messagesEnd = useRef();

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <MessageListContainer>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      <div
        style={{ float: "left", clear: "both" }}
        ref={(el) => {
          messagesEnd = el;
        }}
      ></div>
    </MessageListContainer>
  );
};

export default MessageList;
