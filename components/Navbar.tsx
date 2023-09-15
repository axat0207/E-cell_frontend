import Link from "next/link";
import ECELL_LOGO from '../public/assets/ecell-logo.png'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-black opacity-80">
      <div className="max-w-screen-xl flex flex-wrap z-10 items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={ECELL_LOGO}
            className="lg:h-14 h-10 w-10 lg:w-14 opacity-1 mr-3"
            alt="E-Cell Logo"

          />

        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <div className="text-white text-lg flex justify-center items-center gap-4">
                <Link className="hover:text-red-600" href={'/'}>Home</Link>
                <Link className="hover:text-red-600" href='#about'>About Us</Link>
                <Link className="hover:text-red-600" href='#Initiative'>Initiative</Link>
                <Link className="hover:text-red-600" href='#Events'>Events</Link>
                <Link className="hover:text-red-600" href='#Alumini'>Alumini</Link>
                <Link className="hover:text-red-600" href='#Partner'>Partner With Us</Link>
                <Link className="hover:text-red-600" href='#Contact'>Contact Us</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
