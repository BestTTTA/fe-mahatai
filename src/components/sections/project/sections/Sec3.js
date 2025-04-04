"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <section className="bg-layout-default py-10 md:py-24">
      <div className="mx-auto space-y-8 lg:container xl:max-w-screen-xl">
        <div className="flex items-end justify-between py-4">
          <h2 className="mb-0 flex-1 space-y-3 px-3 text-center">
            <span className="block text-2xl font-semibold text-orange-500 md:text-4xl">
              ผลลัพธ์จากการร่วมบริจาคของทุกคน
            </span>
            <span className="block text-base font-medium text-gray-600 md:text-lg">
              เงินที่คุณร่วมบริจาค ทำให้เกิดสิ่งดีๆเหล่านี้..
            </span>
          </h2>
        </div>

        <div className="relative flex items-center">
          <button className="absolute -left-4 z-20 hidden rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100 disabled:opacity-0 lg:block" disabled>
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="embla relative">
            <div className="embla__viewport">
              <div className="embla__container flex space-x-4 px-4 lg:px-0">
                {results.map((result, index) => (
                  <div key={index} className="flex">
                    <article className="relative h-full min-w-[18rem] overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5">
                      <Link href={result.link} className="line-clamp-2 flex h-full flex-col gap-3 rounded text-gray-700 no-underline transition duration-500 ease-in-out">
                        <div className="flex grow flex-col justify-between">
                          <div className="space-y-2">
                            <div className="space-y-1.5">
                              <div className="w-fit space-x-1 rounded-3xl border bg-white px-2 py-1 font-anuphan text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-5 w-5 fill-[#FED74B] align-middle">
                                  <path d="M7 22V2l10 5-10 5"></path>
                                </svg>
                                <span> {result.type}</span>
                              </div>
                              <h2 className="line-clamp-2 h-12 font-noto-sans-thai-looped text-base font-medium leading-6">
                                {result.title}
                              </h2>
                              <ArrowUpRight className="absolute right-2 top-1 stroke-orange-500" />
                            </div>
                            <div className="space-y-3">
                              <div className="relative">
                                <div className="relative overflow-hidden m-0 rounded-md" style={{ paddingBottom: '66.6667%' }}>
                                  <Image
                                    src={result.image}
                                    alt={result.title}
                                    width={192}
                                    height={128}
                                    className="absolute left-0 top-0 m-0 origin-top-left w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button className="absolute -right-4 z-20 rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100 lg:block">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/donation-results" className="text-orange-500 flex items-center gap-1 hover:underline">
            ดูโครงการที่ปิดระดมทุน
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sec3;