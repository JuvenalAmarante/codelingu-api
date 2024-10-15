
import React from "react";
import "./App.css";
import LoginPage from "./componentes/Login";
import HomePage from "./componentes/homePage";
import ChatBot from "./componentes/ChatBot";
import Trilha from "./componentes/Trilha";
import Conteudo from "./componentes/Conteudo";
import Chat from './componentes/Chat';
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
    path: "conversa",
    element: <Chat />,
  },
  {
    path: "trilha",
    element: <Trilha />,
  }
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  //   <div>
  //   <Chat />
  //  </div>
  );
}

export default App;
