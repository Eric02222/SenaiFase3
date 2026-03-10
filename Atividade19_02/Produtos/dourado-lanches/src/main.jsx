import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderLayout from "./layout/HeaderLayout";
import { AuthProvider } from "./context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Produto from './components/Produto/Produto';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "produtos", element: <Produto /> },
      { path: "esquciSenha", element: <RecuperarSenha /> },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
