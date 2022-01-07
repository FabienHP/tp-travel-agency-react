import React from 'react';
import './assets/css/style.css';
import './assets/js/script';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from './pages/Index';
import Agency from './pages/Agency';
import Contact from './pages/Contact';
import DestiPage from './pages/DestiPage';
import OurDesti from './pages/OurDesti';
import TermCondition from './pages/TermCondition';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<OurDesti />} />
          <Route path="/term" element={<TermCondition />} />
          <Route path="/destipage" element={<DestiPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )

}

export default App;
