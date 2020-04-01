import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Featured from '../components/featured';
import Description from '../components/description';
import { graphql } from 'gatsby';

import FormButton from '../components/form-button';

const IndexPage = ({
  data: {
    site,
    allAirtable: { nodes: entities },
  },
}) => {
  const categories = [
    ...new Set(entities.map((entity) => entity.data.Category)),
  ];

  const slugsByCategory = entities.reduce((categories, entity) => {
    let category = entity.data.Category;
    if (!categories[category]) {
      categories[category] = entity.fields.slug;
    }
    return categories;
  }, {});

  const entitiesByCategory = entities.reduce((acc, entity) => {
    let category = entity.data.Category;
    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(entity);
    return acc;
  }, {});

  return (
    <Layout>
      <SEO title="Orlando Service Relief" />
      <div className="mb-20">
        <Description city={site.siteMetadata.city} />
        <p className="text-lg mb-8">
          Jump to:{' '}
          {categories.map((category, idx) => (
            <React.Fragment key={slugsByCategory[category]}>
              <a href={`#${slugsByCategory[category]}`} className="underline">
                {category}
              </a>
              {idx !== categories.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </p>
        <FormButton />
      </div>

      <Featured />

      <div className="mb-20">
        <p className="text-base leading-6 text-orlando-blue font-semibold tracking-wide uppercase">
          Links
        </p>
        <h2 className="mt-2 mb-4 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
          A list of resources for the service industry.
        </h2>
        {categories.map((category) => (
          <div
            key={slugsByCategory[category]}
            className="border-t border-gray-200 py-4"
          >
            <h3
              id={slugsByCategory[category]}
              className="text-lg leading-6 font-medium text-gray-900"
            >
              {category}
            </h3>
            <ul className="list-disc pl-6 mt-4">
              {entitiesByCategory[category].map((entity) => (
                <li key={entity.data.BusinessName}>
                  <a
                    className="underline"
                    href={entity.data.LinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entity.data.BusinessName}
                  </a>{' '}
                  {entity.data.FundraiserDescription && (
                    <p className="mt-2 mb-2 italic">
                      {entity.data.FundraiserDescription}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        city
        state
      }
    }
    allAirtable(filter: { data: { Approved: { eq: "Yes" } } }) {
      nodes {
        data {
          Approved
          BusinessName
          Category
          FundraiserDescription
          LinkUrl
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
