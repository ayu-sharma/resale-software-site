"use client"
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  primary = true, 
  type = "button",
  fullWidth = false,
  className = "" 
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? 'w-full' : ''} py-3 px-6 rounded-lg font-semibold cursor-pointer
      ${primary ? 'bg-teal-600 hover:bg-teal-500 text-white' : 'bg-white hover:bg-gray-100'} 
      transition-colors ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
