"use client";

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projectCards } from '../BoxProject';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function Sec1() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-[#f4f2ec] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="text-3xl font-bold text-center">
            โครงการที่ <span className="text-orange-500">คุณน่าจะสนใจ</span>
          </h2>
          <img src="/images/cat-question.png" alt="Cat" className="w-16 h-16" />
        </div>
        <p className="text-center text-sm text-gray-600 mb-6">
          เลือกสิ่งที่คุณสนใจและการกุศลที่คุณสนใจ...เมี๊ยว
        </p>

        <div className="relative">
          <div className="relative overflow-hidden">
            {/* Left gradient overlay */}
            {prevBtnEnabled && (
              <div className="absolute left-0 top-0 z-40 bottom-0 w-16 pointer-events-none bg-gradient-to-r from-[#f4f2ec] to-transparent"></div>
            )}
            
            {/* Left navigation button */}
            {prevBtnEnabled && (
              <button
                onClick={scrollPrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {projectCards.map((project, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_250px] bg-white rounded-lg shadow overflow-hidden transform transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={`project${index + 1}`}
                        className="w-full h-[140px] object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-1 line-clamp-2 h-10">{project.title}</h3>
                      <div className="mt-2 mb-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>ยอดบริจาคขณะนี้</span>
                          <span className="font-bold">{project.amount} บาท</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, (parseInt(project.amount.replace(/,/g, '')) / parseInt(project.target.replace(/,/g, '')) * 100))}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-right mt-1 text-gray-500">เป้าหมาย {project.target} บาท</div>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded w-full transition-colors duration-200">
                        บริจาค
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right navigation button */}
            {nextBtnEnabled && (
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-50 rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Right gradient overlay */}
            {nextBtnEnabled && (
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#f4f2ec] to-transparent"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
