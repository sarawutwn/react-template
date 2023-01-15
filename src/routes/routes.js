import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout";
import Loadable from "../utils/Loadable";
import NotAccessPage from "../utils/NotAcessPage";
import jwt from "jwt-decode";
import { Box } from "@mui/material";

const Login = Loadable(lazy(() => import("../pages/Login")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Password = Loadable(lazy(() => import("../pages/Password")));

const Routes = () => {
  let isLoggedIn = true;
  if (
    !(
      localStorage.getItem("TOKEN") &&
      localStorage.getItem("Authenticated")
    ) || Date.now() >= jwt(localStorage.getItem("REFRESH"))?.exp * 1000
      ? true
      : false
  ) {
    isLoggedIn = false;
  }

  return [
    {
      path: "/",
      element: isLoggedIn ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Box display="flex" justifyContent="center"><Home /></Box>,
        },
        {
          path: "/password",
          element: <Password />,
        },
        {
          path: "*",
          element: <NotAccessPage msg="ไม่พบหน้าที่คุณค้นหา" />,
        },
      ],
    },
    {
      path: "/",
      element: !isLoggedIn ? <Outlet /> : <Navigate to="/" />,
      children: [
        { path: "login", element: <Login /> },
        { path: "/", element: <Navigate to="/login" /> },
      ],
    },
  ];
};

export default Routes;
