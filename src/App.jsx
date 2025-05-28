import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Info from './pages/Info';
import Teams from './pages/Teams';
import Registration from './pages/Registration';
import Reglament from './pages/Reglament';
import Footer from './components/Footer';
import NotFound from "./pages/NotFound";


function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <NavBar />}
      <main className="grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reglament" element={<Reglament />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isHome &&  <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
