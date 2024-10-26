
import "./App.css";
import LoginPage from "./componentes/Login";
import HomePage from "./componentes/homePage";
import Trilha from "./componentes/Trilha";
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
  );
}

export default App;
