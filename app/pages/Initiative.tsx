import Image from "next/image";

export default function Initiative(){
    return(
        
        <div className="bg-black h-[100vh]">
        <div className="text-3xl py-16 text-white text-center"> OUR INITIATIVE</div>
        <div className=" flex justify-center item-center gap-10 px-20  text-red-600">
            <div>
                <div className="text-center py-4">E-Summit</div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
     
            </div>
            <div>
                <div className="text-center py-4">E-Summit</div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
     
            </div>
            <div>
                <div className="text-center py-4">E-Summit</div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
     
            </div>
            <div>
                <div className="text-center py-4">E-Summit</div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
     
            </div>

        </div>
        </div>
    )
}