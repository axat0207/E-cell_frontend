import Link from "next/link";
import { ECELL_LOGO } from "./constants/imageLinks";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src={ECELL_LOGO}
                className=" mr-3"
                alt="FlowBite Logo"
                width={60}
                height={60}
              />
            </Link>
            <div className="flex mt-2 -ml-7">
              <img
                src="/insta.svg"
                className=" mr-3"
                alt="FlowBite Logo"
                width={30}
                height={30}
              />

              <img
                src="/fb.svg"
                className=" mr-3"
                alt="FlowBite Logo"
                width={30}
                height={30}
              />
              <img
                src="/linkiden.svg"
                className=" mr-3"
                alt="FlowBite Logo"
                width={30}
                height={20}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Home
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Events
              </h2>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Initiative
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline text-white"
                  >
                    Alumni
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline text-white"
                  >
                    Partner With Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Address
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Phone No.
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-white">
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline text-white">
              E-Cell
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
