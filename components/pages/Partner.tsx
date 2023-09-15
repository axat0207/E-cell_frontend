"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
const Brand = () => {

  return (
    <>
      {/* ====== Brands Section Start */}
      <section id="Partner" className="bg-white py-10">
        <div className="flex  md:h-[40vh] flex-col justify-center items-center"   data-aos="zoom-in-up"  data-aos-delay="50"
    data-aos-duration="1200">
          <div className="my-10">
            <h1 className="text-4xl font-semibold">PARTNER WITH US</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full ">
              <div className="flex justify-center mb-10 flex-wrap gap-16">
                <Image
                  //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />
                <Image
                  //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />
                <Image
                  //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                />
                <Image
                  //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;
