import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <Link
    to="/submit"
    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orlando-blue hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
  >
    Suggest an addition &rarr;
  </Link>
);
