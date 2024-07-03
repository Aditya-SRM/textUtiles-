import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-white text-xl font-bold" href="#">MyNavbar</a>
        <button className="text-white lg:hidden block" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4" id="navbarSupportedContent">
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-400" aria-current="page" href="#">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-400" href="#">About</a>
            </li>
          </ul>
          <form className="flex space-x-2" role="search">
            <input className="px-3 py-2 rounded-md text-gray-800" type="search" placeholder="Search" aria-label="Search" />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  props: PropTypes.object,
};
