import React from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useNavigate, Link } from "react-router-dom";
import FloatingButton from "./Floating";
import { MessageOutlined } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HttpsIcon from "@mui/icons-material/Https";
import Navbar from "./Navbar";
import ChatBot from "./ChatBot";

const Trilha = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />

      <ChatBot />

      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Parte superior */}
        <Box
          sx={{
            flex: "1 1 auto",
            padding: 5,
            paddingX: "15%",
            backgroundColor: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            color: "#09090A",
          }}
        >
          <IconButton
            aria-label="voltar"
            sx={{
              color: "#C4C4CC",
              width: "10%",
              justifyContent: "top",
              alignItems: "top",
            }}
            onClick={() => handleBack()}
          >
            <ArrowBackIcon />
            <Typography color="#C4C4CC" sx={{ fontSize: "0.9rem" }}>
              VOLTAR
            </Typography>
          </IconButton>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "white", marginLeft: "15%" }}
          >
            Introdução a Tecnologia
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "30%",
              color: "#C4C4CC",
              marginLeft: "15%",
              height: "100px",
            }}
          >
            Nesta trilha, você explorará os conceitos fundamentais da
            tecnologia, desde a diferença entre hardware e software até o
            funcionamento dos sistemas operacionais e a importância da Internet.
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "64px",
              gap: 1,
              justifyContent: "left",
              marginLeft: "15%",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
              <Chip
                label="Computadores"
                sx={{ backgroundColor: "#1e1e1e", color: "white" }}
              />
              <Chip
                label="Hardware"
                sx={{ backgroundColor: "#1e1e1e", color: "white" }}
              />
              <Chip
                label="Software"
                sx={{ backgroundColor: "#1e1e1e", color: "white" }}
              />
              <Chip
                label="Tecnologia Basica"
                sx={{ backgroundColor: "#1e1e1e  ", color: "white  " }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            gap: 1,
            paddingX: "15%",
          }}
        >
          {/* Parte inferior */}
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "#121214",
              padding: "20px",
              border: "solid 1px #29292e",
              borderRadius: "10px",
              color: "#C4C4CC",
              width: "80%",
              height: "100%",
              marginTop: "5%",
              marginLeft: "9%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#C4C4CC",
                fontWeight: "100",
              }}
              gutterBottom
            >
              Progresso detalhado
            </Typography>

            <Box mb={1} mt={2}>
              <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <MenuBookIcon style={{ color: "#00A4E3" }} />
                  <Typography
                    variant="body1"
                    ml={1}
                    width="150px"
                    color="#C4C4CC"
                  >
                    Módulos: 23/242
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    width: "100%",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={20.5}
                    sx={{
                      backgroundColor: "#333",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "limegreen",
                      },
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box mb={1}>
              <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <DescriptionIcon style={{ color: "#00A4E3" }} />
                  <Typography
                    variant="body1"
                    ml={1}
                    width="150px"
                    color="#C4C4CC"
                  >
                    Testes: 2/41
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    width: "100%",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={4.88}
                    sx={{
                      backgroundColor: "#333",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "limegreen",
                      },
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box mb={1}>
              <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <CodeIcon style={{ color: "#00A4E3" }} />
                  <Typography
                    variant="body1"
                    ml={1}
                    width="150px"
                    color="#C4C4CC"
                  >
                    Desafios: 1/7
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    width: "100%",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={14.29}
                    sx={{
                      backgroundColor: "#333",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "limegreen",
                      },
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* sx={{color:"#00A4E3"}} */}

          <Typography
            variant="body1"
            sx={{
              color: "#C4C4CC",
              fontSize: "0.8rem",
              marginTop: 4,
              marginLeft: "10%",
            }}
          >
            Nivel 01
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "White",
              fontSize: "2.0rem",
              marginTop: 3,
              marginLeft: "10%",
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Fundamentos
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                position: "center",
                zIndex: 2,
                padding: 2,
                color: "#fff",
                marginTop: 3,
              }}
            >
              <Link
                to="/Conteudo"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    padding: 1,
                    paddingX: "16px",
                    borderRadius: 3,
                    border: "solid 1px #29292e",
                    backgroundColor: "#1a1a1e",
                    width: "100%",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#1e1e23",
                    },
                  }}
                >
                  <PlayCircleFilledWhiteIcon
                    sx={{
                      marginRight: 2,
                      color: "#00A4E3",
                      alignItems: "Top",
                      marginBottom: 3,
                    }}
                  />
                  <Box>
                    <Typography variant="h6">O que é um computador?</Typography>
                    <Box>
                      <Chip
                        label="Módulo de Conteúdo"
                        sx={{ backgroundColor: "#323238", color: "white" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                  padding: 1,
                  paddingX: "16px",
                  borderRadius: 3,
                  border: "solid 1px #29292e",
                  backgroundColor: "#1a1a1e",
                  width: "100%",
                  cursor: "not-allowed",
                }}
              >
                <SchoolIcon
                  sx={{
                    marginRight: 2,
                    color: "#00A4E3",
                    alignItems: "Top",
                    marginBottom: 3,
                  }}
                />
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h6">
                      Componentes básicos de um computador
                    </Typography>
                    <Box sx={{ color: "#00A4E3", marginLeft: 1 }}>
                      <HttpsIcon />
                    </Box>
                  </Box>
                  <Box>
                    <Chip
                      label="Desafio prático"
                      sx={{ backgroundColor: "#323238", color: "white" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                  padding: 1,
                  paddingX: "16px",
                  borderRadius: 3,
                  border: 'solid 1px #24242e',
                  backgroundColor: "#1a1a1e",
                  width: "100%",
                  cursor: "no-drop",
                }}
              >
                <AssignmentIcon
                  sx={{
                    marginRight: 2,
                    color: "#00A4E3",
                    alignItems: "Top",
                    marginBottom: 3,
                  }}
                />
                <Box>
                  <Box>
                    <Box sx={{ display: "flex", color: "" }}>
                      <Typography variant="h6">
                        Revisão de conhecimentos
                      </Typography>
                      <Box
                        sx={{ color: "#00A4E3", marginLeft: 1, float: "right" }}
                      >
                        <HttpsIcon />
                      </Box>
                    </Box>

                    <Box>
                      <Chip
                        label="Teste Teórico"
                        sx={{ backgroundColor: "#323238", color: "white", padding: 0 }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Trilha;
