import React from "react";
import Header from "./components/Header/header";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services/services";
import Residental from "./components/pages/Residental/residental";
import Commercial from "./components/pages/Commercial/commercial";
import Deep from "./components/pages/Deep/deep";
import In_Out from "./components/pages/In_Out/in_out";
import Construction from "./components/pages/Construction/construction";
import Carpet from "./components/pages/Carpet/carpet";
import Footer from "./components/Footer/footer";
import Home from "./components/pages/Home/home";
import About from "./components/About/about";
import './App.css'

function App() {
  return (
    <div className="background-color">
      <Header />
     
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/footer' element={<Footer />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/residential-cleaning"
            element={<Residental />}
          />
          <Route
            path="/services/commercial-cleaning"
            element={<Commercial />}
          />
          <Route path="/services/deep-cleaning" element={<Deep />} />
          <Route path="/services/move-in-out-cleaning" element={<In_Out />} />
          <Route
            path="/services/post-construction-cleaning"
            element={<Construction />}
          />
          <Route path="/services/carpet-upholstery" element={<Carpet />} />
        </Routes>
        
      
      <Footer />
    </div>
  );
}

export default App;
