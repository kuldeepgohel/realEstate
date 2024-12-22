import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, maiores
            aut natus quis eos ullam odio voluptate ab soluta, distinctio
            repellat autem nulla iusto quod dolor doloribus iure itaque vitae!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center border-t border-gray-700 py-4 mt-10">
        Copyright © KuldeepGohel. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;