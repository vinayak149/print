import React from "react";
import Homepage from './components/Homepage'
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import Services from "./components/Services";
import Strengths from "./components/Strengths";
import Financials from "./components/Financials";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Corrugation from "./Pages/Corrugation";
import DesignStudio from "./Pages/DesignStudio";
import CommercialPrinting from "./Pages/CommercialPrinting";
import DigitalPrinting from "./Pages/DigitalPrinting";
import FinancialPrinting from "./Pages/FinancialPrinting";
import PublishingSolutions from "./Pages/PublishingSolutions";




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

        {/* Services Routes */}
        <Route path="/financial-printing" element={<FinancialPrinting />} />
        <Route path="/publishing-solutions" element={<PublishingSolutions />} />
        <Route path="/commercial-printing" element={<CommercialPrinting />} />
        <Route path="/digital-printing" element={<DigitalPrinting />} />
        <Route path="/design-studio" element={<DesignStudio />} />
        <Route path="/corrugation" element={<Corrugation />} />

        
      </Routes>
    </Router>
  )
}

export default App
