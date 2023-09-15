"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./pageEvent.css";
import Image from "next/image";
import img1 from '../../public/assets/about1.png'
import img2 from '../../public/assets/about2.jpg'
import img3 from '../../public/assets/about3.png'
import img4 from '../../public/assets/initiative1.png'
import img5 from '../../public/assets/initiative2.png'
import img6 from '../../public/assets/initiative3.png'
import img7 from '../../public/assets/initiative4.png'
import img8 from '../../public/assets/recent1.png'

export default function PastEvents() {
  register();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" text-center mt-5 text-4xl font-semibold py-16" data-aos="slide-up"    data-aos-duration="900">
        <h1>PAST EVENTS</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={4}  //set initial slide state
        >
          <SwiperSlide>
            <Image src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} alt=""/>
          </SwiperSlide>
         
          <SwiperSlide>
            <Image src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
