import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import TopMenu from './TopMenu';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dropdownRef = useRef(null);

  // 🔸 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔸 Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    
    <div
        className={`sticky top-0 z-50 transition-all duration-300 
          ${menuOpen || scrolled ? 'bg-neutral-light' : ''} 
          ${!isHome ? 'border-b border-primary-300' : ''}`}
      >
      <div className="container-width py-6 flex items-center justify-between">
        <Link to="/" className=''>
          <div className={`logo-text ${isHome ? 'hidden' : ''}`}>Emerald City Fest</div>
        </Link>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-primary-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-900"></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <TopMenu />
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className="relative lg:hidden">
        <div
          ref={dropdownRef}
          className={`
            absolute left-0 w-full bg-neutral-light z-40 transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <div className="px-6 py-4 shadow-md border-b border-primary-300">
            <TopMenu vertical onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
