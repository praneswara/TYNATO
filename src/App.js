// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Router } from "./components/Router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import CareerDetail from "./pages/CareerDetail";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
    <Router>
      {({ currentPath, params }) => (
        <>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {currentPath === "home" && <Home />}
              {currentPath === "services" && <Services />}
              {currentPath.startsWith("service/") && <ServiceDetail />}
              {currentPath === "about" && <About />}
              {currentPath === "careers" && <Careers />}
              {currentPath === "contact" && <Contact />}
              {currentPath.startsWith("career/") && (
                <CareerDetail jobId={params[0]} />
              )}
            </main>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
};

export default App;
