import React from "react";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className="bg-white ">
        <div className="container  flex h-[40vh] justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap gap-14 items-center justify-center">
                <img
                //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />
                <img
                //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />
                <img
                //   href="#"
                  alt="Brand Image"
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                />
                <img
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


