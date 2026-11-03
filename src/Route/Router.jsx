import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Result from "../pages/Result";
import Shows from "../NavComp/Shows";
import Watch from "../NavComp/Watch";
import Community from "../NavComp/Community";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "Shows",
        element: <Shows />,
      },
      {
        path: "Watch",
        element: <Watch />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "post/:id",
        element: <Details />,
      },
      { path: "result/", element: <Result /> },
    ],
  },
]);
export default router;
