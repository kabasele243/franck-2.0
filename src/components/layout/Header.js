import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ className, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
    // Lock body scroll when menu is open on mobile
    document.body.style.overflow = !isActive ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsActive(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-bg-DEFAULT/90 backdrop-blur-md py-2 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'} ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">

          {/* Logo / Brand */}
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block group" onClick={closeMenu}>
              <div className="font-mono text-xl font-bold text-white tracking-tighter group-hover:text-accent-cyan transition-colors">
                &lt;Franck  Kabasele/&gt;
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-grow justify-end">
            <ul className="flex flex-wrap items-center justify-end gap-8 font-mono text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-accent-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/project" className="text-slate-300 hover:text-accent-cyan transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-accent-cyan transition-colors">About</Link>
              </li>
              <li>
                <a href="https://github.com/kabasele243" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-white focus:outline-none">
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Overlay */}
          {isActive && (
            <div className="fixed inset-0 z-50 bg-bg-DEFAULT flex flex-col items-center justify-center md:hidden">
              <button onClick={toggleMenu} className="absolute top-6 right-6 text-slate-300 hover:text-white">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" transform="rotate(135 12 12)" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              <nav>
                <ul className="flex flex-col gap-8 text-center font-mono text-xl">
                  <li><Link to="/" onClick={closeMenu} className="text-white hover:text-accent-cyan">Home</Link></li>
                  <li><Link to="/project" onClick={closeMenu} className="text-white hover:text-accent-cyan">Case Studies</Link></li>
                  <li><Link to="/about" onClick={closeMenu} className="text-white hover:text-accent-cyan">About</Link></li>
                </ul>
              </nav>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}

export default Header;