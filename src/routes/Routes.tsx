// import PrivateRoutes from "./PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AddRecipes from "../pages/Recipes/AddRecipes";
import AllRecipes from "../pages/Recipes/AllRecipes";
import RecipeDetail from "../pages/Recipes/RecipeDetail";
import BuyCoin from "../pages/BuyCoin/BuyCoin";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoutes>
            <AddRecipes />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-recipes",
        element: <AllRecipes />,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoutes>
            <RecipeDetail />
          </PrivateRoutes>
        ),
      },
      {
        path: "/buy-coin",
        element: (
          <PrivateRoutes>
            <BuyCoin />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default routes;
