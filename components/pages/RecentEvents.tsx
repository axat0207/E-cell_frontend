"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from "next/image";
import { useEffect } from 'react';
import recent1 from '../../public/assets/recent1.png'
import recent2 from '../../public/assets/recent2.png'
import recent3 from '../../public/assets/recent3.png'
import recent4 from '../../public/assets/recent4.png'
export default function Initiative() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="min-h-screen ">
            <div className="text-4xl font-semibold py-16 text-black text-center" data-aos="fade-up" data-aos-duration="1000">Recent Events</div>
            <div className="text-2xl flex flex-col md:flex-row justify-center items-center md:gap-10 px-4 md:px-20 text-red-600" data-aos="fade-up">
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Marketing Fiesta</div>
                    <Image className="h-auto max-w-full rounded-lg" src={recent1} alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Entrepreneur's talk</div>
                    <Image className="h-auto max-w-full rounded-lg" src={recent2} alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Pitching Competition</div>
                    <Image className="h-auto max-w-full rounded-lg" src={recent3} alt="" />
                </div>
                <div className='mb-10 md:mb-0' data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Presentation round</div>
                    <Image className="h-auto max-w-full rounded-lg" src={recent4} alt="" />
                </div>
            </div>
        </div>
    )
}
