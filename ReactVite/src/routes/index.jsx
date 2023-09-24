import About from "../AbbreviationHello.jsx";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
