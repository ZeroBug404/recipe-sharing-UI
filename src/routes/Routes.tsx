// import PrivateRoutes from "./PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
export default routes;
