import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestErrorProtected from "./components/Test.jsx";
import ErrorPage from "./components/ErrorRoute.jsx";
import RenderModal from "./components/RenderModal.jsx";
import ContextWrapper from "./components/ContextWrapper.jsx";
import UseReducer from "./components/Hooks/useReducer.jsx";
import UseMemo from "./components/Hooks/useMemo.jsx";
import UseCallback from "./components/Hooks/useCallback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App errorFallback={<ErrorPage />} />,
    children: [
      {
        path: "error-boundary",
        element: <TestErrorProtected shouldThrowError />,
      },
      {
        path: "portals",
        element:  <RenderModal />,
      },
      {
        path: "context",
        element:  <ContextWrapper />,
      },
      {
        path: "use-reducer",
        element:  <UseReducer />,
      },
      {
        path: "use-memo",
        element:  <UseMemo />,
      },
      {
        path: "use-callback",
        element:  <UseCallback />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
