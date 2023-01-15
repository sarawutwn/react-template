import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout";
import Loadable from "../utils/Loadable";
import NotAccessPage from "../utils/NotAcessPage";
import PermissionInit from "../utils/PermissionInit";
import ComponentInit from "../utils/ComponentInit";
import store from "../redux/store/index";
import jwt from "jwt-decode";
import { Box } from "@mui/material";

const Login = Loadable(lazy(() => import("../pages/Login")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Password = Loadable(lazy(() => import("../pages/Password")));

const Routes = () => {
  store?.dispatch({
    type: "SET_PERMISSION",
    payload: JSON.parse(localStorage.getItem("PERMISSION")),
  });
  store?.dispatch({
    type: "SET_COMPONENT",
    payload: JSON.parse(localStorage.getItem("COMPONENT")),
  });
  store?.dispatch({
    type: "SET_ROLE",
    payload: JSON.parse(localStorage.getItem("ROLE")),
  });

  let isLoggedIn = true;
  if (
    !(
      localStorage.getItem("TOKEN") &&
      localStorage.getItem("Authenticated") &&
      localStorage.getItem("PERMISSION") &&
      localStorage.getItem("ROLE")
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
