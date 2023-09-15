"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Image from "next/image";
import initiative1 from '../../public/assets/initiative1.png'
import initiative2 from '../../public/assets/initiative2.png'
import initiative3 from '../../public/assets/initiative3.png'
import initiative4 from '../../public/assets/initiative4.png'
export default function Initiative() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='Initiative' className="bg-black min-h-screen ">
            <div className="text-3xl py-16 font-bold text-white text-center" data-aos="fade-up" data-aos-duration="1000">OUR INITIATIVE</div>
            <div className="text-2xl flex flex-col md:flex-row justify-center items-center md:gap-10 px-4 md:px-20 text-red-600" data-aos="fade-up">
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <Image className="h-auto max-w-full rounded-lg" src={initiative1} alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Campus Tycoon</div>
                    <Image className="h-auto max-w-full rounded-lg" src={initiative2} alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Workshops</div>
                    <Image className="h-auto max-w-full rounded-lg" src={initiative3} alt="" />
                </div>
                <div className='mb-10 md:mb-0' data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">Talk Session</div>
                    <Image className="h-auto max-w-full rounded-lg" src={initiative4} alt="" />
                </div>
            </div>
        </div>
    )
}
