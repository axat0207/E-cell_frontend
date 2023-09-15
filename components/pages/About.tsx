"use client";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import about1 from '../../public/assets/about1.png'
import about2 from '../../public/assets/about2.jpg'
import about3 from '../../public/assets/about3.png'
export default function About() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="about" className="flex flex-col lg:flex-row justify-between lg:min-h-fit lg:py-20 lg:px-10  w-full">

      <div className="w-full  px-4">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-offset="90"
        >
          <div className="text-5xl font-bold mt-10">About</div>
          <div className="text-sm mt-10 leading-relaxed">
            {/* Your Lorem Ipsum text */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente assumenda minima nam illo ipsam debitis nostrum exercitationem, aut et error! Numquam dolore, natus qui, distinctio pariatur cum voluptatem velit voluptates suscipit dolorum, molestiae asperiores? Enim aliquid quibusdam aspernatur dolorem nobis et asperiores labore recusandae, reprehenderit beatae unde, ab assumenda illum. Aperiam magnam vel aspernatur! Animi sit inventore aliquam? Odio voluptatibus amet repellendus delectus optio atque sint voluptas provident aperiam tempora nam, sunt modi nisi temporibus animi reiciendis ipsa quos officiis sit iure in porro officia fugit! Fugiat alias earum, unde maiores, nulla asperiores nihil nisi explicabo id reiciendis ab atque.
          </div>
        </div>
      </div>
      <div className="w-full ml-4 my-8 mx-4 ">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-aos="fade-right"
          data-aos-easing="linear"
          >
          <div className="grid col-span-2 gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={about1}
                alt="about image 1"
                />
              <Image
                className="h-auto max-w-full rounded-lg"
                src={about2}
                alt="about image 2"
              />
            </div>
            <div className=" col-span-2">
            </div>
          </div>
          <div className="grid gap-4 col-span-2 mt-20">

            <Image
              className="h-auto max-w-full rounded-lg"
              src={about3}
              alt="about image 1"
              />
          </div>
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg lg:block"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>


    </div>
  );
}


{/* <div className="w-full ml-4 md:w-1/2 my-8 mx-4 md:mt-0">
  <div
    className="grid grid-cols-2 md:grid-cols-4 gap-4"
    data-aos="fade-right"
    data-aos-easing="linear"
  >
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src={ABOUT_GALLARY_2}
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
      </div>
      <img
        className="h-auto max-w-full rounded-lg"
        src={ABOUT_GALLARY_3}
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg lg:block"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
        alt=""
      />
    </div>
  </div>
</div> */}