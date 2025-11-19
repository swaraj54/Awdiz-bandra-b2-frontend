import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import CounterContextProvider from "./contexts/counterContext.jsx";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CounterContextProvider>
    </BrowserRouter>
  </StrictMode>
);
