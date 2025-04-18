import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClimatePage from "./pages/ClimatePage";
import EducationPage from "./pages/EducationPage";
import FoodSecurityPage from "./pages/FoodSecurityPage";
import HealthPage from "./pages/HealthPage";
import WaterPage from "./pages/WaterPage";
import React from 'react';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import "./index.css";  // Ensure styles are applied

function App() {
  return (
    <Router basename="/Hopeful-Destiny">
      <Navigation /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/climate" element={<ClimatePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/food-security" element={<FoodSecurityPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/water-sanitation" element={<WaterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
