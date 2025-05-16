"use client"
import { motion } from 'framer-motion';
import { Upload, Clock, DollarSign, ChevronRight, Check } from 'lucide-react';

export default function Features({ darkMode = false }) {
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
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0.5, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      repeatType: "reverse" 
    }
  };

  // Feature steps data
  const steps = [
    {
      icon: Upload,
      title: "Upload License",
      description: "Provide details about your software licenses including type, quantity, expiration, and original purchase price.",
      benefits: ["Secure upload process", "Support for all major vendors"],
      color: darkMode ? "from-teal-900/40 to-cyan-900/20" : "from-teal-100 to-cyan-50"
    },
    {
      icon: Clock,
      title: "Get Valuation",
      description: "Receive a competitive valuation within 24 hours based on our proprietary market analysis algorithm.",
      benefits: ["Transparent pricing", "Real-time market data"],
      color: darkMode ? "from-teal-900/50 to-cyan-900/30" : "from-teal-100 to-blue-50"
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 48 hours. It's that simple!",
      benefits: ["Multiple payment options", "No hidden fees"],
      color: darkMode ? "from-teal-900/60 to-cyan-900/40" : "from-teal-200 to-cyan-100"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-20 right-10 w-64 h-64 rounded-full ${darkMode ? 'bg-teal-900/10' : 'bg-teal-200/30'} blur-3xl`}></div>
        <div className={`absolute bottom-20 left-10 w-80 h-80 rounded-full ${darkMode ? 'bg-cyan-900/10' : 'bg-cyan-200/30'} blur-3xl`}></div>
        
        {/* Animated floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-teal-400/30' : 'bg-teal-500/30'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-block mb-2"
            whileHover={pulseAnimation}
          >
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-teal-900/30 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>
              Simple Process
            </span>
          </motion.div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">Works</span>
          </h2>
          
          <motion.p 
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}
            variants={fadeInUp}
          >
            Our simple 3-step process makes it easy to convert your unused software licenses into cash.
          </motion.p>
        </motion.div>
        
        {/* Connection line between steps for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 z-0">
          <motion.div 
            className={`h-full ${darkMode ? 'bg-gradient-to-r from-transparent via-teal-800/30 to-transparent' : 'bg-gradient-to-r from-transparent via-teal-300 to-transparent'}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative z-10 rounded-xl p-8 ${darkMode ? 'bg-gray-800/70 shadow-lg backdrop-blur-sm' : 'bg-white shadow-xl'} 
                flex flex-col h-full`}
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -right-3">
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${darkMode ? 'bg-teal-800 text-teal-200' : 'bg-teal-500 text-white'} 
                    font-bold text-lg shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.3, duration: 0.5, type: "spring" }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Gradient background for the icon */}
              <motion.div 
                className={`relative mb-8 w-20 h-20 rounded-2xl mx-auto bg-gradient-to-br ${step.color} p-0.5 overflow-hidden`}
                variants={iconAnimation}
              >
                {/* Inner icon container */}
                <div className={`absolute inset-0 rounded-2xl ${darkMode ? 'bg-gray-800/90' : 'bg-white'} m-0.5 flex items-center justify-center`}>
                  <step.icon 
                    size={36} 
                    className={darkMode ? 'text-teal-300' : 'text-teal-600'} 
                  />
                </div>
              </motion.div>

              <motion.h3 
                className={`text-xl md:text-2xl font-bold mb-3 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
                variants={fadeInUp}
              >
                {step.title}
              </motion.h3>
              
              <motion.p
                className={`mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                variants={fadeInUp}
              >
                {step.description}
              </motion.p>

              {/* Benefits list */}
              <motion.ul 
                className="mt-auto space-y-2"
                variants={fadeInUp}
              >
                {step.benefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                  >
                    <Check size={16} className={darkMode ? 'text-teal-400 mr-2' : 'text-teal-500 mr-2'} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Show arrows between cards on mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center md:hidden mt-6">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight 
                      size={24} 
                      className={`transform rotate-90 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} 
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className={`px-8 py-3 rounded-full font-medium text-white 
              ${darkMode ? 'bg-gradient-to-r from-teal-600 to-cyan-500' : 'bg-gradient-to-r from-teal-500 to-cyan-400'} 
              shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '#contact'}
          >
            Start Converting Licenses Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}