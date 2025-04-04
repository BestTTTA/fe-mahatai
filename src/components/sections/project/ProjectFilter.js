import React from 'react';
import { X } from 'lucide-react';

function FilterModal({ isOpen, onClose, title, options, selectedOptions, onSelectOption, onApplyFilter }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={title}
                  checked={selectedOptions.includes(option)}
                  onChange={() => onSelectOption(option)}
                  className="w-4 h-4 text-orange-500 accent-orange-500"
                />
                <label htmlFor={`option-${index}`} className="ml-2 text-sm">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between p-4 border-t">
          <button 
            onClick={onClose} 
            className="text-orange-500 font-medium"
          >
            รีเซ็ต
          </button>
          <button 
            onClick={onApplyFilter} 
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium"
          >
            ดูโครงการ
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;