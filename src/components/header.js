import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {

  return (
    <nav className="transparent">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-2">
        {// <button}

        //   className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
        //   onClick={() => toggleExpansion(!isExpanded)}
        // >
        //   <svg
        //     className="fill-current h-3 w-3"
        //     viewBox="0 0 20 20"
        //     xmlns="http://www.w3.org/2000/svg"
        //   >
        //     <title>Menu</title>
        //     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        //   </svg>
        // </button>
        }
        <div
          className=" flex items-center w-full justify-center"
        >
          <div className="text-sm items-center">
            <Link
              to="/"
              activeStyle = {{
                borderBottom: '2px solid black',
                color: 'black'
              }}
              className="inline-block mt-0 mr-6 no-underline text-gray-500 hover:text-indigo-600"
            >
              Home
            </Link>

            <Link
              to="/work"
              activeStyle = {{
                borderBottom: '2px solid black',
                color: 'black'
              }}
              className="inline-block mt-0 mr-6 no-underline text-gray-500 hover:text-indigo-600"
            >
              Work
            </Link>

            <Link
              to="/contact"
              activeStyle = {{
                borderBottom: '2px solid black',
                color: 'black'
              }}
              className="inline-block mt-0 no-underline text-gray-500 hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
