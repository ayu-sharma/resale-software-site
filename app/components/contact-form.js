"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './ui/button';

export default function ContactForm({ darkMode = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formFocus, setFormFocus] = useState({});
  const [isClient, setIsClient] = useState(false);

  // Set client-side rendering flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Handle input focus
  const handleFocus = (name) => {
    setFormFocus({
      ...formFocus,
      [name]: true
    });
  };

  // Handle input blur
  const handleBlur = (name) => {
    setFormFocus({
      ...formFocus,
      [name]: false
    });
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.licenseType) errors.licenseType = 'Please select a license type';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically make an API call to submit the form
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 } 
    }
  };

  const decorationVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  // Predefined positions for background elements
  const bgElements = [
    { top: "10%", left: "15%", width: "35vw", height: "30vh", x: [-15, 5], y: [10, -15] },
    { top: "70%", left: "8%", width: "28vw", height: "25vh", x: [5, -10], y: [-5, 10] },
    { top: "25%", left: "75%", width: "32vw", height: "35vh", x: [-5, 15], y: [5, -10] },
    { top: "65%", left: "65%", width: "25vw", height: "30vh", x: [15, -5], y: [-15, 5] },
    { top: "45%", left: "35%", width: "22vw", height: "20vh", x: [-10, 5], y: [5, -5] },
    { top: "85%", left: "80%", width: "18vw", height: "28vh", x: [5, -15], y: [-5, 15] },
  ];

  return (
    <section id="contact" className={`relative overflow-hidden py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-teal-50 to-cyan-100'}`}>
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

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            variants={itemVariants}
          >
            Get Your Free Valuation
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-teal-500 mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            variants={itemVariants}
          >
            Fill out the form below and one of our software licensing experts will contact you within 24 hours.
          </motion.p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto relative">
          {/* Form decoration */}
          <div className="hidden md:block">
            <motion.div 
              className="absolute -top-4 -right-8 w-16 h-16 text-teal-500 opacity-20"
              variants={decorationVariants}
              animate="animate"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-8 w-16 h-16 text-teal-500 opacity-20"
              variants={decorationVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </div>

          <motion.div 
            className="rounded-xl p-8 bg-white shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <motion.div 
                className="p-8 rounded-lg bg-teal-50 border border-teal-100 text-center"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-800">Thank You!</h3>
                <p className="text-teal-700">
                  Your information has been submitted successfully. One of our experts will contact you within 24 hours.
                </p>
                <motion.div
                  className="w-full h-1 bg-teal-200 mt-6 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3 }}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.name ? 'border-red-400' : formFocus.name ? 'border-teal-400' : 'border-gray-200'
                        } bg-white focus:outline-none transition-colors duration-200`}
                        placeholder="John Doe"
                      />
                      {formFocus.name && !formErrors.name && (
                        <div className="absolute right-3 top-3 text-teal-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {formErrors.name && (
                      <motion.p 
                        className="mt-1 text-red-500 text-sm flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formErrors.name}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email ? 'border-red-400' : formFocus.email ? 'border-teal-400' : 'border-gray-200'
                        } bg-white focus:outline-none transition-colors duration-200`}
                        placeholder="john@example.com"
                      />
                      {formFocus.email && !formErrors.email && (
                        <div className="absolute right-3 top-3 text-teal-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {formErrors.email && (
                      <motion.p 
                        className="mt-1 text-red-500 text-sm flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formErrors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="company" className="block mb-2 font-medium text-gray-700">Company</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={() => handleBlur('company')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.company ? 'border-red-400' : formFocus.company ? 'border-teal-400' : 'border-gray-200'
                        } bg-white focus:outline-none transition-colors duration-200`}
                        placeholder="Acme Inc."
                      />
                      {formFocus.company && !formErrors.company && (
                        <div className="absolute right-3 top-3 text-teal-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {formErrors.company && (
                      <motion.p 
                        className="mt-1 text-red-500 text-sm flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formErrors.company}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="licenseType" className="block mb-2 font-medium text-gray-700">License Type</label>
                    <div className="relative">
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('licenseType')}
                        onBlur={() => handleBlur('licenseType')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.licenseType ? 'border-red-400' : formFocus.licenseType ? 'border-teal-400' : 'border-gray-200'
                        } bg-white focus:outline-none transition-colors duration-200 appearance-none`}
                      >
                        <option value="">Select license type</option>
                        <option value="enterprise">Enterprise Software</option>
                        <option value="productivity">Productivity Suite</option>
                        <option value="design">Design & Creative</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="security">Security Software</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.licenseType && (
                      <motion.p 
                        className="mt-1 text-red-500 text-sm flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formErrors.licenseType}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
                
                <motion.div className="mb-8" variants={itemVariants}>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formFocus.message ? 'border-teal-400' : 'border-gray-200'
                      } bg-white focus:outline-none transition-colors duration-200`}
                      placeholder="Tell us more about your software licenses..."
                    ></textarea>
                    {formFocus.message && (
                      <div className="absolute right-3 top-3 text-teal-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" primary={true} fullWidth={true}>
                    <div className="flex items-center justify-center">
                      <span>Get My Valuation</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}