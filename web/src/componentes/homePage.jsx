import React from "react";
import "./homePage.css";
import Navbar from "./Navbar.jsx";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  Typography,
  Badge,
  Chip,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="app">
        <header className="header">
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Plus Jakarta Sans",
              color: "white",
            }}
          >
            Olá, Robério
          </Typography>
        </header>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: "100",
            color: "white",
            marginTop: "60px",
            marginBottom: "16px"
          }}
        >
          Suas Trilhas
        </Typography>

        <Link to="/trilha" style={{ textDecoration: "none", width: "100%" }}>
          <Card
            sx={{
              display: "flex",
              backgroundColor: "#1a1a1e",
              border: "solid 1px #29292e",
              color: "white",
              padding: "16px",
              borderRadius: "10px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1e1e23",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <MenuBookIcon
                    sx={{
                      height: 35,
                      width: 35,
                      color: "#00A4E3",
                      marginRight: "8px",
                    }}
                  />
                  <Typography component="div" variant="h5">
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ margin: "right", color: "#aaa" }}
                    >
                      Trilha
                    </Typography>
                    Introdução a Tecnologia
                  </Typography>
                </Box>
              </CardContent>

              <Box sx={{ display: "flex", gap: 1, marginTop: 3 }}>
                <Chip
                  icon={
                    <MenuBookIcon
                      color="#00A4E3"
                      sx={{ color: "#00A4E3", height: "20px" }}
                    />
                  }
                  label="Computadores"
                  color="primary"
                  sx={{
                    backgroundColor: "#1a1a1e",
                    border: "solid 1px #29292e",
                    color: "white",
                  }}
                />
                <Chip
                  icon={
                    <MenuBookIcon
                      color="#00A4E3"
                      sx={{ color: "#00A4E3", height: "20px" }}
                    />
                  }
                  label="Hardware"
                  color="primary"
                  sx={{
                    backgroundColor: "#1a1a1e",
                    border: "solid 1px #29292e",
                    color: "white",
                  }}
                />
                <Chip
                  icon={
                    <MenuBookIcon
                      color="#00A4E3"
                      sx={{ color: "#00A4E3", height: "20px" }}
                    />
                  }
                  label="Software"
                  color="primary"
                  sx={{
                    backgroundColor: "#1a1a1e",
                    border: "solid 1px #29292e",
                    color: "white",
                  }}
                />
                <Chip
                  icon={
                    <MenuBookIcon
                      color="#00A4E3"
                      sx={{ color: "#00A4E3", height: "20px" }}
                    />
                  }
                  label="Tecnologia Basica"
                  color="primary"
                  sx={{
                    backgroundColor: "#1a1a1e",
                    border: "solid 1px #29292e",
                    color: "white",
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Link>
      
      </div>
    </>
  );
};

export default HomePage;
