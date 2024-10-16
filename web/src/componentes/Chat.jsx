import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import Mensagem from './imagens/send.png';
import Navbar from './Navbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChatContainer = styled.div`
  margin-top: 64px;
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;

const ChatContent = styled.div`
  width: 994px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #09090a;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #09090a;
  border-radius: 0 0 15px 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 1px 8px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 14px;
  background-color: #42a5f5;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const MessageListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #09090a;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no Chrome/Safari */
  }
`;

const MessageHeader = styled.div`
  width: 100%;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sendMessageEnable, setSendMessageEnable] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((messages) => [
        ...messages,
        {
          id: idMessage,
          sender: 'User',
          content: newMessage,
        },
      ]);
      idMessage++;
      setSendMessageEnable(false);
      setNewMessage('');
      handleFlowChat(5);
    }
  };

  let idMessage = 1;
  let response = { 1: null, 2: null, 3: null };
  let correctResponse = { 1: 'b', 2: 'c', 3: 'b' };
  const handleFlowChat = (control = 1) => {
    setLoading(true);

    const delay = 3000;
    switch (control) {
      case 1:
        setMessages([
          {
            id: idMessage,
            sender: 'Lingu',
            content: `Olá! Sou o Lingu, seu guia e intermediador nesta jornada de aprendizado.\n\nEstou aqui para facilitar a conversa entre você, o aluno, e uma inteligência artificial especializada, que vai te ajudar a entender o conteúdo que você precisa aprender.\n\nSeja qual for o tema, eu ajudo a organizar a interação, garantir que suas dúvidas sejam respondidas e que você aproveite ao máximo esse aprendizado.`,
          },
        ]);
        idMessage++;
        setSendMessageEnable(false);

        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Nessa caminhada, contaremos com o apoio do nosso BOT com Inteligência Atificial para apresentar o conteúdo.\n\nVamos lá BOT, se apresente`,
            },
          ]);
          idMessage++;

          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Gemini',
                content: `Olá, sou o BOT. A inteligência artificial que vai te ajudar no apredizado do nosso conteúdo.\n\nSou muito inteligente e capaz de responder suas perguntas, explicar conceitos complexos e até mesmo aplicar exercicios.`,
              },
            ]);
            idMessage++;

            setTimeout(function () {
              setMessages((messagesList) => [
                ...messagesList,
                {
                  id: idMessage,
                  sender: 'Lingu',
                  content: `É isso aí BOT.\n\nAgora deixando a nossa apresentação de lado, vamos começar a falar um pouco sobre o nosso primeiro conteúdo: A história dos computadores.\n\nPodemos começar?`,
                  options: [
                    {
                      text: 'Sim',
                      func: () => {
                        setMessages((messagesList) => [
                          ...messagesList,
                          {
                            id: idMessage,
                            sender: 'User',
                            content: `Sim`,
                          },
                        ]);
                        idMessage++;
                        handleFlowChat(2)
                      }
                    }
                  ]
                },
              ]);
              idMessage++;

              setLoading(false)
            }, delay);
          }, delay);
        }, delay);

        break;
      case 2:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Ótimo!\n\nEi BOT, que tal começar a apresentar sobre o conteúdo?`,
            },
          ]);
          idMessage++;  

      setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Gemini',
              content: `Agora mesmo Lingu.\n\nA história dos computadores é fascinante e passa por várias etapas de inovação. Tudo começou com dispositivos simples de cálculo e processamento de informações, evoluindo ao longo dos séculos até chegar nas máquinas avançadas que usamos hoje.\n\n1º Primeiros Dispositivos de Cálculo (Antes de 1800): Muito antes dos computadores eletrônicos, já existiam dispositivos mecânicos para ajudar com cálculos. Um exemplo famoso é o Ábaco, usado há milhares de anos em civilizações como a Mesopotâmia e a China.\n\n2º Máquina de Diferenciais (Século XIX): No início do século XIX, o matemático britânico Charles Babbage projetou a Máquina de Diferenciais, considerada o primeiro conceito de um computador mecânico. Ele também idealizou a Máquina Analítica, um dispositivo capaz de realizar operações programadas. Ada Lovelace, muitas vezes considerada a primeira programadora, escreveu um algoritmo para essa máquina.\n\n3º Primeiros Computadores Eletrônicos (Década de 1940): Durante a Segunda Guerra Mundial, começaram a surgir os primeiros computadores eletrônicos. Um exemplo marcante é o ENIAC (Electronic Numerical Integrator and Computer), desenvolvido em 1945 nos Estados Unidos. Ele era gigantesco, ocupando uma sala inteira, mas foi um dos primeiros computadores eletrônicos de uso geral.\n\n4º Transistores e Circuitos Integrados (Década de 1950-1960): Na década de 1950, o advento dos transistores substituiu as válvulas, permitindo computadores menores e mais eficientes. Mais tarde, nos anos 1960, os circuitos integrados (microchips) tornaram possível a criação de computadores ainda menores e mais rápidos.\n\n5º Computadores Pessoais (Década de 1970-1980): Nos anos 1970 e 1980, houve um grande avanço com o surgimento dos computadores pessoais (PCs). Empresas como a Apple e a IBM introduziram computadores acessíveis ao público em geral, mudando completamente o uso doméstico e empresarial da tecnologia.\n\n6º Era da Internet (Anos 1990-2000): Com o avanço da tecnologia da rede, os computadores se tornaram conectados globalmente através da internet. Isso permitiu a comunicação instantânea, acesso a informações e desenvolvimento de novas plataformas digitais que revolucionaram a vida cotidiana.\n\n7º Computadores Modernos e IA (Presente): Hoje, os computadores são extremamente poderosos e compactos, com smartphones tendo mais capacidade de processamento do que os primeiros computadores. Tecnologias como a inteligência artificial e a computação em nuvem estão moldando o futuro, tornando os computadores mais inteligentes e onipresentes.`,
            },
          ]);
          idMessage++;

          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Lingu',
                content: `Que interessante BOT, a história dos computadores é realmente fascinante.\n\nE você Robério, está conseguindo entender?`,
                options: [
                  {
                    text: 'Sim, pode continuar',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Sim, pode continuar`,
                        },
                      ]);
                      idMessage++;
                      handleFlowChat(6);
                    },
                  },
                  {
                    text: 'Pode explicar novamente?',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Pode explicar novamente?`,
                        },
                      ]);
                      idMessage++;
                      handleFlowChat(3);
                    },
                  },
                  {
                    text: 'Tenho uma dúvida...',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Tenho uma dúvida...`,
                        },
                      ]);
                      idMessage++;
                      handleFlowChat(4);
                    },
                  },
                ],
              },
            ]);

            idMessage++;

            setLoading(false);
          }, delay);
          }, delay);
        }, delay);
        break;
      case 3:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Claro, vamos revisar de uma maneira mais simples então.`,
            },
          ]);
          idMessage++;
          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Lingu',
                content: `Ei BOT, pode explicar novamente o que você falou pra gente?`,
              },
            ]);
            idMessage++;
            setTimeout(function () {
              setMessages((messagesList) => [
                ...messagesList,
                {
                  id: idMessage,
                  sender: 'Gemini',
                  content: `Com certeza Lingu, vamos lá.\n\nA história dos computadores pode ser dividida em várias etapas, cada uma marcada por avanços importantes:\n\n1º Primeiros Dispositivos de Cálculo: Antes dos computadores eletrônicos, as pessoas usavam ferramentas como o ábaco (um dispositivo simples para contar) e, mais tarde, máquinas mecânicas para ajudar com cálculos.\n\n2º Máquinas de Cálculo Mecânicas: No século XIX, o cientista Charles Babbage inventou a Máquina Analítica, que foi o primeiro conceito de um computador. Ele queria criar uma máquina capaz de realizar cálculos complexos automaticamente, mas ela nunca foi totalmente construída na época.\n\n3º Primeiros Computadores Eletrônicos: Durante a Segunda Guerra Mundial (década de 1940), surgiram os primeiros computadores eletrônicos de verdade, como o ENIAC. Essas máquinas eram enormes, ocupavam salas inteiras e usavam válvulas eletrônicas para processar informações.\n\n4º Transistores e Microchips: Na década de 1950, os transistores substituíram as válvulas, tornando os computadores menores e mais rápidos. E, nos anos 1960, os microchips (circuitos integrados) permitiram que os computadores ficassem ainda mais compactos e acessíveis.\n\n5º Computadores Pessoais (PCs): Nos anos 1970 e 1980, os computadores pessoais começaram a ser vendidos para o público em geral. As empresas Apple e IBM foram pioneiras nesse mercado, trazendo os computadores para dentro das casas e escritórios.\n\n6º Era da Internet: Nos anos 1990, os computadores passaram a se conectar entre si pela internet, revolucionando a comunicação e o acesso à informação.\n\n7º Computadores Modernos: Hoje, os computadores são extremamente rápidos e pequenos, e muitos cabem no seu bolso, como os smartphones. Além disso, com tecnologias como a inteligência artificial, os computadores estão se tornando cada vez mais inteligentes e capazes de realizar tarefas complexas.`,
                },
              ]);
              idMessage++;
              setTimeout(function () {
                setMessages((messagesList) => [
                  ...messagesList,
                  {
                    id: idMessage,
                    sender: 'Lingu',
                    content: `Que interessante BOT, a história dos computadores é realmente fascinante.\n\nE você Robério, está conseguindo entender?`,
                    options: [
                      {
                        text: 'Sim, pode continuar',
                        func: () => {
                          handleFlowChat(2);
                        },
                      },
                      {
                        text: 'Pode explicar novamente?',
                        func: () => {
                          handleFlowChat(3);
                        },
                      },
                      {
                        text: 'Tenho uma dúvida...',
                        func: () => {
                          handleFlowChat(4);
                        },
                      },
                    ],
                  },
                ]);

                idMessage++;

                setLoading(false);
              }, delay);
            }, delay);
          }, delay);
        }, delay);
        break;
      case 4:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Sem problemas, pode perguntar ao BOT sua dúvida, que ele vai poder te responder`,
            },
          ]);

          idMessage++;

          setLoading(false);
          setSendMessageEnable(true);
        }, delay);
        break;
      case 5:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Gemini',
              content: `Os transistores são pequenos dispositivos eletrônicos usados para amplificar ou controlar a corrente elétrica. Eles foram uma das maiores inovações da eletrônica e revolucionaram os computadores.\n\nAntes dos transistores, os computadores usavam válvulas eletrônicas (ou válvulas a vácuo), que realizavam funções semelhantes, mas eram muito grandes, esquentavam bastante e consumiam muita energia. Isso tornava os primeiros computadores enormes e ineficientes.\n\nAqui está o que você precisa saber sobre os transistores:\n\n- Como funcionam: Um transistor tem três partes principais e pode funcionar como um "interruptor" ou um "amplificador" de corrente. Em termos simples, ele pode ligar e desligar sinais elétricos de forma muito rápida, o que é essencial para processar dados em um computador.\n\n- Impacto nos computadores: Quando os transistores foram inventados na década de 1950, eles permitiram que os computadores ficassem muito menores, mais rápidos e mais confiáveis. Isso aconteceu porque os transistores ocupam muito menos espaço e são mais eficientes que as válvulas.\n\n- O começo da miniaturização: Graças aos transistores, os engenheiros puderam colocar muitos mais deles em um espaço pequeno, o que abriu caminho para os circuitos integrados (microchips), usados em computadores modernos. Esses chips podem conter bilhões de transistores em uma peça minúscula de silício.\n\n- Resumindo, os transistores são como pequenos interruptores que controlam o fluxo de eletricidade em um circuito. Sem eles, os computadores nunca teriam ficado tão rápidos e compactos como são hoje. Eles são considerados uma das bases da era digital.`,
            },
          ]);

          idMessage++;

          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Lingu',
                content: `Que legal BOT, não sabia disso.\n\nE você Robério? Conseguiu tirar a sua dúvida?`,
                options: [
                  {
                    text: 'Consegui sim, obrigado',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Consegui sim, obrigado`,
                        },
                      ]);

                      idMessage++;
                      handleFlowChat(6);
                    },
                  },
                  {
                    text: 'Ainda não...',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Ainda não...`,
                        },
                      ]);

                      idMessage++;
                      handleFlowChat(4);
                    },
                  },
                ],
              },
            ]);

            idMessage++;

            setLoading(false);
          }, delay);
        }, delay);
        break;
      case 6:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Show!\n\nAcredito que agora, você está pronto para uma pequena avaliação. Vamos começar?`,
              options: [
                {
                  text: 'Vamos!',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Vamos!`,
                      },
                    ]);

                    idMessage++;
                    handleFlowChat(7);
                  },
                },
                {
                  text: 'Ainda não me sinto pronto, podemos revisar o conteúdo?',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Ainda não me sinto pronto, podemos revisar o conteúdo?`,
                      },
                    ]);

                    idMessage++;
                    handleFlowChat(3);
                  },
                },
              ],
            },
          ]);

          idMessage++;
          setLoading(false);
        }, delay);
        break;
      case 7:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Perfeito!\n\nVou deixar o BOT aplicar a avaliação.\n\nBom desempenho!`,
            },
          ]);

          idMessage++;
          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Gemini',
                content: `1. Qual foi o impacto dos transistores no desenvolvimento dos computadores?`,
                options: [
                  {
                    text: 'a) Aumentaram o tamanho dos computadores.',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Item a)`,
                        },
                      ]);

                      idMessage++;
                      response['1'] = 'a';
                      handleFlowChat(8);
                    },
                  },
                  {
                    text: 'b) Tornaram os computadores mais rápidos e menores.',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Item b)`,
                        },
                      ]);

                      idMessage++;
                      response['1'] = 'b';
                      handleFlowChat(8);
                    },
                  },
                  {
                    text: 'c) Substituíram o uso da internet.',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Item c)`,
                        },
                      ]);

                      idMessage++;
                      response['1'] = 'c';
                      handleFlowChat(8);
                    },
                  },
                  {
                    text: 'd) Foram usados apenas em smartphones.',
                    func: () => {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'User',
                          content: `Item d)`,
                        },
                      ]);

                      idMessage++;
                      response['1'] = 'd';
                      handleFlowChat(8);
                    },
                  },
                ],
              },
            ]);

            idMessage++;

            setLoading(false);
          }, delay);
        }, delay);
        break;
      case 8:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Gemini',
              content: `2. Qual era o principal dispositivo usado para processar dados nos primeiros computadores eletrônicos antes dos transistores?`,
              options: [
                {
                  text: 'a) Circuitos integrados.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item a)`,
                      },
                    ]);

                    idMessage++;
                    response['2'] = 'a';
                    handleFlowChat(9);
                  },
                },
                {
                  text: 'b) Chips de silício.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item b)`,
                      },
                    ]);

                    idMessage++;
                    response['2'] = 'b';
                    handleFlowChat(9);
                  },
                },
                {
                  text: 'c) Válvulas eletrônicas (válvulas a vácuo).',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item c)`,
                      },
                    ]);

                    idMessage++;
                    response['2'] = 'c';
                    handleFlowChat(9);
                  },
                },
                {
                  text: 'd) Smartphones.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item d)`,
                      },
                    ]);

                    idMessage++;
                    response['2'] = 'd';
                    handleFlowChat(9);
                  },
                },
              ],
            },
          ]);

          idMessage++;
          setLoading(false);
        }, delay);
        break;
      case 9:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Gemini',
              content: `3. Quem foi Charles Babbage e qual foi sua contribuição para a história dos computadores?`,
              options: [
                {
                  text: 'a) Inventou o transistor.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item a)`,
                      },
                    ]);

                    idMessage++;
                    response['3'] = 'a';
                    handleFlowChat(10);
                  },
                },
                {
                  text: 'b) Projetou a Máquina Analítica, considerada um precursor dos computadores.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item b)`,
                      },
                    ]);

                    idMessage++;
                    response['3'] = 'b';
                    handleFlowChat(10);
                  },
                },
                {
                  text: 'c) Criou a internet.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item c)`,
                      },
                    ]);

                    idMessage++;
                    response['3'] = 'c';
                    handleFlowChat(10);
                  },
                },
                {
                  text: 'd) Foi o fundador da IBM.',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Item d)`,
                      },
                    ]);

                    idMessage++;
                    response['3'] = 'd';
                    handleFlowChat(10);
                  },
                },
              ],
            },
          ]);

          idMessage++;
          setLoading(false);
        }, delay);
        break;
      case 10:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Ok Robério, você deseja confirmar suas respostas das questões:\n\n${Object.keys(
                response
              )
                .map((key) => `Questão ${key}: Item ${response[key]}`)
                .join('\n')}`,
              options: [
                {
                  text: 'Confirmar',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Confirmar`,
                      },
                    ]);

                    idMessage++;
                    handleFlowChat(11);
                  },
                },
                {
                  text: 'Não, quero responder novamente',
                  func: () => {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'User',
                        content: `Não, quero responder novamente`,
                      },
                    ]);

                    idMessage++;
                    handleFlowChat(7);
                  },
                },
              ],
            },
          ]);

          idMessage++;
          setLoading(false);
        }, delay);
        break;
      case 11:
        setTimeout(function () {
          setMessages((messagesList) => [
            ...messagesList,
            {
              id: idMessage,
              sender: 'Lingu',
              content: `Agora vamos corrigir as respostas...`,
            },
          ]);

          idMessage++;
          setTimeout(function () {
            setMessages((messagesList) => [
              ...messagesList,
              {
                id: idMessage,
                sender: 'Lingu',
                content: `1º Questão\n${
                  response['1'] == correctResponse['1']
                    ? `Você acertou, o item correto é o item ${response['1']}`
                    : `Resposta incorreta. Você selecionou o item ${response['1']}, mas o correto é o item ${correctResponse['1']}`
                }`,
              },
            ]);

            idMessage++;
            setTimeout(function () {
              setMessages((messagesList) => [
                ...messagesList,
                {
                  id: idMessage,
                  sender: 'Gemini',
                  content: `Antes dos transistores, os computadores utilizavam válvulas eletrônicas, que eram grandes, consumiam muita energia e esquentavam bastante. Com a invenção dos transistores na década de 1950, os computadores ficaram menores, mais rápidos e mais eficientes. Isso marcou o início da miniaturização da eletrônica e abriu caminho para os circuitos integrados (chips), que hoje permitem a fabricação de dispositivos extremamente compactos e potentes.`,
                },
              ]);

              idMessage++;
              setTimeout(function () {
                setMessages((messagesList) => [
                  ...messagesList,
                  {
                    id: idMessage,
                    sender: 'Lingu',
                    content: `2º Questão\n${
                      response['2'] == correctResponse['2']
                        ? `Você acertou, o item correto é o item ${response['2']}`
                        : `Resposta incorreta. Você selecionou o item ${response['2']}, mas o correto é o item ${correctResponse['2']}`
                    }`,
                  },
                ]);

                idMessage++;
                setTimeout(function () {
                  setMessages((messagesList) => [
                    ...messagesList,
                    {
                      id: idMessage,
                      sender: 'Gemini',
                      content: `Antes da invenção dos transistores, os primeiros computadores, como o ENIAC, usavam válvulas eletrônicas (ou válvulas a vácuo) para controlar o fluxo de eletricidade e realizar operações lógicas. Embora funcionassem, as válvulas eram grandes, frágeis, consumiam muita energia e esquentavam bastante, o que tornava os computadores enormes e difíceis de operar. A substituição pelas válvulas pelos transistores foi uma das maiores revoluções na eletrônica e na computação.`,
                    },
                  ]);
    
                  idMessage++;
                  setTimeout(function () {
                    setMessages((messagesList) => [
                      ...messagesList,
                      {
                        id: idMessage,
                        sender: 'Lingu',
                        content: `3º Questão\n${
                          response['3'] == correctResponse['3']
                            ? `Você acertou, o item correto é o item ${response['3']}`
                            : `Resposta incorreta. Você selecionou o item ${response['3']}, mas o correto é o item ${correctResponse['3']}`
                        }`,
                      },
                    ]);
    
                    idMessage++;
                    setTimeout(function () {
                      setMessages((messagesList) => [
                        ...messagesList,
                        {
                          id: idMessage,
                          sender: 'Gemini',
                          content: `Charles Babbage, um matemático britânico do século XIX, é conhecido por projetar a Máquina Analítica, que é considerada o primeiro conceito de um computador mecânico. Embora a máquina nunca tenha sido construída em sua totalidade durante sua vida, os princípios dela (como a ideia de usar cartões perfurados e de realizar operações programadas) influenciaram diretamente o desenvolvimento dos computadores modernos. Ada Lovelace, sua colaboradora, escreveu um algoritmo para essa máquina, sendo considerada a primeira programadora da história.`,
                        },
                      ]);
      
                      idMessage++;
                      setLoading(false);
                    }, delay);
                  }, delay);
                }, delay);
              }, delay);
            }, delay);
          }, delay);
        }, delay);
        break;
      default:
        break;
    }
  };

  let control = true;
  useEffect(() => {
    if (control) {
      handleFlowChat(1);
      control = false;
    }

    return () => {
      if (messages.length) setMessages([]);
    };
  }, []);

  return (
    <>
      <Navbar />

      <ChatContainer>
        <ChatContent>
          <MessageHeader>
            {' '}
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
          </MessageHeader>
          <MessageListContainer>
            <MessageList messages={messages} loading={loading} />
          </MessageListContainer>

          {sendMessageEnable && (
            <InputContainer>
              <Input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder='Tire suas dúvidas aqui...'
              />

              <Button onClick={handleSendMessage}>
                <ButtonIcon src={Mensagem} alt='Enviar' />
              </Button>
            </InputContainer>
          )}
        </ChatContent>
      </ChatContainer>
    </>
  );
};

export default Chat;
