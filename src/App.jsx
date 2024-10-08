import React from "react";
import Homepage from './components/Homepage'
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import Services from "./components/Services";
import Strengths from "./components/Strengths";
import Financials from "./components/Financials";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/infrastructure" element={<Infrastructure/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/strengths" element={<Strengths />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
