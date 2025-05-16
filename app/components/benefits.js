"use client"
import { motion } from 'framer-motion';
import { DollarSign, Shield, Zap, MessageSquare, Star, TrendingUp } from 'lucide-react';

export default function Benefits({ darkMode = false }) {
  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0, opacity: 0, rotate: -15 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 9
      }
    }
  };

  const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const backgroundAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5 
      }
    }
  };

  // Benefit data
  const benefits = [
    {
      icon: DollarSign,
      title: "Best Price Guarantee",
      description: "Our market analysis ensures you get up to 70% of the original value for your unused licenses.",
      gradient: darkMode ? "from-emerald-700/20 to-teal-600/10" : "from-emerald-100 to-teal-50",
      highlightText: "70% value recovery",
      highlightColor: darkMode ? "text-emerald-400" : "text-emerald-600"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level encryption and compliance with all software licensing regulations give you peace of mind.",
      gradient: darkMode ? "from-cyan-700/20 to-teal-600/10" : "from-cyan-100 to-teal-50",
      highlightText: "Enterprise-grade security",
      highlightColor: darkMode ? "text-cyan-400" : "text-cyan-600"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "From valuation to payment, our streamlined process takes just 72 hours, the fastest in the industry.",
      gradient: darkMode ? "from-teal-700/20 to-cyan-600/10" : "from-teal-100 to-cyan-50",
      highlightText: "72-hour turnaround",
      highlightColor: darkMode ? "text-teal-400" : "text-teal-600"
    },
    {
      icon: MessageSquare,
      title: "Dedicated Support",
      description: "Our team of software licensing experts provides personalized guidance throughout the process.",
      gradient: darkMode ? "from-blue-700/20 to-teal-600/10" : "from-blue-100 to-teal-50",
      highlightText: "Expert consultants",
      highlightColor: darkMode ? "text-blue-400" : "text-blue-600"
    }
  ];

  // Decorative elements function
  const DecorativeShape = ({ className }) => (
    <motion.div 
      className={`absolute w-64 h-64 rounded-full blur-3xl ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );

  return (
    <section 
      id="why-choose-us" 
      className={`relative py-24 overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100' 
          : 'bg-gradient-to-b from-teal-50 to-cyan-100 text-gray-800'
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <DecorativeShape 
          className={darkMode 
            ? "top-0 left-1/4 bg-teal-900/10" 
            : "top-0 left-1/4 bg-teal-200/40"
          } 
        />
        <DecorativeShape 
          className={darkMode 
            ? "bottom-0 right-1/4 bg-cyan-900/10" 
            : "bottom-0 right-1/4 bg-cyan-200/40"
          } 
        />
        
        {/* Subtle pattern overlay */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: darkMode ? 0.05 : 0.07 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, ${darkMode ? 'white' : 'black'} 2%, transparent 0%), 
                               radial-gradient(circle at 75px 75px, ${darkMode ? 'white' : 'black'} 1%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Decorative stars */}
          <motion.div 
            className="flex justify-center mb-2"
            variants={backgroundAnimation}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
              >
                <Star 
                  size={16} 
                  className={`mx-1 ${darkMode ? 'text-teal-400' : 'text-teal-500'} ${i < 4 ? 'fill-current' : ''}`} 
                />
              </motion.div>
            ))}
          </motion.div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">SoftSell</span>
          </h2>
          
          <motion.p 
            className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            variants={fadeInUp}
          >
            We're transforming how businesses manage their software assets by creating the most trusted resale platform.
          </motion.p>
        </motion.div>
        
        {/* Stats banner above benefits */}
        <motion.div
          className={`mx-auto max-w-4xl mb-16 rounded-xl overflow-hidden ${
            darkMode ? 'bg-gray-800/60 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
          } shadow-xl`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/20">
            {[
              { value: "$14M+", label: "Recovered Value" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5,000+", label: "Licenses Resold" }
            ].map((stat, index) => (
              <div key={index} className="p-6 text-center">
                <motion.div
                  className={`text-2xl md:text-3xl font-bold mb-1 ${
                    darkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl h-full ${
                darkMode 
                  ? 'bg-gray-800/60 backdrop-blur-sm' 
                  : 'bg-white/90 backdrop-blur-sm'
              } shadow-lg overflow-hidden`}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                boxShadow: darkMode 
                  ? '0 25px 50px -12px rgba(0, 150, 150, 0.15)'
                  : '0 25px 50px -12px rgba(0, 150, 150, 0.25)', 
                transition: { duration: 0.3 } 
              }}
            >
              {/* Top gradient border */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${benefit.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon with animated container */}
                <div className="relative mb-6">
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-30`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 2.5 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  />
                  <motion.div 
                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } shadow-md`}
                    variants={iconAnimation}
                  >
                    <benefit.icon size={28} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                  </motion.div>
                </div>
                
                <motion.h3 
                  className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  variants={fadeInUp}
                >
                  {benefit.title}
                </motion.h3>
                
                <motion.p
                  className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  variants={fadeInUp}
                >
                  {benefit.description}
                </motion.p>
                
                {/* Highlighted tag */}
                <motion.div
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <TrendingUp size={12} className={`mr-1 ${benefit.highlightColor}`} />
                  <span className={benefit.highlightColor}>
                    {benefit.highlightText}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}