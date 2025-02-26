import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { lazy } from "react";
// import { default as DonotRenderWhenLoggedIn } from "./Auth/DonotRenderWhenLoggedIn";

const SignIn = lazy(() => import("../components/Auth"));

// const ProtectedSignIn = DonotRenderWhenLoggedIn(SignIn);

const routesConfig = [
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  { path: "/dashboard", element: <Dashboard /> },
];

export default routesConfig;
