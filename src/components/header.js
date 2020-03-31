import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteCity, siteState }) => (
  <header>
    <p className="text-base leading-none font-semibold text-indigo-600 uppercase tracking-wide pt-16">the City Beautiful</p>
    <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      <Link to="/">
        <span>{siteCity}</span>
        <br />
        <span>Service</span>
        <br />
        <span>Relief</span>
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteCity: PropTypes.string,
  siteState: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteCity: ``,
  siteState: ``,
};

export default Header;
