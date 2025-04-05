import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // Reduced debounce time for better responsiveness

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Trigger search when debounced term changes
  useEffect(() => {
    if (typeof onSearch === 'function') {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative mb-4 sm:mb-6 w-full max-w-2xl mx-auto px-3 sm:px-4"
    >
      <div className={`flex items-center w-full border ${isFocused ? 'border-blue-500' : 'border-gray-300'} rounded-lg overflow-hidden shadow-sm transition-all duration-200`}>
        <input
          type="text"
          placeholder="ค้นหาโครงการ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-2.5 sm:py-3 px-4 focus:outline-none text-sm sm:text-base placeholder-gray-400"
          aria-label="ค้นหาโครงการ"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 sm:px-4 py-2 sm:py-3 text-gray-500 hover:text-blue-600 bg-gray-50 hover:bg-gray-100 transition-colors"
          onClick={() => onSearch(searchTerm)}
          aria-label="ค้นหา"
        >
          <Search size={20} className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Mobile search hint */}
      <p className="text-xs text-gray-500 mt-1 text-center sm:hidden">
        กด Enter หรือไอคอนค้นหาเพื่อค้นหา
      </p>
    </motion.div>
  );
}

export default ProjectSearch;