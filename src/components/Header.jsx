import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex items-center space-x-[0.5]">
          <AiTwotoneHome
            className="h-4 cursor-pointer text-red-600 md:h-6 w-6"
            onClick={() => navigate('/')}
          />
          <p className="md:text-2xl">
            <span className="text-red-500">Dream</span>
            <span>House</span>
          </p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent cursor-pointer ${
                pathMathRoute('/') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent cursor-pointer ${
                pathMathRoute('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent cursor-pointer ${
                pathMathRoute('/sign-in') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/sign-in')}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
