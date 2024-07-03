import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/home";
import { Layout } from "./views/layout";

export const router = createBrowserRouter([
  { element: <Layout />, children: [{ path: "/", element: <Home /> }] },
]);
