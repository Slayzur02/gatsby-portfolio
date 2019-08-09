import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";


import Header from "./header";
import '../css/layout.css';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.title} />

          <main className="flex flex-col flex-1 max-w-md md:justify-center md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 md:p-4 w-full">
            {children}
          </main>

          <footer className="mt-12 justify-center flex flex-col items-center text-center">
          <div className = "w-2/3 md:w-1/4">
            <hr/>  
          </div>
          
            <nav className="flex justify-center max-w-4xl mx-auto p-0 md:p-0 text-sm">
              <p className = "mx-6">
                <a
                  href="https://github.com/Slayzur02"
                  className="font-bold no-underline text-gray-800 hover:text-indigo-600" 
                >
                  Facebook
                </a>
              </p>
              <p className = "mx-6">
                <a
                  href="https://github.com/Slayzur02"
                  className="font-bold no-underline text-gray-800 hover:text-indigo-600" 
                >
                  Linkedin
                </a>
              </p>

              <p className = "mx-6">
                <a
                  href="https://github.com/Slayzur02"
                  className="font-bold no-underline text-gray-800 hover:text-indigo-600" 
                >
                  GitHub
                </a>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
