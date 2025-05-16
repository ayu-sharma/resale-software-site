"use client"
import { Database, Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ darkMode = false }) {
  const currentYear = new Date().getFullYear();
  
  // Determine theme-based styling
  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-100',
    text: darkMode ? 'text-gray-300' : 'text-gray-700',
    accent: darkMode ? 'text-teal-400' : 'text-teal-600',
    hover: darkMode ? 'hover:text-teal-400' : 'hover:text-teal-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    footerLink: `transition duration-200 ease-in-out ${darkMode ? 'hover:text-teal-400' : 'hover:text-teal-600'}`
  };

  // Footer sections data
  const links = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'System Status', href: '/status' },
    ]
  };

  // Social media icons
  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com/softsell' },
    { Icon: Instagram, href: 'https://instagram.com/softsell' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/softsell' },
    { Icon: Github, href: 'https://github.com/softsell' },
  ];

  // Contact information
  const contactInfo = [
    { Icon: Mail, text: 'contact@softsell.com' },
    { Icon: Phone, text: '+91 98050 12345' },
    { Icon: MapPin, text: 'Mall Road, Shimla, Himachal Pradesh 171001, India' },
  ];

  return (
    <footer className={`pt-12 pb-8 ${theme.bg} ${theme.text}`}>
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company info section */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center mb-4">
              <Database size={28} className={`mr-3 ${theme.accent}`} />
              <h2 className="text-2xl font-bold">SoftSell</h2>
            </div>
            <p className="mb-6 text-sm opacity-75 max-w-md">
              Enterprise software solutions designed to streamline your business operations and boost productivity.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`${theme.footerLink} p-2 rounded-full border ${theme.border} hover:bg-opacity-10 hover:bg-white`}
                  aria-label={`Visit our ${social.Icon.name} page`}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links sections */}
          <div className="lg:col-span-2 flex flex-col space-y-2">
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            {links.company.map((link, index) => (
              <a key={index} href={link.href} className={theme.footerLink}>{link.name}</a>
            ))}
          </div>
          
          <div className="lg:col-span-2 flex flex-col space-y-2">
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            {links.legal.map((link, index) => (
              <a key={index} href={link.href} className={theme.footerLink}>{link.name}</a>
            ))}
          </div>
          
          <div className="lg:col-span-2 flex flex-col space-y-2">
            <h3 className="font-semibold text-lg mb-3">Support</h3>
            {links.support.map((link, index) => (
              <a key={index} href={link.href} className={theme.footerLink}>{link.name}</a>
            ))}
          </div>
          
          {/* Contact information */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <div className="flex flex-col space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.Icon size={16} className={`mr-2 ${theme.accent}`} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`border-t ${theme.border} my-8`}></div>
        
        {/* Bottom footer with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}