"use client";
// @ts-nocheck
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="relative bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
              backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/7449/00dd/455bae558765eeeab2c0330340a294d6?Expires=1694995200&Signature=HAZeuU7aWChEgoFEYQHFwH4tP0wmXagrdz4ScZql0RpONw0wUxsNl05a2MDzZBIUBsTYZ1zTphcDdioeDUWAgIE7dT9idMccQghFvGtMjttmPDNhQxA6udX~MDulnqddQgrgwuaIAmCWFvC56Oig6tn7PidwNhs9o8U102lEuf4u~OjSdZU2gGZ9bb96C3ixngMR7ebbActekGWJZpK5agfEXa9RtRLzWX0-A2krcqhgIY~NhJX2GDXnV6KAnjLH7gZO4Fm5mT9yEzld0ClpRkBfzGU9tstMH8W1Qavyc5b4BmYzySlclvtPOWIbP4wF5AjNziFjJu6aE9Gz7xMNeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
              opacity: "0.2",
            }}
        ></div>
            <Navbar />
        <div className="h-[90vh] bg- leading-loose text-white flex flex-col justify-center items-center">
          <div
            data-aos="fade-in"
            data-aos-duration="1600"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex">
              <span className="text-3xl font-bold text-red-600">E</span>
              <span className="text-3xl">-CELL</span>
            </div>
            <div className="text-3xl text-center pt-2">
              JABALPUR ENGINEERING COLLEGE
            </div>
            <div className="text-xl pt-3 sm:pt-5">
              Empowering you for a better future
            </div>
            <div className="text-sm underline pt-3 sm:pt-5">KNOW MORE</div>
          </div>
        </div>
      </div>
    </>
  );
}
