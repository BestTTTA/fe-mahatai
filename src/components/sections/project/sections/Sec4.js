"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Sec4() {
  return (
    <section className="relative w-full overflow-hidden py-10 px-4 bg-gray-100">
      <div className="bg-[url('/project_img/bg-submission-no-round.svg')] bg-cover bg-center bg-no-repeat h-[350px] md:h-[400px] relative mx-auto max-w-[1500px] rounded-3xl">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">
                ส่งโครงการระดมทุนกับเทใจ
              </h2>
              <p className="text-gray-700 mt-2 text-xs xs:text-sm sm:text-base lg:text-lg leading-tight">
                ไม่ว่าคุณจะเป็นใคร ขอแค่คุณมีโครงการที่ต้องการเปลี่ยนแปลงสังคมให้ดีขึ้น คุณก็สามารถเสนอโครงการเข้ามาได้ผ่านฟอร์มออนไลน์ของเรา
              </p>
              <Link href="/submit-project" className="mt-3 inline-block">
                <button className="inline-flex items-center justify-center gap-1 xs:gap-1.5 rounded-lg font-bold px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 text-white bg-blue-600 hover:bg-blue-700 text-xs xs:text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 xs:h-5 xs:w-5">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                  <span>ส่งโครงการ</span>
                </button>
              </Link>
            </div>
          </div>
          
          <div className="absolute right-2 md:right-16 lg:right-32 top-1/4 md:top-1/10">
            <div className="animate-balloon">
              <Image
                src="/project_img/taejai-balloon.svg"
                alt="project submission"
                width={180}
                height={360}
                className="w-28 md:w-36 lg:w-44"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes balloon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
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