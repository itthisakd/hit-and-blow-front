import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GameContextProvider } from "./contexts/gameContext";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
