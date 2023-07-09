import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Products } from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cart } from "./pages/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
