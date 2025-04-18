import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="hidden md:static md:block md:h-auto md:bg-gray-100 md:px-6">
      <div className="relative bg-blue-50 px-4 py-8 pt-12 md:rounded-t-[60px] md:px-8 md:py-24 lg:px-12 lg:py-16 lg:pb-8 xl:px-24">
        <div className="h-full space-y-4 overflow-y-auto px-4 py-6 md:space-y-8 md:pt-0">
          <div className="grid grid-cols-2 gap-4 gap-y-6 md:gap-12 lg:grid-cols-4">
            {/* Column 1 - รู้จักเทใจ */}
            <div className="col-span-2 space-y-2 md:col-span-1 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-blue-500 md:text-heading-lg">รู้จักมูลนิธิพระมหาไถ่</h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:block md:gap-x-0 md:gap-y-0 md:space-y-2.5">
                <li><Link href="/th/projects" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">โครงการ</Link></li>
                <li><Link href="/th/fundraising" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">เพจระดมทุน</Link></li>
                <li><Link href="/th/about" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">เกี่ยวกับเรา</Link></li>
                <li><Link href="/th/latests" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">ความเคลื่อนไหว</Link></li>
              </ul>
            </div>

            {/* Column 2 - ผู้บริจาค */}
            <div className="space-y-2 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-blue-500 md:text-heading-lg">ผู้บริจาค</h2>
              <ul className="space-y-2.5">
                <li><Link href="/th/faq/donor/tax-deduction" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">การลดหย่อนภาษี</Link></li>
                <li><Link href="/th/fundraising/fandom-hall-of-fame" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">แฟนคลับศิลปิน</Link></li>
                <li><Link href="/th/faq/donor" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">FAQ ผู้บริจาค</Link></li>
              </ul>
            </div>

            {/* Column 3 - เจ้าของโครงการ */}
            <div className="space-y-2 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-blue-500 md:text-heading-lg">เจ้าของโครงการ</h2>
              <ul className="space-y-2.5">
                <li><Link href="/th/submission" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">ส่งโครงการ</Link></li>
                <li><Link href="/th/faq/campaigner" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">FAQ เจ้าของโครงการ</Link></li>
              </ul>
            </div>

            {/* Column 4 - ติดต่อเรา */}
            <div className="col-span-2 space-y-4 border-t border-amber-200 pt-4 md:col-span-1 md:space-y-6 md:border-t-0 md:pt-0">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-blue-500 md:text-heading-lg">ติดต่อเรา</h2>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <MapPin className="w-5 shrink-0" />
                  <p className="m-0 font-anuphan">
                  ที่ตั้ง 440 อาคาร F ชั้น 1 ม.9 ต.หนองปรือ อ.บางละมุง จ.ชลบุรี 20150 | <a target="_blank" className="text-gray-700 no-underline hover:underline" href="https://goo.gl/maps/hetEDvA7aEbGwJvm6">ดูแผนที่</a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 shrink-0" />
                  <a className="m-0 font-anuphan text-sm text-gray-700 no-underline hover:underline" href="tel:02-572-4042">โทรศัพท์ 02-572-4042 ต่อ 8300</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 shrink-0" />
                  <a className="m-0 font-anuphan text-sm text-gray-700 no-underline hover:underline" href="mailto:info@mahatai.org">info@mahatai.org</a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a target="_blank" href="#" className="bg-[#1877F2] rounded-full p-2 flex items-center justify-center w-8 h-8 hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
                <a target="_blank" href="#" className="bg-[#FF0000] rounded-full p-2 flex items-center justify-center w-8 h-8 hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </a>
                <a target="_blank" href="#" className="bg-[#25D366] rounded-full p-2 flex items-center justify-center w-8 h-8 hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </a>
                <a target="_blank" href="#" className="bg-black rounded-full p-2 flex items-center justify-center w-8 h-8 hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 448 512">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-8 pt-6">
            <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <div>
                <ul className="m-0 flex space-x-4">
                  <li className="flex items-center">
                    <a target="" className="font-anuphan text-heading-sm font-medium text-subtle no-underline hover:underline" href="/th/privacy">นโยบายความเป็นส่วนตัว</a>
                  </li>
                  <li className="flex items-center">
                    <a target="" className="font-anuphan text-heading-sm font-medium text-subtle no-underline hover:underline" href="/th/cookie">นโยบายการใช้งานคุกกี้</a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-anuphan text-sm font-medium text-subtle">ภาษา:</span>
                <div>
                  <div className="space-x-1 text-xs">
                    <button className="px-1.5 py-1 font-anuphan cursor-default rounded bg-white font-bold text-gray-900">ไทย</button>
                    <button className="px-1.5 py-1 font-anuphan text-gray-400">ENG</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;