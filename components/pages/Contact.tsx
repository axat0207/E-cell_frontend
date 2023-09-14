
// @ts-nocheck
"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import React from 'react';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #000 0%, #FFF 96.35%, #FFF 100%)',
      }}
      className="px-6 py-24 sm:py-32 lg:px-8"
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="1200"
    >

      <div className="mx-auto max-w-2xl text-center" >
        <h2 className="text-3xl text-white font-bold tracking-tight  sm:text-4xl">Get In Touch</h2>
        <p className="mt-2 text-lg leading-8 text-white">Feel free to contact us in case of any queries.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div className="mt-2.5">
              <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div className="mt-2.5">
              <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-red-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
