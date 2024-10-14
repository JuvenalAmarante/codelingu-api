import React, { useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import Mensagem from './imagens/send.png'

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;

const ChatContent = styled.div`
  width: 100%;
  max-width: 994px; 
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #09090A;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 8px;
  background-color: #09090A;
  border-radius: 0 0 15px 15px;
`;

const Input = styled.input`
  flex: 3;
  padding: 9px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #ddd;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 20px;
  background-color: #42a5f5;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
`;

const MessageListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #09090A;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no Chrome/Safari */
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Lingu', content: 'Parabéns! Você concluiu com sucesso o Módulo 1!',  },
    { id: 2, sender: 'User', content: 'Tenho dúvidas sobre o Módulo 1!',  },
    { id: 3, sender: 'Gemini', content: 'É normal que tenha dúvidas! Posso ajudar com mais informações sobre o módulo.',  }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'User',
          content: newMessage,
        }
      ]);
      setNewMessage('');
    }
  };

  return (
    <ChatContainer>
      <ChatContent>
        <MessageListContainer>
          <MessageList messages={messages} />
        </MessageListContainer>
        <InputContainer>
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Tire suas dúvidas aqui..."
          />
          <Button onClick={handleSendMessage}>
            <img src={Mensagem} alt='Enviar' style={{ width: '30px', height: '30px' }}/>
          </Button>
        </InputContainer>
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;
