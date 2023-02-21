import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-16 bg-white py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div
            className="flex items-center space-x-[0.5] cursor-pointer"
            onClick={() => Navigate('/')}
          >
            <AiTwotoneHome className="h-4 cursor-pointer text-red-600 md:h-6 w-6" />
            <p className="md:text-2xl">
              <span className="text-red-500">Dream</span>
              <span>House</span>
            </p>
          </div>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Bammy Solutions
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <p>+234 704 724 5849</p>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
