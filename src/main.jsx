import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import Products from "./Component/Pages/Products.jsx";
import Categories from "./Component/Pages/Categories.jsx";
import Custom from "./Component/Pages/Custom.jsx";
import Blog from "./Component/Pages/Blog.jsx";
import Login from "./Component/LogInAndRegister/Login.jsx";
import Register from "./Component/LogInAndRegister/Register.jsx";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AuthProvider from "./Component/AuthProvider/AuthProvider.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/custom",
        element: <Custom></Custom>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
