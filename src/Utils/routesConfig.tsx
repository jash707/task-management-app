import Dashboard from "../components/Dashboard";
import { lazy } from "react";
// import { default as DonotRenderWhenLoggedIn } from "./Auth/DonotRenderWhenLoggedIn";

const SignIn = lazy(() => import("../components/Auth"));

// const ProtectedSignIn = DonotRenderWhenLoggedIn(SignIn);

const routesConfig = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  { path: "/", element: <Dashboard /> },
];

export default routesConfig;
