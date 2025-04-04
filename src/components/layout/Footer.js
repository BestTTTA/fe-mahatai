import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="hidden md:static md:block md:h-auto md:bg-gray-100 md:px-6">
      <div className="relative bg-amber-50 px-4 py-8 pt-12 md:rounded-t-[60px] md:px-8 md:py-24 lg:px-12 lg:py-16 lg:pb-8 xl:px-24">
        <div className="h-full space-y-4 overflow-y-auto px-4 py-6 md:space-y-8 md:pt-0">
          <div className="grid grid-cols-2 gap-4 gap-y-6 md:gap-12 lg:grid-cols-4">
            {/* Column 1 - รู้จักเทใจ */}
            <div className="col-span-2 space-y-2 md:col-span-1 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-orange-500 md:text-heading-lg">รู้จักเทใจ</h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:block md:gap-x-0 md:gap-y-0 md:space-y-2.5">
                <li><Link href="/th/projects" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">โครงการ</Link></li>
                <li><Link href="/th/fundraising" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">เพจระดมทุน</Link></li>
                <li><Link href="/th/about" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">เกี่ยวกับเรา</Link></li>
                <li><Link href="/th/latests" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">ความเคลื่อนไหว</Link></li>
              </ul>
            </div>

            {/* Column 2 - ผู้บริจาค */}
            <div className="space-y-2 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-orange-500 md:text-heading-lg">ผู้บริจาค</h2>
              <ul className="space-y-2.5">
                <li><Link href="/th/faq/donor/tax-deduction" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">การลดหย่อนภาษี</Link></li>
                <li><Link href="/th/fundraising/fandom-hall-of-fame" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">แฟนคลับศิลปิน</Link></li>
                <li><Link href="/th/faq/donor" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">FAQ ผู้บริจาค</Link></li>
              </ul>
            </div>

            {/* Column 3 - เจ้าของโครงการ */}
            <div className="space-y-2 md:space-y-6">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-orange-500 md:text-heading-lg">เจ้าของโครงการ</h2>
              <ul className="space-y-2.5">
                <li><Link href="/th/submission" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">ส่งโครงการ</Link></li>
                <li><Link href="/th/faq/campaigner" className="font-anuphan text-heading-md font-medium text-gray-700 no-underline hover:underline">FAQ เจ้าของโครงการ</Link></li>
              </ul>
            </div>

            {/* Column 4 - ติดต่อเรา */}
            <div className="col-span-2 space-y-4 border-t border-amber-200 pt-4 md:col-span-1 md:space-y-6 md:border-t-0 md:pt-0">
              <h2 className="m-0 font-anuphan text-heading-md font-bold text-orange-500 md:text-heading-lg">ติดต่อเรา</h2>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <MapPin className="w-5 shrink-0" />
                  <p className="m-0 font-anuphan">
                    COCON (ห้อง 304) ชั้น 3 อาคาร The Season Mall 899 ถนนพหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400 | <a target="_blank" className="text-gray-700 no-underline hover:underline" href="https://maps.app.goo.gl/RrJeH4Zz3xm186kC9">ดูแผนที่</a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 shrink-0" />
                  <a className="m-0 font-anuphan text-sm text-gray-700 no-underline hover:underline" href="tel:098-615-5885">098-615-5885</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 shrink-0" />
                  <a className="m-0 font-anuphan text-sm text-gray-700 no-underline hover:underline" href="mailto:info@taejai.com">info@taejai.com</a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a target="_blank" href="https://www.facebook.com/taejaidotcom/">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12z" fill="#1877f2"></path>
                    <path d="M18 12a6.02 6.02 0 0 0-6-6 6.02 6.02 0 0 0-6 6 5.98 5.98 0 0 0 5.025 5.925v-4.2h-1.5V12h1.5v-1.35c0-1.5.9-2.325 2.25-2.325.675 0 1.35.15 1.35.15v1.5h-.75c-.75 0-.975.45-.975.9V12h1.65l-.3 1.725h-1.425V18c3-.45 5.175-3 5.175-6z" fill="#fff"></path>
                  </svg>
                </a>
                <a target="_blank" href="https://twitter.com/TaejaiDotCom">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z" fill="black"></path>
                    <g clipPath="url(#clip0_6852_105275)">
                      <path d="M24.0384 8.50879H27.2584L20.2234 16.55L28.5 27.4902H22.0197L16.9447 20.8542L11.1365 27.4902H7.91475L15.4398 18.8889L7.5 8.50966H14.1447L18.7324 14.5752L24.0384 8.50879ZM22.9088 25.5634H24.6929L13.1753 10.3349H11.2607L22.9088 25.5634Z" fill="white"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6852_105275">
                        <rect width="21" height="21" fill="white" transform="translate(7.5 7.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/taejaithailand/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-pink-600">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-8 pt-6 border-t border-amber-200 text-sm text-gray-600 flex flex-wrap gap-4">
            <span>เงื่อนไขการใช้บริการ</span>
            <span>•</span>
            <span>เงื่อนไขการใช้คุกกี้</span>
            <span>•</span>
            <span>ภาษา</span>
            <span>•</span>
            <span>ไทย</span>
            <span>•</span>
            <span>Eng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;