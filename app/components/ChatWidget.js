"use client"
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader2, BotIcon, UserIcon } from 'lucide-react';

export default function ChatWidget({ darkMode = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi there! I\'m SoftSell Assistant. How can I help you today with your software license questions?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  
  // Sample questions that users can ask
  const sampleQuestions = [
    "How do I sell my license?",
    "What types of software do you buy?",
    "How much is my license worth?",
    "How long does the process take?"
  ];

  // Mock AI responses
  const mockResponses = {
    "how do i sell my license": "Selling your license with SoftSell is easy! Just follow these 3 steps:\n\n1. Upload your license details through our secure portal\n2. Receive a valuation within 24 hours\n3. Accept our offer and get paid within 48 hours\n\nYou can start the process by clicking the 'Get Started' button at the top of our page.",
    
    "what types of software do you buy": "We purchase licenses for a wide range of software categories including:\n\n• Enterprise business software (ERP, CRM)\n• Creative and design tools\n• Development and DevOps tools\n• Productivity suites\n• Security and networking solutions\n\nIf you're unsure about your specific software, feel free to submit it for valuation and our experts will assess it for you.",
    
    "how much is my license worth": "The value of your license depends on several factors:\n\n• Software type and vendor\n• License age and remaining time\n• Current market demand\n• Quantity of licenses\n\nOn average, our customers receive up to 70% of the original value for newer, in-demand licenses. For a precise valuation, please submit your license details through our portal.",
    
    "how long does the process take": "Our streamlined process is designed for efficiency:\n\n• License upload & submission: 5 minutes\n• Valuation: within 24 hours\n• Payment processing: within 48 hours after accepting offer\n\nFrom start to finish, most transactions are completed within 72 hours, making us the fastest in the industry."
  };

  // Functions to handle chat
  const handleSend = async () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);
    
    // Simulate API delay
    setTimeout(() => {
      // Process response (in a real implementation, this would call OpenAI or similar)
      const lowercaseInput = input.toLowerCase();
      let response;
      
      // Check for match in our mock responses
      for (const key in mockResponses) {
        if (lowercaseInput.includes(key)) {
          response = mockResponses[key];
          break;
        }
      }
      
      // Fallback response if no match found
      if (!response) {
        response = "I don't have specific information about that. For detailed assistance, please contact our support team at support@softsell.com or try asking about how to sell licenses, what types we buy, or the process timeline.";
      }
      
      // Add AI response
      const aiMessage = { role: 'system', content: response };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSampleQuestion = (question) => {
    setInput(question);
    setShowSuggestions(false);
    // Automatically send the sample question
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Close chat function
  const closeChat = () => {
    setIsOpen(false);
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed z-50 bottom-5 right-5 rounded-full shadow-lg bg-teal-500 text-white p-4 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setShowSuggestions(true);
          }
        }}
      >
        {isOpen ? 
          <X size={24} /> : 
          <MessageSquare size={24} />
        }
      </motion.button>
      
      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
          />
        )}
      </AnimatePresence>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed z-40 bottom-0 sm:bottom-20 right-0 sm:right-5 w-full sm:w-80 md:w-96 h-[85vh] sm:h-96 flex flex-col overflow-hidden sm:rounded-xl shadow-2xl ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="p-4 bg-teal-500 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <BotIcon size={20} />
                <h3 className="font-medium">SoftSell Assistant</h3>
              </div>
              <button 
                onClick={closeChat}
                className="hover:bg-teal-600 rounded-full p-1 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 ${message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                >
                  <div className={`
                    max-w-[80%] rounded-lg p-3 
                    ${message.role === 'user' 
                      ? 'bg-teal-500 text-white rounded-tr-none' 
                      : darkMode 
                        ? 'bg-gray-700 text-gray-100 rounded-tl-none shadow-sm border border-gray-600' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'}
                  `}>
                    <div className="flex items-center space-x-2 mb-1">
                      {message.role === 'user' ? (
                        <>
                          <span className="text-xs font-medium">You</span>
                          <UserIcon size={12} />
                        </>
                      ) : (
                        <>
                          <BotIcon size={12} />
                          <span className="text-xs font-medium">Assistant</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className={`rounded-lg rounded-tl-none p-3 shadow-sm ${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <Loader2 size={16} className="animate-spin text-teal-500" />
                      <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Assistant is typing...
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Invisible element for auto-scroll */}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Sample Questions - Only shown when showSuggestions is true */}
            {showSuggestions && (
              <div className={`p-2 border-t ${
                darkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <p className={`text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSampleQuestion(question)}
                      className={`text-xs px-2 py-1 rounded-full truncate max-w-full transition-colors cursor-pointer ${
                        darkMode
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat Input */}
            <div className={`p-3 border-t ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'border-gray-300 text-gray-800'
                  }`}
                />
                <button
                  onClick={handleSend}
                  disabled={input.trim() === '' || isLoading}
                  className={`rounded-full p-2 ${
                    input.trim() === '' || isLoading
                      ? darkMode
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600 cursor-pointer'
                  } transition-colors`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 