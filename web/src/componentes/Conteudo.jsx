import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Container,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Navbar from "./Navbar.jsx";
import ChatBot from "./ChatBot";

const conteudo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      
      <ChatBot />

      <Box
        sx={{
          flex: "1 1 auto",
          padding: 5,
          paddingX: "15%",
          backgroundColor: "black",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton
          aria-label="voltar"
          sx={{
            color: "#C4C4CC",
            width: "10%",
            justifyContent: "top",
            alignItems: "top",
            marginTop: "1%",
          }}
          onClick={() => handleBack()}
        >
          <ArrowBackIcon />
          <Typography color="#C4C4CC">VOLTAR</Typography>
        </IconButton>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "white",
            fontSize: "1.8rem",
            marginTop: "3%",
          }}
        >
          O que é um Computador?
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#C4C4CC", marginBottom: "5%" }}
        >
          Bem-vindo ao primeiro módulo da trilha de Introdução à Tecnologia!
          Vamos começar pelo básico: o que é um computador? Mesmo que você use
          computadores todos os dias, pode ser surpreendente descobrir como eles
          realmente funcionam e do que são feitos.
        </Typography>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          padding: "20px",
          color: "#a0a0a0",
          width: "40%",
          height: "100%",
          paddingX: "15%",
          marginTop: "5%",
          fontFamily: "Inter",
          justifyContent: "center",
          marginBottom: "3%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "1%" }}
        >
          Introdução
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "2.0rem", marginTop: "5%" }}
        >
          Uma introdução sobre computadores
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "5%" }}
        >
          Um computador é uma máquina que realiza cálculos e processa
          informações para realizar diversas tarefas. Ele pode ser um
          dispositivo grande, como um desktop que fica em cima de uma mesa, ou
          pequeno, como um smartphone que cabe no seu bolso. Os computadores são
          usados para uma ampla variedade de tarefas, incluindo navegar na
          internet, escrever documentos, jogar jogos, assistir a vídeos, e muito
          mais. A versatilidade dos computadores vem do fato de que eles podem
          ser programados para realizar praticamente qualquer tarefa que envolva
          processamento de informações.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "2.0rem", marginTop: "5%" }}
        >
          História dos computadores
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "5%" }}
        >
          Os primeiros computadores, construídos na década de 1940, eram enormes
          máquinas que ocupavam salas inteiras e eram usadas principalmente por
          cientistas e engenheiros para realizar cálculos complexos. Esses
          computadores utilizavam válvulas eletrônicas e eram muito lentos e
          pouco eficientes comparados aos padrões atuais. Com o passar do tempo,
          os computadores foram ficando menores, mais rápidos e mais acessíveis.
          Hoje, temos computadores pessoais (PCs) que podem ser usados em casa
          ou no trabalho, e dispositivos móveis, como smartphones e tablets, que
          são ainda mais compactos e portáteis.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "2.0rem", marginTop: "5%" }}
        >
          Os Componentes Básicos de um Computador
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          Vamos agora entender os componentes básicos que compõem um computador.
          Pense no computador como um quebra-cabeça, onde cada peça tem uma
          função específica:
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "1.4rem", marginTop: "5%" }}
        >
          1. Unidade Central de Processamento (CPU):
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          - A CPU é conhecida como o "cérebro" do computador. Ela executa
          instruções e processa dados. Tudo o que o computador faz, desde abrir
          um aplicativo até rodar um vídeo, passa pela CPU. Dentro da CPU, há
          unidades menores, como a Unidade de Controle (que dirige todas as
          operações do computador) e a Unidade de Lógica e Aritmética (ALU, que
          realiza operações matemáticas e lógicas).
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "1.4rem", marginTop: "5%" }}
        >
          2. RAM (Memória de Acesso Aleatório):
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          - A RAM é a memória volátil usada pelo CPU para armazenar dados
          temporários e instruções de programas que estão sendo executados
          atualmente. Quanto mais RAM, mais dados podem ser acessados
          rapidamente.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "1.4rem", marginTop: "5%" }}
        >
          3. Placa-mãe (Motherboard):
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          - A placa-mãe é a principal placa de circuito impresso (PCI) de um
          computador. Ela conecta e permite a comunicação entre todos os outros
          componentes e periféricos.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "1.4rem", marginTop: "5%" }}
        >
          4. Unidade de Armazenamento(hdd/ssd):
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          - Discos rígidos (HDD) e unidades de estado sólido (SSD) são
          dispositivos de armazenamento onde o sistema operacional, aplicativos
          e dados são armazenados de forma permanente. SSDs são mais rápidos e
          confiáveis que HDDs.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", fontSize: "1.4rem", marginTop: "5%" }}
        >
          5. Fonte de Alimentação (PSU)
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#C4C4CC", fontSize: "1.2rem", marginTop: "2%" }}
        >
          - A fonte de alimentação converte a corrente alternada (AC) da rede
          elétrica em corrente contínua (DC) usada pelos componentes do
          computador. Ela também regula a tensão para garantir a operação
          segura.
        </Typography>
      </Box>
    </>
  );
};

export default conteudo;
