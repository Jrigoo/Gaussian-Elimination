import React from "react";
import { Routes, Route } from "react-router-dom";

import { Calculator } from "./components/Calculator";
import { Main } from "./components/Main";
import { Code } from "./components/Code";

import "./index.css";

function App() {
  return (
    <div id="main_page" className="main_page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </div>
  );
}

export { App };
