import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Container,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate, Link } from 'react-router-dom';
import FloatingButton from './Floating';
import { MessageOutlined } from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HttpsIcon from '@mui/icons-material/Https';
import Navbar from './Navbar';
import ChatBot from './ChatBot';

const Trilha = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />

      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Parte superior */}
        <Box
          sx={{
            flex: '1 1 auto',
            padding: 5,
            paddingX: '15%',
            backgroundColor: 'black',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            color: '#09090A',
          }}
        >
          <IconButton
            aria-label='voltar'
            sx={{
              color: '#C4C4CC',
              width: '10%',
              justifyContent: 'top',
              alignItems: 'top',
            }}
            onClick={() => handleBack()}
          >
            <ArrowBackIcon />
            <Typography color='#C4C4CC' sx={{ fontSize: '0.9rem' }}>
              VOLTAR
            </Typography>
          </IconButton>
          <Typography
            variant='h4'
            gutterBottom
            sx={{ color: 'white', marginLeft: '15%' }}
          >
            Introdução a Tecnologia
          </Typography>
          <Typography
            variant='body1'
            sx={{
              width: '80%',
              color: '#C4C4CC',
              marginLeft: '15%',
              height: '100px',
            }}
          >
            Nesta trilha, você explorará os conceitos fundamentais da tecnologia, desde a diferença entre hardware e software até o funcionamento dos sistemas operacionais e a importância da Internet.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              marginTop: '64px',
              gap: 1,
              justifyContent: 'left',
              marginLeft: '15%',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
              <Chip
                label='Computadores'
                sx={{ backgroundColor: '#1e1e1e', color: 'white' }}
              />
              <Chip
                label='Hardware'
                sx={{ backgroundColor: '#1e1e1e', color: 'white' }}
              />
              <Chip
                label='Software'
                sx={{ backgroundColor: '#1e1e1e', color: 'white' }}
              />
              <Chip
                label='Tecnologia Basica'
                sx={{ backgroundColor: '#1e1e1e  ', color: 'white  ' }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            gap: 1,
            paddingX: '15%',
          }}
        >
          {/* Parte inferior */}
          <Typography
            variant='body1'
            sx={{
              color: '#C4C4CC',
              fontSize: '0.8rem',
              marginTop: 4,
              marginLeft: '10%',
            }}
          >
            Nivel 01
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: 'White',
              fontSize: '2.0rem',
              marginTop: 3,
              marginLeft: '10%',
              fontFamily: 'Plus Jakarta Sans',
            }}
          >
            Fundamentos
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '80%',
                position: 'center',
                zIndex: 2,
                padding: 2,
                color: '#fff',
                marginTop: 3,
              }}
            >
              <Link
                to='/conversa'
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 2,
                    padding: 1,
                    paddingX: '16px',
                    borderRadius: 3,
                    border: 'solid 1px #29292e',
                    backgroundColor: '#1a1a1e',
                    width: '100%',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#1e1e23',
                    },
                  }}
                >
                  <PlayCircleFilledWhiteIcon
                    sx={{
                      marginRight: 2,
                      color: '#00A4E3',
                      alignItems: 'Top',
                      marginBottom: 3,
                    }}
                  />
                  <Box>
                    <Typography variant='h6'>A história dos computadores</Typography>
                    <Box>
                      <Chip
                        label='Módulo de Conteúdo'
                        sx={{ backgroundColor: '#323238', fontSize: '12px', color: 'white' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 2,
                  padding: 1,
                  paddingX: '16px',
                  borderRadius: 3,
                  border: 'solid 1px #5c5c61', // Borda mais clara para parecer desabilitado
                  backgroundColor: '#2a2a2e', // Fundo mais claro para o estado desabilitado
                  width: '100%',
                  cursor: 'not-allowed',
                  opacity: 0.5, // Tornar o card parcialmente transparente
                }}
              >
                <SchoolIcon
                  sx={{
                    marginRight: 2,
                    color: '#5c5c61', // Cor desbotada para indicar desabilitado
                    alignItems: 'Top',
                    marginBottom: 3,
                  }}
                />
                <Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6' sx={{ color: '#8c8c8f' }}>
                      {' '}
                      {/* Texto desbotado */}
                      Componentes básicos de um computador
                    </Typography>
                    <Box sx={{ color: '#5c5c61', marginLeft: 1 }}>
                      <HttpsIcon />
                    </Box>
                  </Box>
                  <Box>
                    <Chip
                      label='Desafio prático'
                      sx={{ backgroundColor: '#5c5c61', fontSize: '12px', color: '#8c8c8f' }}
                    />
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
