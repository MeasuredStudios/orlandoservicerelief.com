/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../css/global.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          city
          state
          authorName
          authorLink
        }
      }
    }
  `);

  return (
    <>
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteCity={data.site.siteMetadata.city}
          siteState={data.site.siteMetadata.state}
        />
        <main>{children}</main>
        <footer className="text-sm pt-10 text-center">
          &copy; {new Date().getFullYear()} &amp; built with
          {` `}
          <a className="text-blue-600" href="https://www.gatsbyjs.org" rel="noopener noreferrer"
          target="_blank">
            Gatsby
          </a>{' '}
          and{` `}
          <a className="text-blue-600" href="https://tailwindcss.com" rel="noopener noreferrer"
          target="_blank">
            Tailwind CSS
          </a>{' '}
          by{' '}
          <a className="text-blue-600" href={data.site.siteMetadata.authorLink}>
            {data.site.siteMetadata.authorName}
          </a>
          .{' '}
          <a className="text-blue-600" href="https://www.servicerelief.us" rel="noopener noreferrer"
          target="_blank">
            Build one for your city.
          </a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
