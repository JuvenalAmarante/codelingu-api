import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import { sendMessage } from "../services/gemini.js";
import {
  Container,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Loader from "./Loader.jsx";
import FloatingButton from "./Floating";
import { MessageOutlined } from "@mui/icons-material";

const ChatBot = () => {
  const messagesEnd = useRef();
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá, sou Lingu, a IA do CodeLingu. Escolha uma opção:", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionClick = async (optionText) => {
    const newMessage = { id: messages.length + 1, text: `Você selecionou: ${optionText}`, sender: "user" };
    
    setIsLoading(true);

    setMessages([...messages, newMessage]);

    const newMessages = [...messages, newMessage];
    const botReply = {
      id: messages.length + 2,
      text: await sendMessage(newMessages.map((msg) => ({ text: msg.text })), optionText),
      sender: "bot"
    };

    setMessages([...newMessages, botReply]);
    setIsLoading(false);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { id: messages.length + 1, text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setIsLoading(true);

    const botReply = {
      id: messages.length + 2,
      text: await sendMessage([...messages, userMessage].map((msg) => ({ text: msg.text })), input),
      sender: "bot",
    };

    setMessages([...messages, userMessage, botReply]);
    setIsLoading(false);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!open)
    return (
      <FloatingButton onClick={() => setOpen(true)}>
        <MessageOutlined />
      </FloatingButton>
    );

  return (
    <Container component={Paper} sx={{ p: 2, mt: 2, width: "35%", height: "450px", backgroundColor: "#09090a", position: "fixed", bottom: "0", right: "12px", overflow: "hidden" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h7" sx={{ color: "white" }}>Conversa</Typography>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      <List sx={{ overflowY: "scroll", mb: 6, height: "250px" }}>
        {messages.map((message, index) => (
          <ListItem key={index} sx={{ textAlign: message.sender === "user" ? "right" : "left", justifyContent: message.sender === "user" ? "flex-end" : "flex-start" }}>
            {message.sender === "bot" && (
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <CodeIcon />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={message.text} sx={{ color: "white", bgcolor: message.sender === "user" ? "#1a1a1e" : "#121214", borderRadius: 2, p: 2, maxWidth: "90%" }} />
          </ListItem>
        ))}
        {isLoading && (
          <ListItem>
            <Loader />
          </ListItem>
        )}
        <div ref={messagesEnd}></div>
      </List>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          fullWidth
          placeholder="Digite sua mensagem"
          value={input}
          disabled={isLoading}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyPress}
          InputProps={{
            sx: { color: "white", backgroundColor: "#121214", borderRadius: "15px" }
          }}
        />
        <IconButton onClick={handleSendMessage} disabled={isLoading} sx={{ marginLeft: 1 }}>
          <SendIcon sx={{ color: "#8D8D99" }} />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <button onClick={() => handleOptionClick('Opção 1')}>Opção 1</button>
        <button onClick={() => handleOptionClick('Opção 2')}>Opção 2</button>
        <button onClick={() => handleOptionClick('Opção 3')}>Opção 3</button>
      </Box>
    </Container>
  );
};

export default ChatBot;
