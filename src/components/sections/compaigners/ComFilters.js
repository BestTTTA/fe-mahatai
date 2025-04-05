import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function ComFilters({ onApplyFilters }) {
  const [activeModal, setActiveModal] = useState(null);
  const [isAllFilterModalOpen, setIsAllFilterModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    'หมวดหมู่': [],
    'ตำแหน่งที่ตั้ง': [],
    'เป้าหมาย SDGs': [],
    'ตัวกรอง': []
  });

  const filters = [
    {
      name: 'หมวดหมู่',
      options: [
        'เด็กและเยาวชน', 'ผู้สูงอายุ', 'ผู้ป่วย', 'ผู้พิการ', 'ผู้หญิง', 'LGBTQ',
        'คนชายขอบ', 'ผู้ประสบภัยพิบัติ', 'ชุมชน', 'เกษตรกร', 'สิ่งแวดล้อม', 'สัตว์',
        'ศิลปวัฒนธรรม', 'หน่วยงาน', 'อื่นๆ'
      ]
    },
    {
      name: 'ตำแหน่งที่ตั้ง',
      options: [
        'ไม่มีที่อยู่ (1)', 'สมุทรปราการ (2)', 'ระยอง (1)', 'ขอนแก่น (1)', 'สกลนคร (1)', 'แพร่ (1)',
        'พะเยา (1)', 'แม่ฮ่องสอน (3)', 'พิษณุโลก (1)', 'ประจวบคีรีขันธ์ (1)', 'ปัตตานี (1)',
        'กรุงเทพมหานคร (50)', 'นนทบุรี (2)', 'อุบลราชธานี (1)', 'ร้อยเอ็ด (1)', 'เชียงใหม่ (14)',
        'น่าน (1)', 'เชียงราย (3)', 'ตาก (1)', 'นครปฐม (1)', 'ชุมพร (1)', 'ยะลา (1)'
      ]
    },
    {
      name: 'เป้าหมาย SDGs',
      options: [
        { text: 'SDG 1 : ขจัดความยากจน', icon: '/goal1.png' },
        { text: 'SDG 2 : ขจัดความอดอยาก สร้างความมั่นคงทางอาหาร', icon: '/goal2.png' },
        { text: 'SDG 3 : ส่งเสริมสุขภาพและ ความเป็นอยู่ที่ดี', icon: '/goal3.png' },
        { text: 'SDG 4 : ส่งเสริมโอกาสในการเรียนรู้ สร้างการศึกษาที่มีคุณภาพและ เท่าเทียม', icon: '/goal4.png' },
        { text: 'SDG 5 : สร้างความเท่าเทียม ทางเพศ', icon: '/goal5.png' },
        { text: 'SDG 6 : ให้ทุกคนเข้าถึงพลังงานที่ยั่งยืน ได้ตามกำลังของตน', icon: '/goal6.png' },
        { text: 'SDG 7 : ให้ทุกคนเข้าถึงพลังงาน ที่ยั่งยืนได้ตามกำลังของตน', icon: '/goal7.png' },
      ]
    },
    {
      name: 'ตัวกรอง',
      options: ['เฉพาะองค์กรที่มีโครงการ']
    },
  ];

  const openModal = (name) => {
    setIsAllFilterModalOpen(false);
    setActiveModal((prev) => (prev === name ? null : name));
  };

  const handleSelectOption = (filterName, option) => {
    setSelectedOptions((prev) => {
      const isAlreadySelected = prev[filterName]?.some(item =>
        typeof item === 'string'
          ? item === option
          : typeof option === 'string'
            ? item.text === option
            : item.text === option.text
      );

      const updatedOptions = isAlreadySelected
        ? prev[filterName].filter(item =>
          typeof item === 'string'
            ? item !== option
            : typeof option === 'string'
              ? item.text !== option
              : item.text !== option.text
        )
        : [...(prev[filterName] || []), option];

      const newSelectedOptions = {
        ...prev,
        [filterName]: updatedOptions,
      };

      // ทำการ apply filters ทันทีเมื่อมีการเลือก
      onApplyFilters?.(newSelectedOptions);

      return newSelectedOptions;
    });
  };

  // ฟังก์ชันสำหรับแสดงจำนวนที่เลือกในแต่ละหมวด
  const getSelectedCountLabel = (filterName) => {
    const count = selectedOptions[filterName]?.length || 0;
    return count > 0 ? ` (${count})` : '';
  };

  // ฟังก์ชันสำหรับเคลียร์ตัวกรองในหมวดนั้นๆ
  const resetFilter = (filterName) => {
    setSelectedOptions(prev => {
      const newSelectedOptions = {
        ...prev,
        [filterName]: []
      };

      onApplyFilters?.(newSelectedOptions);

      return newSelectedOptions;
    });
  };

  // ฟังก์ชันสำหรับแสดงผลการเลือกตัวกรอง
  const showFilterSummary = () => {
    const isAnySelected = Object.values(selectedOptions).some(values => values.length > 0);
    if (!isAnySelected) {
      alert('ยังไม่ได้เลือกตัวกรองใด ๆ');
      return;
    }

    setIsSummaryModalOpen(true);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {/* ปุ่ม Filter รวม (icon ซ้ายสุด) */}
      <button
        className="inline-flex items-center justify-center rounded-lg border border-black bg-white p-2 w-[40px] h-[40px]"
        onClick={() => setIsAllFilterModalOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
        >
          <line x1="21" x2="14" y1="4" y2="4" />
          <line x1="10" x2="3" y1="4" y2="4" />
          <line x1="21" x2="14" y1="12" y2="12" />
          <line x1="10" x2="3" y1="12" y2="12" />
          <line x1="8" x2="3" y1="20" y2="20" />
          <line x1="21" x2="16" y1="20" y2="20" />
          <line x1="14" x2="14" y1="2" y2="6" />
          <line x1="8" x2="8" y1="12" y2="14" />
          <line x1="16" x2="16" y1="18" y2="22" />
        </svg>
      </button>

      {/* ปุ่ม 4 ตัวกรอง: หมวดหมู่, ตำแหน่ง, SDGs, ตัวกรอง */}
      {filters.map((filter, index) => {
        const isActive = activeModal === filter.name;
        const isSelected = selectedOptions[filter.name]?.length > 0;

        return (
          <div key={index} className="relative inline-block">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-[20px] border transition-colors duration-200
          ${isActive || isSelected
                  ? 'bg-[#E6E9FF] text-black border-transparent'
                  : 'bg-white text-gray-500 border-gray-100 hover:bg-[#E6E9FF] hover:text-black'}`}
              onClick={() => openModal(filter.name)}
            >
              {filter.name}{getSelectedCountLabel(filter.name)}
              <ChevronDown size={16} />
            </button>

            {/* ✅ Modal แยกของแต่ละปุ่ม (แสดงเมื่อ activeModal === filter.name) */}
            {isActive && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{filter.name}</h2>
                    <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600">✕</button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-base">
                    {filter.options.map((option, idx) => {
                      const isChecked = selectedOptions[filter.name]?.some(item =>
                        typeof item === 'string'
                          ? item === option
                          : typeof option === 'string'
                            ? item.text === option
                            : item.text === option.text
                      );

                      const labelText = typeof option === 'string' ? option : option.text;

                      return (
                        <label
                          key={idx}
                          className="flex items-center space-x-3 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleSelectOption(filter.name, option)}
                            className="hidden peer"
                          />
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
            peer-checked:bg-[#F7941D] peer-checked:border-[#F7941D]
            bg-white border-gray-300`}
                          >
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span>{labelText}</span>
                        </label>
                      );
                    })}
                  </div>


                  <div className="mt-6 flex justify-between items-center">
                    <button onClick={() => resetFilter(filter.name)} className="text-orange-400 text-sm hover:underline">รีเซ็ต</button>
                    <button onClick={() => setActiveModal(null)} className="bg-[#F7941D] text-white px-4 py-2 rounded hover:bg-[#E55A10]">
                      ดูองค์กร
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* ✅ Modal รวม — ย้ายมานอก .map() เพื่อไม่บัง modal ย่อย */}
      {isAllFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl">
            <div className="p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">ค้นหาองค์กร</h2>
                <button onClick={() => setIsAllFilterModalOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>

              {filters.map((filter, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-md font-bold mb-2">{filter.name}</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[16px]">
                    {filter.options.map((option, idx) => {
                      const isChecked = selectedOptions[filter.name]?.some(item =>
                        typeof item === 'string' ? item === option : item.text === option.text
                      );

                      return (
                        <label
                          key={idx}
                          className="flex items-center space-x-3 cursor-pointer select-none"
                          onClick={() => handleSelectOption(filter.name, option)}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition
                      ${isChecked ? 'bg-[#FF6F21] border-[#FF6F21]' : 'bg-white border-gray-300'}`}
                          >
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span>{typeof option === 'string' ? option : option.text}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => {
                    setSelectedOptions({
                      'หมวดหมู่': [],
                      'ตำแหน่งที่ตั้ง': [],
                      'เป้าหมาย SDGs': [],
                      'ตัวกรอง': []
                    });
                    onApplyFilters?.({});
                    setIsAllFilterModalOpen(false);
                  }}
                  className="bg-[#F7941D] text-sm hover:underline"
                >
                  รีเซ็ต
                </button>
                <button onClick={() => setIsAllFilterModalOpen(false)} className="bg-[#F7941D] text-white px-4 py-2 rounded hover:bg-[#E55A10]">
                  ดูองค์กร
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}

export default ComFilters;