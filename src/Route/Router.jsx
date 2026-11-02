import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Result from "../pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "post/:id",
        element: <Details />,
      },
      { path: "result/", element: <Result /> },
    ],
  },
]);
export default router;
