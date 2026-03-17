'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['about', 'experience', 'projects', 'skills', 'contact'];

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">PR<span className="accent">.</span></a>
        <div className="nav-links">
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => handleClick(l)}>
              {l}
            </button>
          ))}
        </div>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l} className="mobile-link" onClick={() => handleClick(l)}>
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
