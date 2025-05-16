"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Hero from './components/hero';
import Features from './components/features';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import ContactForm from './components/contact-form';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Head>
        <title>SoftSell | Maximize the Value of Your Unused Software Licenses</title>
        <meta name="description" content="SoftSell helps businesses sell their unused software licenses at the best possible price. Our streamlined process makes it easy to convert idle assets into cash." />
        <meta name="keywords" content="software resale, sell software licenses, software license marketplace, unused licenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero darkMode={darkMode} />

        {/* How It Works Section */}
        <Features darkMode={darkMode} />

        {/* Why Choose Us Section */}
        <Benefits darkMode={darkMode} />

        {/* Testimonials Section */}
        <Testimonials darkMode={darkMode} />

        {/* Contact / Lead Form Section */}
        <ContactForm darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
      
      {/* Chat Widget */}
      <ChatWidget darkMode={darkMode} />
    </div>
  );
}