import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErroPage from "./pages/ErroPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserProfil from "./pages/UserProfil";
import Authors from "./pages/Authors";
import AuthorPosts from "./pages/AuthorPosts";
import CreatePosts from "./pages/CreatePosts";
import EditPost from "./pages/EditPost";
import Dashboard from "./pages/Dashboard";
import CategoryPosts from "./pages/CategoryPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profil/:id", element: <UserProfil /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePosts /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "Logout", element: <Logout /> },
      { path: "register", element: <Register /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
