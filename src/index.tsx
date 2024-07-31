import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context/materialContext";

const container = document.getElementById("app");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  );
} else {
  console.error("Failed to find the app container element");
}
