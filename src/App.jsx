import Page from "./pages/Page";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculationUI from "./pages/CalculationUI";
function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#AD94E0] min-h-screen text-center">
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/agecalculation" element={<CalculationUI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
