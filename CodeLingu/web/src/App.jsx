/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import LoginPage from "./componentes/Login";
import HomePage from "./componentes/homePage";
import ChatBot from "./componentes/ChatBot";
import Trilha from "./componentes/Trilha";
import Conteudo from "./componentes/Conteudo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "chatbot",
    element: <ChatBot />,
  },
  {
    path: "/trilha",
    element: <Trilha />,
  },
  {
    path: "/Conteudo",
    element: <Conteudo/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
