import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MessageListContainer = styled.div`
  flex: 4;
  padding: 10px;
  overflow-y: auto;
  background-color: #09090A;
  color: #fff;
`;

const MessageList = ({ messages }) => {
  return (
    <MessageListContainer>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </MessageListContainer>
  );
};

export default MessageList;
