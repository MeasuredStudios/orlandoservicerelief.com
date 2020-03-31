import React from 'react';

const Cta = () => (
  <div className="bg-gray-50">
    <div className="max-w-screen-xl mx-auto py-12 lg:py-16">
      <p className="text-base leading-6 text-orlando-blue font-semibold tracking-wide uppercase">
        Grow
      </p>
      <h2 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
        Ready to dive in?
        <br />
        <span className="mt-4 max-w-2xl text-xl leading-7 text-orlando-blue">
          ... more resources are coming. In the mean time,{' '}
        </span>
      </h2>
      <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orlando-blue hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Grow
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Cta;
