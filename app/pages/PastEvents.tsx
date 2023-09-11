// // import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// export default function PastEvents(){
//     return(
        
//         <>
//         <div>PastEvents</div>
//         <div>
//         <Carousel>
//                 <div>
//                     <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jp" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jp" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jp" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         </div>
//         </>
//     )
// }

"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from "next/image";
import { useEffect } from 'react';

export default function PastEvents() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="min-h-screen ">
            <div className="text-4xl font-semibold py-16 text-black text-center" data-aos="fade-up" data-aos-duration="1000">Past Events</div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 px-4 md:px-20 text-red-600" data-aos="fade-up">
                {/* <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div> */}
                {/* <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div> */}
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div data-aos="flip-up" data-aos-offset="300" data-aos-duration="1000">
                    <div className="text-center py-4">E-Summit</div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
