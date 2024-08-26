import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./routes/LandingPage.jsx";
import "./index.css";
import Coming from "./routes/Coming.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/soon" element={<Coming />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
