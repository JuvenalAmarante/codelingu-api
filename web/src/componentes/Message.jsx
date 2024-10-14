import React from 'react';
import styled from 'styled-components';
import GeminiAvatar from './imagens/Gemini.png'; 
import UserAvatar from './imagens/user.png'; 
import LinguAvatar from './imagens/Lingu.jpeg'; 

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  width: 100%; 
`;

const MessageBubble = styled.div`
  max-width: ${({ sender }) => {
    if (sender === 'User') return '321px';
    if (sender === 'Lingu') return '405px';
    if (sender === 'Gemini') return '922px';
  }};
  height: 50%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ sender }) => {
    if (sender === 'User') return '#dc9644';
    if (sender === 'Lingu') return '#3a8e4c';
    if (sender === 'Gemini') return '#4c89d4';
  }};
  align-self: ${({ sender }) => (sender === 'User' ? 'flex-start' : 'flex-end')};
  text-align: ${({ sender }) => (sender === 'User' ? 'left' : 'right')};
  display: flex;
  flex-direction: column; 
  white-space: normal; 
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  height: auto; 
  line-height: 1.5;
`;


const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ isUser }) => (isUser ? '0 0 0 10px' : '0 10px 0 0')};
  background-image: ${({ sender }) => {
    if (sender === 'Gemini') return `url(${GeminiAvatar})`;
    if (sender === 'User') return `url(${UserAvatar})`;
    if (sender === 'Lingu') return `url(${LinguAvatar})`;
    return `url(${DefaultAvatar})`;
  }};
  background-size: cover;
  background-position: center;
`;

const Message = ({ message }) => {
  const isUser = message.sender === 'User';
  return (
    <MessageContainer isUser={isUser}>
      {!isUser && <Avatar sender={message.sender} />}
      <MessageBubble sender={message.sender}>
        <p style={{ margin: 0 }}>{message.content}</p>  
      </MessageBubble>
      {isUser && <Avatar sender={message.sender} />}
    </MessageContainer>
  );
};

export default Message;
