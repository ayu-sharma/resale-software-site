"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Davis",
      role: "CTO, Streamline Solutions",
      image: "/api/placeholder/80/80",
      content: "SoftSell helped us recover over $47,000 from unused enterprise software licenses. Their process was seamless, and the valuation they provided exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Finance Director, TechWave Inc.",
      image: "/api/placeholder/80/80",
      content: "As part of our cost optimization initiative, we needed to monetize unused software assets. SoftSell's market expertise and transparent process made it incredibly easy.",
      rating: 4
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-teal-500 mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            Businesses of all sizes trust SoftSell to maximize the value of their software assets.
          </motion.p>
        </motion.div>
        
        {/* Desktop view - Side by side cards */}
        <div className="hidden md:flex md:space-x-6 lg:space-x-10 mb-10">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-teal-50 flex items-center justify-center">
                      <span className="font-bold text-lg text-teal-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-teal-500 mb-1">
                    {Array(5).fill(0).map((_, idx) => (
                      <span key={idx} className="inline-block mr-1">
                        {idx < testimonial.rating ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="italic text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-6 flex justify-end">
                  <motion.div
                    className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "#0d9488",
                      color: "white",
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view - Card slider */}
        <div className="md:hidden">
          <div className="relative px-4">
            <motion.div
              key={activeIndex}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-teal-50 flex items-center justify-center">
                      <span className="font-bold text-base text-teal-600">
                        {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                    <p className="text-xs text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-teal-500 mb-1">
                    {Array(5).fill(0).map((_, idx) => (
                      <span key={idx} className="inline-block mr-1">
                        {idx < testimonials[activeIndex].rating ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="italic text-gray-700 text-sm leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>
            </motion.div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-teal-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="hidden lg:block">
          <motion.div 
            className="absolute -z-10 top-10 left-10 w-64 h-64 rounded-full bg-teal-50 opacity-30 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute -z-10 bottom-10 right-10 w-96 h-96 rounded-full bg-blue-50 opacity-30 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
    </section>
  );
}