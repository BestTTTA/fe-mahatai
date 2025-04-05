"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';
import ProjectFilter from '../ProjectFilter';
import { projectCards } from '../BoxProject';
import ProjectSearch from '../ProjectSearch';
import { motion, AnimatePresence } from 'framer-motion';

function Sec2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    'หมวดหมู่': [],
    'ผลตอบแทน': [],
    'สถานะโครงการ': ['กำลังระดมทุน'],
    'เรียงตาม': []
  });
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 640) {
        setVisibleProjects(4);
      } else if (window.innerWidth < 1024) {
        setVisibleProjects(6);
      } else {
        setVisibleProjects(8);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + (isMobile ? 4 : 8));
  };

  const filters = [
    {
      name: 'หมวดหมู่',
      options: ['เด็กและเยาวชน', 'ผู้สูงอายุ', 'สัตว์', 'สิ่งแวดล้อม/ธรรมชาติ', 'คนชายขอบ/คนไร้สัญชาติ', 'ผู้ป่วย ผู้พิการ', 'ผู้ประสบภัยพิบัติ', 'อื่นๆ']
    },
    {
      name: 'คอลเลคชั่น',
      options: ['เก่าแต่เข้า', 'ใกล้เวลาปิด', 'โครงการใหม่', 'ใกล้ถึงเป้าหมาย', 'รายเดือน']
    },
    {
      name: 'สถานะโครงการ',
      options: ['กำลังระดมทุน', 'ปิดระดมทุน', 'สิ้นเป้าหมายแล้ว', 'ดำเนินโครงการเรียบร้อย']
    },
    {
      name: 'เรียงตาม',
      options: ['ยอดบริจาคล่าสุด', 'ยอดบริจาคสูงสุด']
    }
  ];

  const openModal = (filterName) => {
    setActiveModal(filterName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSelectOption = (filterName, option) => {
    setSelectedOptions(prev => {
      if (filterName === 'สถานะโครงการ' || filterName === 'เรียงตาม') {
        return {
          ...prev,
          [filterName]: [option]
        };
      }
      
      if (option === 'ทั้งหมด') {
        return {
          ...prev,
          [filterName]: []
        };
      }

      const currentOptions = prev[filterName] || [];
      
      if (currentOptions.includes(option)) {
        return {
          ...prev,
          [filterName]: currentOptions.filter(item => item !== option)
        };
      }
      
      return {
        ...prev,
        [filterName]: [...currentOptions, option]
      };
    });
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const applyFilter = () => {
    let filtered = [...projects];
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    Object.entries(selectedOptions).forEach(([filterName, options]) => {
      if (options.length > 0 && !options.includes('ทั้งหมด')) {
        if (filterName === 'หมวดหมู่') {
          filtered = filtered.filter(project => options.includes(project.tag));
        } else if (filterName === 'สถานะโครงการ') {
          filtered = filtered.filter(project => options.includes(project.status));
        }
      }
    });
    
    const sortOption = selectedOptions['เรียงตาม'][0];
    if (sortOption && sortOption !== 'ทั้งหมด') {
      if (sortOption === 'ยอดบริจาคสูงสุด') {
        filtered.sort((a, b) => {
          const amountA = parseFloat(a.amount.replace(/[,฿]/g, ''));
          const amountB = parseFloat(b.amount.replace(/[,฿]/g, ''));
          return amountB - amountA;
        });
      }
    }
    
    setFilteredProjects(filtered);
    setVisibleProjects(isMobile ? 4 : 8);
  };

  useEffect(() => {
    setProjects(projectCards);
    setFilteredProjects(projectCards);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [searchTerm, selectedOptions, projects]);

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full text-center mb-4 sm:mb-6 md:mb-8 px-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
            ค้นหาโครงการ
          </h2>
        </motion.div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-4 sm:mb-6 px-2">
          <ProjectSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Filter Buttons */}
        <div className="w-full flex flex-col items-center mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center text-gray-500 gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-colors ${
                isFilterMenuOpen ? 'bg-blue-100 border border-blue-300' : 'bg-gray-100/50 border border-gray-200'
              } w-full sm:w-auto`}
              onClick={toggleFilterMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </motion.button>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              {filters.map((filter, index) => (
                <motion.div key={index} whileTap={{ scale: 0.95 }}>
                  <button
                    className={`flex items-center text-gray-500 gap-1 sm:gap-2 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base transition-colors ${
                      activeModal === filter.name || selectedOptions[filter.name]?.length > 0
                        ? 'bg-blue-100 border border-blue-300'
                        : 'bg-gray-100/50 border border-gray-200'
                    }`}
                    onClick={() => openModal(filter.name)}
                  >
                    {filter.name}
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center py-12"
          >
            <div className="text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">ไม่พบโครงการที่ตรงกับเงื่อนไขการค้นหา</h3>
            <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองดูนะคะ</p>
          </motion.div>
        ) : (
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 justify-items-center mt-4 sm:mt-6 md:mt-8 px-2 sm:px-0"
            >
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full max-w-xs"
                >
                  <ProjectCard project={project} isMobile={isMobile} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length > visibleProjects && (
              <div className="flex justify-center mt-6 sm:mt-8 mb-4 sm:mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 text-sm sm:text-base"
                  onClick={loadMoreProjects}
                >
                  <span>ดูเพิ่มเติม</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.button>
              </div>
            )}
          </div>
        )}

        {/* Filter Modals */}
        <AnimatePresence>
          {isFilterMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            >
              <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
                onClick={() => setIsFilterMenuOpen(false)}
              ></div>
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-lg w-full max-w-md mx-auto relative z-50 flex flex-col max-h-[90vh] overflow-y-auto shadow-xl"
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsFilterMenuOpen(false)}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                
                <div className="p-4 overflow-y-auto">
                  {filters.map((filter, index) => (
                    <div key={index} className="mb-4 sm:mb-6">
                      <h4 className="font-medium mb-2 sm:mb-3">{filter.name}</h4>
                      {filter.name === 'สถานะโครงการ' || filter.name === 'เรียงตาม' ? (
                        <div className="flex flex-col space-y-2 sm:space-y-3">
                          {filter.options.map((option, optIndex) => (
                            <div key={optIndex} className="flex items-center">
                              <input
                                type="radio"
                                id={`all-${filter.name}-${optIndex}`}
                                name={filter.name}
                                value={option}
                                checked={selectedOptions[filter.name]?.includes(option)}
                                onChange={() => handleSelectOption(filter.name, option)}
                                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                              />
                              <label htmlFor={`all-${filter.name}-${optIndex}`} className="ml-2 text-sm font-medium text-gray-700">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={filter.name === 'หมวดหมู่' ? "grid grid-cols-2 gap-2 sm:gap-3" : "flex flex-col space-y-2 sm:space-y-3"}>
                          {filter.options.map((option, optIndex) => (
                            <div key={optIndex} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`all-${filter.name}-${optIndex}`}
                                value={option}
                                checked={selectedOptions[filter.name]?.includes(option)}
                                onChange={() => handleSelectOption(filter.name, option)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                              />
                              <label htmlFor={`all-${filter.name}-${optIndex}`} className="ml-2 text-sm font-medium text-gray-700">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between p-4 border-t border-gray-200">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 font-medium px-4 py-2"
                    onClick={() => {
                      setSelectedOptions({
                        'หมวดหมู่': [],
                        'คอลเลคชั่น': [],
                        'สถานะโครงการ': [],
                        'เรียงตาม': []
                      });
                    }}
                  >
                    รีเซ็ต
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium"
                    onClick={() => {
                      applyFilter();
                      setIsFilterMenuOpen(false);
                    }}
                  >
                    ดูโครงการ
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
      </div>
    </div>
  );
}

function ProjectCard({ project, isMobile }) {
  const progress = Math.min(
    100,
    (parseFloat(project.amount.replace(/[,฿]/g, '')) / 
    parseFloat(project.target.replace(/[,฿]/g, '')) * 100)
  );

  return (
    <article className="mx-auto flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full w-full">
      <div className="relative">
        <a href={project.link} className="cursor-pointer block">
          <div className="relative overflow-hidden m-0 rounded-t-lg" style={{ paddingBottom: '66.6667%' }}>
            <img
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute left-0 top-0 w-full h-full object-cover"
              src={project.image}
              style={{ color: 'transparent' }}
            />
          </div>
        </a>
        {project.category && (
          <div className="absolute left-2 top-2 flex space-x-1 sm:space-x-2">
            <div 
              className="inline-flex items-center rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold text-gray-800"
              style={{ backgroundColor: project.categoryColor || '#93c5fd' }}
            >
              {project.category}
            </div>
            {project.badge && (
              <div className="rounded-full bg-[#191919]/60 px-1.5 py-0.5 sm:py-1 text-xs font-bold text-[#D1D5DB]">
                {project.badge}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-grow p-3 sm:p-4">
        <div>
          <h2 className="m-0 font-medium text-sm sm:text-base line-clamp-2 mb-2 sm:mb-3">
            <a 
              className="cursor-pointer hover:text-blue-600 transition-colors"
              href={project.link}
            >
              {project.title}
            </a>
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="inline-flex flex-col">
            <div className="whitespace-nowrap text-xs text-gray-500">
              {project.currentLabel || 'ยอดบริจาคปัจจุบัน'}
            </div>
            <div className="space-x-1">
              <span className="text-base sm:text-lg font-semibold text-black">{project.amount}</span>
              <span className="text-xs text-gray-500">บาท</span>
            </div>
          </div>

          {project.target && (
            <>
              <div className="h-1.5 sm:h-2 overflow-hidden rounded-lg bg-blue-100">
                <div
                  className="h-full rounded-lg bg-blue-500"
                  style={{
                    width: `${progress.toFixed(1)}%`
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black mr-1"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line>
                </svg>
                <span className="text-black text-xs">{project.target}</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-3 sm:mt-4">
          <a 
            id={`btn_donation_${project.id}`}
            className="cursor-pointer inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg font-bold no-underline px-4 py-2 text-white hover:text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-full text-xs sm:text-sm"
            href={`${project.link}/checkout`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span>บริจาค</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Sec2;