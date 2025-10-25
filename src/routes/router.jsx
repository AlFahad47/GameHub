import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import AppNotFound from "../pages/APPNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/games.json") },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/game/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/games.json"),
        errorElement: <AppNotFound />,
      },
      {
        path: "/all",
        element: <AllGames />,
        loader: () => fetch("/games.json"),
      },
      { path: "/profile", element: <MyProfile /> },
      { path: "/update", element: <UpdateProfile /> },
      { path: "/forget-password", element: <ForgetPassword /> },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);
