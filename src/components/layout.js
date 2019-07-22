import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import '../css/layout.css'

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

          <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>

          <footer className="bg-teal-600">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  {data.site.siteMetadata.author}
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                  className="font-bold no-underline text-white"
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
