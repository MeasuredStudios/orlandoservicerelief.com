import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import AirtableForm from '../components/airtable-form';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SubmitPage = () => {
  const { site } = useStaticQuery(graphql`
    query SubmitQuery {
      site {
        siteMetadata {
          formId
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Submit a Link" />

      <p className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          &larr; View All Links
        </Link>
      </p>
      <h1 className="text-xl font-bold mb-4">Hi there!</h1>
      <p className="text-xl max-w-2xl mb-8 leading-7 text-gray-700">
        To submit a Link to be published on the site, please fill out the
        form below. We will review them as they come in and let you know when
        your link has been added to the site.
      </p>
      <AirtableForm id={site.siteMetadata.formId} />
      <Link to="/" className="font-semibold py-4">&larr; Go back to the homepage</Link>
    </Layout>
  );
};

export default SubmitPage;
