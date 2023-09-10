import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/f4b6/49f4/b519d884a8e9f03161059ed2a45633e1?Expires=1694995200&Signature=ZgZ8-98gpacHW-ydsigDHMgU7yP1E97Q6eIeslfkBA4GRb98e5yfkSIFkzIVn87hhWMFAVTHRQZsfmqzPQIX9Bs8ECGPV7Cojgp97-80XO0Xc11loPu01pD7whPauEc3iCsmWbgR7s4NbdQAsu16QtfvBtTjpEvD9-dYbvy-YGr~w5TZ6jo6OZqOSby8XIqmxMgvqzMMXR1hTWDUMFb8xTKdUjTczmDvNwH5bR0WukoxTlgTZhHD6GecsXTShcmWU3TPXMyn5iL-xNS6KAVYr~kV-61is92~GGx43ML2JfhpQlmE-8NM39rpgqDHbCm53W3QAYh2fPwYdEhxyPkOOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="h-14 mr-3"
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
                <Link className="hover:text-red-700" href={'/'}>HOME</Link>
                <Link className="hover:text-red-700" href={'/'}>ABOUT US</Link>
                <Link className="hover:text-red-700" href={'/'}>INITIATIVE</Link>
                <Link className="hover:text-red-700" href={'/'}>EVENTS</Link>
                <Link className="hover:text-red-700" href={'/'}>ALUMNI</Link>
                <Link className="hover:text-red-700" href={'/'}>PARTNER WITH US</Link>
                <Link className="hover:text-red-700" href={'/'}>CONTACT US</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
