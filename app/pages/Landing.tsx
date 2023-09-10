"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from "../components/Navbar"
import { useEffect } from 'react';

export default function Landing(){

    useEffect(() => {
        AOS.init();
    }, [])
    
    return(
        <>
        <Navbar/>
        <div className="h-[90vh] bg-black leading-loose  text-white flex flex-col justify-center items-center" >
        <div data-aos="fade-in" data-aos-duration="1600" className='flex flex-col justify-center items-center'>
        <div className="flex">
        <span className="text-3xl text-red-700">E</span ><span className="text-3xl">-CELL</span>

        </div>
            
            <div className="text-3xl pt-2">JABALPUR ENGINERING COLLEGE</div>
            <div className="text-xl pt-5">Enpowering for you a better future</div>
            <div className="text-sm underline pt-5"> KNOW MORE</div>
        </div>
        </div>
        </>
    )
}
