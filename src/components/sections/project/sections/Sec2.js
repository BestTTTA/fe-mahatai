"use client";

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ProjectFilter from '../ProjectFilter';
import { projectCards } from '../BoxProject';

function Sec2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    'หมวดหมู่': [],
    'ผลตอบแทน': [],
    'สถานะโครงการ': [],
    'เรียงตาม': []
  });
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setProjects(projectCards);
    setFilteredProjects(projectCards); // Show all projects initially
  }, []);

  const filters = [
    { 
      name: 'หมวดหมู่', 
      options: ['เด็กและเยาวชน', 'ผู้สูงอายุ', 'สัตว์', 'สิ่งแวดล้อม/ธรรมชาติ', 'คนชายขอบ/คนไร้สัญชาติ', 'ผู้ป่วย/ผู้พิการ', 'ผู้ประสบภัยพิบัติ', 'อื่นๆ'] 
    },
    { 
      name: 'ผลตอบแทน', 
      options: ['เทรนด์มาแรง', 'ใกล้ปิด', 'รายเดือน', 'โครงการใหม่', 'ใกล้ถึงเป้าหมาย'] 
    },
    { 
      name: 'สถานะโครงการ', 
      options: ['กำลังระดมทุน', 'ปิดระดมทุน', 'ถึงเป้าหมายแล้ว', 'ดำเนินโครงการเรียบร้อย'] 
    },
    { 
      name: 'เรียงตาม', 
      options: ['ยอดบริจาคมากไปน้อย', 'ยอดบริจาคน้อยไปมาก', 'เป้าหมายระดมทุนน้อยไปมาก', 'เป้าหมายระดมทุนมากไปน้อย'] 
    },
  ];

  const openModal = (filterName) => {
    setActiveModal(filterName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSelectOption = (filterName, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [filterName]: [option]
    }));
  };

  const applyFilter = () => {
    let filtered = [...projects];

    // If no filters are selected and no search term, show all projects
    if (!Object.values(selectedOptions).some(arr => arr.length > 0) && !searchTerm) {
      setFilteredProjects(projects);
      closeModal();
      return;
    }

    // Apply category filter
    if (selectedOptions['หมวดหมู่'].length > 0) {
      filtered = filtered.filter(project => 
        selectedOptions['หมวดหมู่'].includes(project.category)
      );
    }

    // Apply status filter
    if (selectedOptions['สถานะโครงการ'].length > 0) {
      filtered = filtered.filter(project => 
        selectedOptions['สถานะโครงการ'].includes(project.status)
      );
    }

    // Apply reward filter
    if (selectedOptions['ผลตอบแทน'].length > 0) {
      filtered = filtered.filter(project => 
        selectedOptions['ผลตอบแทน'].includes(project.reward)
      );
    }

    // Apply sorting
    if (selectedOptions['เรียงตาม'].length > 0) {
      const sortOption = selectedOptions['เรียงตาม'][0];
      filtered.sort((a, b) => {
        const amountA = parseInt(a.amount.replace(/,/g, ''));
        const amountB = parseInt(b.amount.replace(/,/g, ''));
        const targetA = parseInt(a.target.replace(/,/g, ''));
        const targetB = parseInt(b.target.replace(/,/g, ''));

        switch(sortOption) {
          case 'ยอดบริจาคมากไปน้อย':
            return amountB - amountA;
          case 'ยอดบริจาคน้อยไปมาก':
            return amountA - amountB;
          case 'เป้าหมายระดมทุนน้อยไปมาก':
            return targetA - targetB;
          case 'เป้าหมายระดมทุนมากไปน้อย':
            return targetB - targetA;
          default:
            return 0;
        }
      });
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
    closeModal();
  };

  // Apply filters whenever search term or selected options change
  useEffect(() => {
    applyFilter();
  }, [searchTerm, selectedOptions]);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          ค้นหาโครงการ
        </h2>
        
        {/* Search Input */}
        <div className="relative mb-6 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="พิมพ์คำค้นหา"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
            onClick={applyFilter}
          >
            <Search size={20} />
          </button>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 relative">
          <button 
            className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={toggleFilterMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
          
          {/* Horizontal filter buttons */}
          {!isFilterMenuOpen && filters.map((filter, index) => (
            <div key={index} className="relative">
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  activeModal === filter.name || selectedOptions[filter.name]?.length > 0 
                    ? 'bg-blue-100 border-blue-300' 
                    : 'bg-white border-gray-300'
                }`}
                onClick={() => openModal(filter.name)}
              >
                {filter.name}
                <ChevronDown size={16} />
              </button>
            </div>
          ))}
          
          {/* Vertical filter menu */}
          {isFilterMenuOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50 w-64">
              {filters.map((filter, index) => (
                <button 
                  key={index}
                  className={`flex items-center justify-between w-full px-4 py-3 text-left border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${
                    selectedOptions[filter.name]?.length > 0 
                      ? 'bg-blue-50' 
                      : ''
                  }`}
                  onClick={() => {
                    openModal(filter.name);
                    setIsFilterMenuOpen(false);
                  }}
                >
                  <span>{filter.name}</span>
                  <ChevronDown size={16} />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Filter Modals */}
        {filters.map((filter, index) => (
          <ProjectFilter
            key={index}
            isOpen={activeModal === filter.name}
            onClose={closeModal}
            title={filter.name}
            options={filter.options}
            selectedOptions={selectedOptions[filter.name] || []}
            onSelectOption={(option) => handleSelectOption(filter.name, option)}
            onApplyFilter={applyFilter}
          />
        ))}
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              tag={project.tag}
              title={project.title}
              amount={project.amount}
              target={project.target}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ tag, title, amount, target }) {
  const progress = Math.min(100, (parseInt(amount.replace(/,/g, '')) / parseInt(target.replace(/,/g, '')) * 100));
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="relative">
        <img 
          src="https://via.placeholder.com/300x180" 
          alt={title}
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {tag}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-sm mb-3 line-clamp-2 h-10">{title}</h3>
        
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">ยอดบริจาคขณะนี้</span>
            <span className="font-bold">{amount} บาท</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-right mt-1 text-gray-500">
            เป้าหมาย {target} บาท
          </div>
        </div>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded w-full transition">
          บริจาค
        </button>
      </div>
    </div>
  );
}

export default Sec2;