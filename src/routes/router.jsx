import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import About from "../pages/About";
import ForgetPassword from "../pages/ForgetPassword";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/games.json") },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/game/:id", element: <GameDetails />, loader: () => fetch("/games.json")  },
      { path: "/all", element: <AllGames />,loader: () => fetch("/games.json") },
      { path: "/profile", element: <MyProfile /> },
      { path: "/update", element: <UpdateProfile /> },
      { path: "/about", element: <About /> },
      { path: "/forget-password", element: <ForgetPassword /> },
    ],
  },
  
  { path: "*", element: <PageNotFound /> },
]);
