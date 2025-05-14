import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Advantages />
              <Pricing />
              <Partners />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tos" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;