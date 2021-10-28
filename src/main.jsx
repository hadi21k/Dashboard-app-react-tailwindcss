import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ShownContextProvider } from "./Hooks/context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShownContextProvider>
        <App />
      </ShownContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
