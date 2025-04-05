import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectFilter({ isOpen, onClose, title, options, selectedOptions, onSelectOption, onApplyFilter }) {
  const handleReset = () => {
    options.forEach(option => {
      if (selectedOptions.includes(option)) {
        onSelectOption(option);
      }
    });
  };

  const isStatusFilter = title === 'สถานะโครงการ' || title === 'เรียงตาม';
  const isCategory = title === 'หมวดหมู่';

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.15
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 pointer-events-none">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl sm:rounded-lg w-full max-w-sm sm:max-w-md mx-auto shadow-xl pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800">
                  {title}
                </h3>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 p-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* Content */}
              <div className="overflow-y-auto flex-1 p-4">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  className={isCategory ? "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3" : "flex flex-col gap-2 sm:gap-3"}
                >
                  {options.map((option, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ delay: index * 0.03 }}
                      className={isStatusFilter ? "flex items-center" : "flex items-start"}
                    >
                      <motion.input
                        whileTap={{ scale: 0.95 }}
                        type={isStatusFilter ? "radio" : "checkbox"}
                        id={`${title}-${index}`}
                        name={title}
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => onSelectOption(option)}
                        className={`mt-0.5 ${isStatusFilter ? 
                          'w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500' : 
                          'w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500'}`}
                      />
                      <label 
                        htmlFor={`${title}-${index}`} 
                        className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700 leading-tight"
                      >
                        {option}
                      </label>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between p-4 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleReset}
                  className="text-blue-500 hover:text-blue-600 px-4 py-2 text-sm sm:text-base font-medium"
                >
                  รีเซ็ต
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    onApplyFilter();
                    onClose();
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm sm:text-base font-medium shadow-sm"
                >
                  ดูโครงการ
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectFilter;