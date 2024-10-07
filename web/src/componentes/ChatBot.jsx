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
  Input,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import BotIcon from "@mui/icons-material/SmartToy";
import FloatingButton from "./Floating";
import { MessageOutlined } from "@mui/icons-material";
import Loader from "./Loader.jsx";

const ChatBot = () => {
  const messagesEnd = useRef();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    setInput("");
    
    setIsLoading(true);
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };
    
    setMessages([...messages, userMessage]);

    const newMessages = [...messages, userMessage];
    const botMessage = {
      text: await sendMessage(
        messages.map((item) => ({
          text: item.text,
        })),
        input
      ),
      sender: "bot",
    };
    
    setMessages([...newMessages, botMessage]);
    setIsLoading(false);
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

  const styles = (theme) => ({
    textField: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: "white",
    },
  });

  if (!open)
    return (
      <FloatingButton sx={{ zIndex: 9999 }} onClick={() => setOpen(true)}>
        <MessageOutlined />
      </FloatingButton>
    );

  return (
    <>
      <Container
        component={Paper}
        sx={{
          p: 2,
          mt: 2,
          width: "35%",
          height: "450px",
          backgroundColor: "#09090a",
          zIndex: 9999,
          position: "fixed",
          bottom: "0",
          right: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ display: "flex", gap: 1, heigth: "100px", width: "100%" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MessageOutlined sx={{ color: "white" }} />

            <Typography
              variant="h7"
              gutterBottom
              sx={{
                marginLeft: "15px",
                textAlign: "center",
                fontFamily: "Plus Jakarta Sans",
                color: "white",
              }}
            >
              Conversa
            </Typography>
          </Box>

          <IconButton
            aria-label="voltar"
            sx={{
              color: "white",
              width: "10%",
              justifyContent: "top",
              alignItems: "top",
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ overflowY: "scroll", mb: 6, height: "250px" }}>
          <ListItem
            key={0}
            sx={{
              textAlign: "left",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Olá, sou Lingu, a IA do CodeLingu. Estou aqui para te ajudar nos seus estudos no CodeLingu.\nTenho todas as informações que estão nas aulas.`}
              sx={{
                whiteSpace: "pre-wrap",
                bgcolor: "#121214",
                color: "white",
                borderRadius: 2,
                p: 2,
                display: "inline-block",
                maxWidth: "90%",
                ml: 0,
                mr: 2,
              }}
            />
          </ListItem>

          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                textAlign: message.sender === "user" ? "right" : "left",
                width: "100%",
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
                alignItems: "start",
              }}
            >
              {message.sender === "bot" && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <CodeIcon />
                  </Avatar>
                </ListItemAvatar>
              )}
              <ListItemText
                primary={message.text}
                sx={{
                  whiteSpace: "pre-wrap",
                  bgcolor: message.sender === "user" ? "1a1a1e" : "#121214",
                  color: "white",
                  borderRadius: 2,
                  p: 2,
                  display: "inline-block",
                  maxWidth: "90%",
                  fontSize: "10px",
                  ml: message.sender === "user" ? 2 : 0,
                  mr: message.sender === "bot" ? 2 : 0,
                }}
              />
            </ListItem>
          ))}

          {isLoading && (
            <ListItem
              key={-1}
              sx={{
                textAlign: "left",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "start",
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <CodeIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText>
                <Loader />
              </ListItemText>
            </ListItem>
          )}

          <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
        </List>

        <Box
          sx={{
            display: "flex",
            heigth: "50px",
            width: "100%",
            borderRadius: "15px",
            color: "white",
            zIndex: 999999,
          }}
        >
          {/* <Input
            fullWidth
            placeholder="Faça uma pergunta para a IA"
            value={input}
            disabled={isLoading}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            sx={{
              border: "solid 1px #121214",
              borderRadius: "15px",
              color: "white",
              backgroundColor: "#121214",
            }}
          /> */}
          <TextField
            fullWidth
            placeholder="Faça uma pergunta para a Lingu"
            value={input}
            disabled={isLoading}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            InputProps={{
              autoComplete: 'off',
              sx: {
                outline: 'none',
                border: "solid 1px #121214",
                borderRadius: "15px",
                color: "white",
                backgroundColor: "#121214",
              },
            }}
          />
          <IconButton
            onClick={handleSendMessage}
            loading={isLoading}
            sx={{ width: "6%", marginLeft:'4px', color: "#8D8D99" }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default ChatBot;
