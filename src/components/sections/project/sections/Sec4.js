"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Sec4() {
  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 bg-gray-100">
      <div className="bg-[url('/project_img/bg_project.jpg')] bg-cover bg-center bg-no-repeat h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative mx-auto max-w-[1500px] rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content - Left Side */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
                  ส่งโครงการระดมทุนกับมูลนิธิพระมหาไถ่
                </h2>
                <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  ไม่ว่าคุณจะเป็นใคร ขอแค่คุณมีโครงการที่ต้องการเปลี่ยนแปลงสังคมให้ดีขึ้น คุณก็สามารถเสนอโครงการเข้ามาได้ผ่านฟอร์มออนไลน์ของเรา
                </p>
                <Link href="/submit-project" className="mt-4 sm:mt-6 inline-block">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-bold px-5 sm:px-6 py-2.5 sm:py-3 text-white bg-blue-600 hover:bg-blue-700 text-sm sm:text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6">
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                    <span>ส่งโครงการ</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image - Right Side (hidden on mobile) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden md:flex justify-center items-center relative h-full"
              >
                <div className="animate-balloon absolute right-0 xl:right-10 top-1/2 -translate-y-1/2">
                  <Image
                    src="/project_img/logo.jpg"
                    alt="project submission"
                    width={200}
                    height={400}
                    className="w-36 lg:w-44 xl:w-52 rounded-full shadow-xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes balloon {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }
        .animate-balloon {
          animation: balloon 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Sec4;