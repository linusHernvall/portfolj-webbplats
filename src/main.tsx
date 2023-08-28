import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Coworker from "./pages/Coworker";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/coworker/:id" element={<Coworker />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export function Root() {
  return (
    <React.StrictMode>
      <MantineProvider
        theme={{
          fontFamily: "Inter, sans-serif",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Root />);
