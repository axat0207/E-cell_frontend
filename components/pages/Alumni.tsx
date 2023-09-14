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
        <div className="bg-black pb-20 ">
            <div className="text-3xl py-16 font-bold text-white text-center" data-aos="fade-up" data-aos-duration="1000">ALUMINI</div>
            <div className="text-2xl flex flex-col md:flex-row justify-center items-center md:gap-10 px-4 md:px-20 text-red-600" data-aos="fade-up">
                <div data-aos-delay="50" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
                <div data-aos-delay="100" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
                <div data-aos-delay="150" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
                <div data-aos-delay="200" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
                <div data-aos-delay="250" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
                <div data-aos-delay="300" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="400">
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    <div className="text-center py-4">Alumini </div>
                </div>
            </div>
           
        </div>
    )
}
