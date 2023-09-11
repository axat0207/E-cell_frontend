"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from "next/image";
import { useEffect } from 'react';

export default function Initiative() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-black min-h-screen ">
            <div className="text-3xl py-16 font-bold text-white text-center" data-aos="fade-up" data-aos-duration="1000">OUR INITIATIVE</div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 px-4 md:px-20 text-red-600" data-aos="fade-up">
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div className='mb-10 md:mb-0' data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
