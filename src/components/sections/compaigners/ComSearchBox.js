import React, { useState } from 'react';
import { Search } from 'lucide-react';

function ComSearchBox({ searchTerm = '', setSearchTerm, onSearch }) { // เพิ่ม onSearch prop
  const [isFocused, setIsFocused] = useState(false);

  const showLabel = isFocused || searchTerm.length > 0;

  const handleSearch = (e) => {
    e.preventDefault(); // ป้องกันการ refresh หน้า
    onSearch(searchTerm); // เรียกใช้ function onSearch ที่ส่งมาจาก parent
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="relative mb-6 max-w-2xl mx-auto 
    bg-white hover:bg-gray-100 focus-within:bg-gray-100 transition-colors duration-200 rounded-lg">
      {/* Floating Label */}
      <label
        className={`absolute left-4 transition-all duration-200 ease-in-out 
        ${showLabel ? 'text-xs -top-[0.1px] text-gray-600' : 'text-gray-400 top-4 text-base'}
        pointer-events-none`}
      >
        พิมพ์คำค้นหา
      </label>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        className="w-full border border-gray-300 rounded-lg py-4 px-4 pr-12 bg-transparent focus:outline-none  "
      />

      <button 
        onClick={handleSearch}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 "
      >
        <Search size={25} />
      </button>
    </div>
  );
}

export default ComSearchBox;
