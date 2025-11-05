import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import CounterContextProvider from "./contexts/counterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </BrowserRouter>
  </StrictMode>
);
