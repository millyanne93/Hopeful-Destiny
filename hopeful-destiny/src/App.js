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
import BlogRoutes from './BlogRoutes';
import ProgramsPage from "./pages/ProgramsPage";
import "./index.css";
import DonationPage from './pages/DonationPage';
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router basename="/Hopeful-Destiny">
      <Navigation /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/climate" element={<ClimatePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/food-security" element={<FoodSecurityPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/water-sanitation" element={<WaterPage />} />
        <Route path="/blog/*" element={<BlogRoutes />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
