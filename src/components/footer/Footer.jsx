import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-auto bg-white shadow-top border-gray-200 dark:bg-gray-900 px-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
          <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                E-commerce!
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:underline capitalize me-4 md:me-6"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline  capitalize me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:underline capitalize me-4 md:me-6"
                >
                  products
                </Link>
              </li>
              <li>
                <Link
                  to="/user/cart"
                  className="hover:underline capitalize me-4 md:me-6"
                >
                  Payment Cart
                </Link>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-300 max-w-screen-xl mx-auto" />

          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;