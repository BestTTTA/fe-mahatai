'use client';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const data = [

];

export default function ComBox() {
    const [visibleCount, setVisibleCount] = useState(9);

    const handleShowMore = () => {
        const newCount = visibleCount + 9;
        setVisibleCount(newCount);

        // scroll ไปยังตำแหน่งปุ่ม (เผื่อข้อมูลยาวเกิน)
        setTimeout(() => {
            const element = document.getElementById('show-more-button');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    const visibleItems = data.slice(0, visibleCount);

    return (
        <div className="space-y-8">

            {/* Show more button */}
            <div className="w-full text-center mt-6" id="show-more-button">
                <button
                    onClick={handleShowMore}
                    disabled={visibleCount >= data.length}
                    className={`px-6 py-3 font-semibold rounded-full shadow-md border-2 transition-all duration-300
      ${visibleCount >= data.length
                            ? 'text-gray-400 bg-gray-100 border-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-500 hover:text-white border-gray-400'}
    `}
                >
                    ดูองค์กรเพิ่มเติม
                </button>
            </div>

            {/* Sign up section */}
            <div className="bg-blue-200 p-8 md:p-40 rounded-lg max-w-8xl mx-auto">
                <div className="flex items-start space-x-50">
                    <Image src="/green.png.png" alt="Mascot" width={400} height={400} className="w-72 h-52" />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-blue-700 mb-2">สมัครองค์กร</h1>
                        <p className="text-black leading-relaxed text-xl md:text-1xl ">
                            ไม่ว่าคุณจะเป็นใคร บุคคลธรรมดา องค์กร นิติบุคคล สมาคม อื่นๆ ขอแค่คุณมี
                            โครงการที่ต้องการเปลี่ยนแปลงสังคมให้ดีขึ้น คุณก็สามารถสมัครองค์กรเพื่อเปิด
                            ระดมทุนกับเทใจเข้ามาได้ ผ่านฟอร์มออนไลน์ของเรา
                        </p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-full text-lg flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                            <span>สมัครองค์กร</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
