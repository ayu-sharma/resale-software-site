"use client"
import { motion } from 'framer-motion';
import { Sun, Moon, Database, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set active link and update URL
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
    // Update URL hash without full page reload
    window.history.pushState(null, '', href);
  };

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode class to document for global styling
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Initialize active link based on URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setActiveLink(hash);
    } else {
      // Default to first section if no hash
      setActiveLink('#how-it-works');
    }
  }, []);

  // Detect active section based on scroll position with improved accuracy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['how-it-works', 'why-choose-us', 'testimonials', 'contact'];
      let currentActive = '';
      let minDistance = Infinity;
      
      // Find the section closest to the viewport center
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceToCenter = Math.abs(rect.top + rect.height / 2 - viewportCenter);
          
          // Find section closest to center of viewport
          if (distanceToCenter < minDistance) {
            minDistance = distanceToCenter;
            currentActive = `#${section}`;
          }
        }
      }
      
      if (currentActive && currentActive !== activeLink) {
        setActiveLink(currentActive);
        // Update URL hash without causing a scroll jump
        window.history.replaceState(null, '', currentActive);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  // Menu animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  // NavLink component for consistent styling
  const NavLink = ({ href, children }) => {
    const isActive = activeLink === href;
    
    return (
      <a 
        href={href} 
        onClick={() => handleLinkClick(href)}
        className={`relative transition-colors hover:text-teal-500 ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        } ${isActive ? 'font-medium' : ''}`}
      >
        {children}
        {isActive && (
          <>
            {/* Desktop indicator (bottom) */}
            <motion.div 
              layoutId="activeIndicatorDesktop"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 hidden md:block"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            
            {/* Mobile indicator (right side) */}
            <motion.div 
              layoutId="activeIndicatorMobile"
              className="absolute right-0 top-0 h-full w-0.5 bg-teal-500 md:hidden"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </>
        )}
      </a>
    );
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: 0 }}
          >
            <Database size={32} className={`mr-2 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          </motion.div>
          <h1 className="text-2xl font-bold">SoftSell</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#why-choose-us">Why Choose Us</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X size={24} className={darkMode ? 'text-white' : 'text-gray-800'} /> : 
              <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation Slide-in Menu */}
      <motion.div 
        className={`fixed top-0 right-0 h-full w-64 p-6 pt-20 z-40 shadow-lg ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } md:hidden`}
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        {/* Close button for mobile menu */}
        <button
          className={`absolute top-4 right-4 p-2 rounded-full cursor-pointer ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        
        <nav className="flex flex-col space-y-6">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#why-choose-us">Why Choose Us</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}