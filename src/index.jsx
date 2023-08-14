import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Products } from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cart } from "./pages/Cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { OnePizza } from "./pages/OnePizza";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  const queryClient = new QueryClient();
  const router = createHashRouter([
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
        {
          path: "/pizzas/:id",
          element: <OnePizza />,
        },
      ],
    },
  ]);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
}
