import React from 'react';
import styled from 'styled-components';
import GeminiAvatar from './imagens/Gemini.png';
import UserAvatar from './imagens/user.png';
import LinguAvatar from './imagens/Lingu.jpeg';

const MessageContainer = styled.div`
display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  max-width: ${({ sender }) => {
    if (sender === 'User') return '321px';
    if (sender === 'Lingu') return '405px';
    if (sender === 'Gemini') return '922px';
    return '60%';
  }};
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  background-color: ${({ sender }) => {
    if (sender === 'User') return '#dc9644';
    if (sender === 'Lingu') return '#3a8e4c';
    if (sender === 'Gemini') return '#4c89d4';
    return '#666';
  }};
  align-self: flex-start;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.5;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  margin-bottom: -16px;
  margin-left: -28px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ccc;
  background-image: ${({ sender }) => {
    if (sender === 'Gemini') return `url(${GeminiAvatar})`;
    if (sender === 'User') return `url(${UserAvatar})`;
    if (sender === 'Lingu') return `url(${LinguAvatar})`;
    return 'none';
  }};
  background-size: cover;
  background-position: center;
`;

const Message = ({ message }) => {
  const isUser = message.sender === 'User';
  return (
    <MessageContainer isUser={isUser}>
      <MessageBubble sender={message.sender}>
        {message.content}
        <Avatar sender={message.sender} />
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
