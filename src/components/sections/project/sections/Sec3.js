"use client";

import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function Sec3() {
  const results = [
    {
      title: 'มูลนิธิฯ ให้การต้อนรับ นักศึกษาโครงการฝึกอบรมหลักสูตร “ข้าราชการท้องถิ่นระดับชำนาญการพิเศษ” รุ่นที่ 21',
      type: 'รายงานปิดโครงการ',
      image: '/images/donation-result-1.jpg',
      link: '/th/project/saveturtle/timeline'
    },
    {
      title: 'ต้อนรับคณะศึกษาดูงาน อาจารย์และนักศึกษาจากมหาวิทยาลัยแม่โจ้',
      type: 'รายงานผลกิจกรรม',
      image: '/images/donation-result-2.jpg',
      link: '/th/project/airpurifier/timeline'
    },
    {
      title: 'Meatstuffpattaya ร่วมแบ่งปันให้กับมูลนิธิฯ',
      type: 'รายงานปิดโครงการ',
      image: '/images/donation-result-3.jpg',
      link: '/th/project/getandgive/timeline'
    },
    {
      title: 'บริษัท บุญรอด ซัพพลายเชน จำกัด หารือถึงแนวทางความร่วมมือในการส่งเสริมการจ้างงานคนพิการ',
      type: 'รายงานผลกิจกรรม',
      image: '/images/donation-result-4.jpg',
      link: '/th/project/cleanwater/timeline'
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={sectionRef} className="bg-layout-default py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8 md:space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 mb-2 sm:mb-3">
            ผลลัพธ์จากการร่วมบริจาคของทุกคน
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            เงินที่คุณร่วมบริจาค ทำให้เกิดสิ่งดีๆเหล่านี้..
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows - show only on large screens */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center rounded-full border border-gray-200 bg-white p-1.5 hover:bg-gray-100 shadow-md" 
            disabled
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <div className="flex gap-3 sm:gap-4 md:gap-5 w-max sm:w-full">
              {results.map((result, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
                >
                  <article className="relative h-full overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow duration-300">
                    <Link href={result.link} className="flex h-full flex-col no-underline">
                      <div className="p-4 pb-0">
                        <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs sm:text-sm font-medium border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4 fill-[#FED74B]">
                            <path d="M7 22V2l10 5-10 5"></path>
                          </svg>
                          {result.type}
                        </div>
                      </div>
                      <div className="p-4 pt-2">
                        <h2 className="text-sm sm:text-base font-medium leading-snug line-clamp-2 h-[3.5em]">
                          {result.title}
                        </h2>
                        <ArrowUpRight className="absolute right-3 top-4 h-4 w-4 stroke-blue-500" />
                      </div>
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </article>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center rounded-full border border-gray-200 bg-white p-1.5 hover:bg-gray-100 shadow-md"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center pt-4 sm:pt-6"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/donation-results" 
              className="text-blue-500 flex items-center gap-1.5 text-sm sm:text-base hover:underline"
            >
              ดูโครงการที่ปิดระดมทุน
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sec3;