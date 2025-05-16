"use client"
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Button from './ui/button';
import { useState, useEffect } from 'react';

export default function Hero({ darkMode = false }) {
  // State for client-side animations
  const [isClient, setIsClient] = useState(false);

  // Run animations only after hydration is complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  // Features list with icons
  const features = [
    "Secure transactions",
    "Verified buyers",
    "Maximize ROI"
  ];

  // Predefined positions for background elements to avoid hydration mismatch
  const bgElements = [
    { top: "15%", left: "10%", width: "30vw", height: "40vh", x: [-10, 10], y: [-5, 15] },
    { top: "60%", left: "5%", width: "25vw", height: "30vh", x: [10, -10], y: [10, -5] },
    { top: "20%", left: "70%", width: "35vw", height: "25vh", x: [-15, 5], y: [5, -15] },
    { top: "65%", left: "60%", width: "40vw", height: "35vh", x: [5, -5], y: [-10, 5] },
    { top: "40%", left: "40%", width: "20vw", height: "45vh", x: [-5, 15], y: [15, -10] },
    { top: "75%", left: "85%", width: "15vw", height: "20vh", x: [10, -15], y: [-5, 10] },
  ];

  return (
    <section className={`relative overflow-hidden py-20 lg:py-28 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-teal-50 to-cyan-100'}`}>
      {/* Animated background elements - only animate on client side */}
      <div className="absolute inset-0 z-0">
        {bgElements.map((elem, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-teal-900/20' : 'bg-teal-500/10'} blur-3xl`}
            style={{
              top: elem.top,
              left: elem.left,
              width: elem.width,
              height: elem.height,
            }}
            animate={isClient ? {
              x: elem.x,
              y: elem.y,
              opacity: [0.4, 0.6, 0.4],
            } : {}}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}
              variants={fadeInUp}
            >
              Turn Unused Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">Licenses</span> Into Cash
            </motion.h1>
            
            <motion.p 
              className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              variants={fadeInUp}
            >
              SoftSell helps businesses maximize the value of idle software assets through our secure, 
              transparent resale marketplace.
            </motion.p>
            
            <motion.div 
              className="flex flex-row space-x-4 mb-10"
              variants={fadeInUp}
            >
              <Button onClick={() => window.location.href = '#contact'} primary={true} className="px-8 py-3 text-lg flex items-center justify-center">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button onClick={() => window.location.href = '#how-it-works'} primary={false} className="px-8 py-3 text-lg flex items-center justify-center">
                Learn More
                <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </motion.div>
            
            <motion.ul 
              className="flex flex-col sm:flex-row gap-6"
              variants={fadeInUp}
            >
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className={`flex items-center justify-center w-5 h-5 mr-2 rounded-full ${darkMode ? 'bg-teal-500' : 'bg-teal-500'}`}>
                    <Check size={12} className="text-white" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Visual content / image - hidden on small screens */}
          <motion.div 
            className="w-full lg:w-1/2 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'shadow-teal-900/20' : 'shadow-teal-200/50'}`}>
              {/* 3D Dashboard visualization */}
              <motion.div 
                className={`w-full aspect-[4/3] ${darkMode ? 'bg-gray-800' : 'bg-white'} relative`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main dashboard window */}
                <div className={`absolute inset-4 rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
                  {/* Header bar */}
                  <div className={`h-10 ${darkMode ? 'bg-gray-800' : 'bg-teal-500'} flex items-center px-4`}>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className={`mx-auto text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                      SoftSell Dashboard
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-4">
                    {/* Analytics graph */}
                    <motion.div 
                      className={`h-24 mb-4 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} relative overflow-hidden`}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {/* Graph line */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                          d="M0,50 Q20,30 40,45 T70,30 T100,40"
                          fill="none"
                          stroke={darkMode ? "#5eead4" : "#0d9488"}
                          strokeWidth="2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.path
                          d="M0,50 Q20,30 40,45 T70,30 T100,40"
                          fill="none"
                          stroke={darkMode ? "#5eead4" : "#0d9488"}
                          strokeWidth="0.5"
                          strokeOpacity="0.3"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        {/* Area under the graph */}
                        <motion.path
                          d="M0,50 Q20,30 40,45 T70,30 T100,40 V100 H0 Z"
                          fill="url(#gradient)"
                          fillOpacity="0.2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={darkMode ? "#5eead4" : "#0d9488"} />
                            <stop offset="100%" stopColor={darkMode ? "#0f766e" : "#ccfbf1"} stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    
                    {/* Data tiles */}
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`rounded p-3 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <div className={`w-full h-2 mb-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                            <motion.div 
                              className="h-full rounded-full bg-teal-500"
                              initial={{ width: "0%" }}
                              animate={{ width: `${(i + 1) * 25}%` }}
                              transition={{ duration: 1, delay: 1 + i * 0.1 }}
                            />
                          </div>
                          <div className={`w-3/4 h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Reflection/shadow effect */}
                <div className="absolute left-4 right-4 bottom-0 h-24 bg-gradient-to-t from-transparent to-black opacity-10" />
              </motion.div>
              
              {/* Overlay elements */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  className={`rounded-full px-4 py-1 text-xs font-medium ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Premium Dashboard
                </motion.div>
              </div>
              
              {/* Bottom info bar */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-gradient-to-t from-black/80 to-black/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.p 
                  className="text-lg font-bold text-white"
                  animate={{ 
                    opacity: [0.9, 1, 0.9],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Transform idle assets into revenue
                </motion.p>
                <p className="text-sm text-teal-200">Easily monitor your license resale performance</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}