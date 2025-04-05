"use client";
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projectCards } from '../BoxProject';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

function Sec1() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    breakpoints: {
      '(max-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 768px)': { slidesToScroll: 3 },
      '(min-width: 1024px)': { slidesToScroll: 4 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const calculateProgress = (amount, target) => {
    const cleanAmount = parseFloat(amount.replace(/[,฿]/g, ''));
    const cleanTarget = parseFloat(target.replace(/[,฿]/g, ''));
    return Math.min(100, (cleanAmount / cleanTarget * 100).toFixed(1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-[url('/project_img/bg_sec1.jpeg')] bg-cover bg-center bg-no-repeat w-full h-full py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6"
    >
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 sm:mb-3 md:mb-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
            โครงการที่ <span className="text-blue-500">คุณน่าจะสนใจ</span>
          </h2>
          <img 
            src="/project_img/logo-transparent.png" 
            alt="Cat" 
            className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 sm:ml-4 mt-2 sm:mt-0" 
          />
        </motion.div>

        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 px-2"
        >
          เลือกสิ่งที่คุณสนใจและการกุศลที่คุณสนใจ...เมี๊ยว
        </motion.p>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="embla relative px-2 sm:px-4"
        >
          {prevBtnEnabled && (
            <div className="absolute left-0 top-0 z-40 bottom-0 w-6 sm:w-8 md:w-10 lg:w-12 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          )}
          {nextBtnEnabled && (
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-10 lg:w-12 z-40 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
          )}

          {prevBtnEnabled && (
            <button
              onClick={scrollPrev}
              className={`absolute ${isMobile ? '-left-1' : '-left-2 sm:-left-3 md:-left-4'} top-1/2 -translate-y-1/2 z-50 rounded-full border border-black bg-white p-0.5 sm:p-1 hover:bg-gray-100`}
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black" />
            </button>
          )}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 sm:gap-4">
              {projectCards.map((project, index) => (
                <div key={index} className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_32%] lg:flex-[0_0_24%]">
                  <article className="isolate flex min-h-[20rem] sm:min-h-[22rem] md:min-h-[23.75rem] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white w-full">
                    <div className="relative">
                      <a href={project.link} className="cursor-pointer">
                        <div className="relative overflow-hidden m-0 rounded-t-lg" style={{ paddingBottom: '66.6667%' }}>
                          <img
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute left-0 top-0 m-0 w-full h-full object-cover"
                            src={project.image}
                            style={{ color: 'transparent' }}
                          />
                        </div>
                      </a>
                      {project.category && (
                        <div className="absolute left-2 sm:left-3 top-1 sm:top-2 flex space-x-1 sm:space-x-2 [transform:translateZ(0)]">
                          <div 
                            className="inline-flex items-center rounded-full px-2 sm:px-3 py-0.5 sm:py-1 font-anuphan text-xs font-bold text-gray-800"
                            style={{ backgroundColor: project.categoryColor }}
                          >
                            {project.category}
                          </div>
                          {project.badge && (
                            <div className="rounded-full bg-[#191919]/60 px-1 sm:px-1.5 py-0.5 sm:py-1 font-anuphan text-xs font-bold text-[#D1D5DB]">
                              {project.badge}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="z-10 -mt-5 flex grow flex-col justify-between space-y-4 sm:space-y-6 md:space-y-8 rounded-t-3xl bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.1)] sm:shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                      <div className="relative">
                        <h2 className="m-0 px-3 sm:px-4 pt-3 sm:pt-4 font-noto-sans-thai-looped text-sm sm:text-base font-medium">
                          <a 
                            className="cursor-pointer line-clamp-2 rounded py-0.5 leading-snug text-default underline decoration-blue-500/0 decoration-2 underline-offset-2 transition duration-500 ease-in-out hover:text-black hover:underline hover:decoration-black"
                            href={project.link}
                          >
                            {project.title}
                          </a>
                        </h2>
                      </div>

                      <div className="flex items-end justify-between space-x-3 sm:space-x-4 px-3 sm:px-4 pb-3 sm:pb-4">
                        <div className="flex-1">
                          <div className="space-y-1 sm:space-y-2">
                            <div className="inline-flex flex-col items-start justify-center">
                              <div className="whitespace-nowrap font-anuphan text-xs text-gray-500">
                                {project.currentLabel || 'ยอดบริจาคปัจจุบัน'}
                              </div>
                              <div className="space-x-1">
                                <span className="text-base sm:text-lg font-semibold text-black">{project.amount}</span>
                                <span className="font-anuphan text-xs text-gray-500">บาท</span>
                              </div>
                            </div>

                            {project.target && (
                              <>
                                <div className="h-1 sm:h-1.5 overflow-hidden rounded-lg bg-blue-100">
                                  <div
                                    className="h-full rounded-lg bg-blue-500"
                                    style={{
                                      width: `${calculateProgress(project.amount, project.target)}%`
                                    }}
                                  ></div>
                                </div>
                                <div className="relative">
                                  <div className="flex items-center group relative">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
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
                                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-xs text-gray-600 px-2 py-1 rounded-md shadow-md border border-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50">
                                      เป้าหมาย
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 min-w-[100px]">
                          <a 
                            id={`btn_donation_${project.id}`}
                            className="cursor-pointer inline-flex items-center justify-center gap-1 rounded-lg font-anuphan font-bold no-underline px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white hover:text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-full"
                            href={`${project.link}/checkout`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            <span>บริจาค</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {nextBtnEnabled && (
            <button
              onClick={scrollNext}
              className={`absolute ${isMobile ? '-right-1' : '-right-2 sm:-right-3 md:right-0'} top-1/2 -translate-y-1/2 z-50 rounded-full border border-black bg-white p-0.5 sm:p-1 hover:bg-gray-100`}
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black" />
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Sec1;