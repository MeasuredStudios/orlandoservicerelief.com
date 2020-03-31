import React from 'react';

const Cta = () => (
  <div className="bg-gray-50">
    <div className="max-w-screen-xl mx-auto py-12 lg:py-16">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Grow
      </p>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Ready to dive in?
        <br />
        <span className="mt-4 max-w-2xl text-xl leading-7 text-indigo-600">
          ... more resources are coming. In the mean time,{' '}
        </span>
      </h3>
      <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Grow
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Cta;
