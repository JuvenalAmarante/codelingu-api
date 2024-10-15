import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import Loader from "./Loader.jsx";

const MessageListContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #09090A;
  color: #fff;
`;

const MessageList = ({ messages, loading }) => {
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
    </MessageListContainer>
  );
};

export default MessageList;
