"use client"
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function About() {

  
  useEffect(() => {
    Aos.init();
}, [])

  return (
    <>
      <div className="flex justify-center items-center mx-40  h-[100vh] w-[100vw]">
        <div>
          <div data-aos="fade-right">
            <div className="text-5xl font-bold">About</div>
            <div className="text-sm w-[40vw] mt-10 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure ad eius sed accusantium velit eligendi error perferendis, a
              asperiores distinctio. Omnis nisi mollitia suscipit asperiores.
              Natus ipsum ratione, inventore commodi necessitatibus incidunt
              molestiae aperiam, architecto ea nemo quisquam voluptate
              reiciendis perspiciatis expedita dicta dolorum ipsa enim, eveniet
              nostrum sapiente cumque magni voluptas impedit porro. Laudantium
              labore velit impedit, culpa iste facere error molestiae maxime ea
              delectus obcaecati earum natus provident magnam hic expedita
              suscipit totam optio. Adipisci, ea tempore ullam vitae placeat
              facilis repudiandae nam, necessitatibus ipsam quos eveniet!
              Praesentium vero illo sunt beatae vel laboriosam nobis iure
              cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam esse, dignissimos vitae aliquam quis impedit sequi ad
              quibusdam voluptatem, omnis doloremque aspernatur error dolores
              odio totam obcaecati molestias et id? Dolorem perspiciatis nam
              minus eaque, consequatur saepe at nostrum ratione dolore quos
              quasi vel, rem unde tempora aliquam libero doloribus dolores
              facere aperiam architecto laudantium ab veniam provident
              explicabo! Nostrum aspernatur perferendis rem at recusandae
              placeat fugit distinctio quibusdam dignissimos!
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mx-10 md:grid-cols-4 gap-4" data-aos="fade-left">
          <div className="grid gap-4" >
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
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
