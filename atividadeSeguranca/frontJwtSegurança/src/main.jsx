import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { AuthProvider } from "./context/Context";
import HeaderLayout from "./layout/HeaderLayout";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },,
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
