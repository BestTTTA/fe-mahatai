"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ComBox from '../ComBox';
import ComSearchBox from '../ComSearchBox';
import ComFilters from '../ComFilters';

function Sec1() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-white py-13 px-6">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-5xl text-center text-black mb-8">
        งานด้านการจัดการศึกษา
        </h2>
         <ComSearchBox/>
         <ComFilters/>
        {/* ComBox content */}
        <ComBox/>
      </div>
    </div>
  );
}

export default Sec1;
