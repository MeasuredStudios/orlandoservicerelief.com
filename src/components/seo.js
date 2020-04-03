/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            authorName
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Orlando Service Relief`,
        },
        {
          property: `og:url`,
          content: `https://www.orlandoservicerelief.com/`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:alt`,
          content: `An image of a group of people with all hands in`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `article:author`,
          content: `https://www.facebook.com/JOVANIPINK`,
        },
        {
          property: `fb:app_id`,
          content: ``,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: `@JovaniPink`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: image,
        },
        {
          property: `twitter:image:alt`,
          content: `An image of a group of people with all hands in`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.authorName,
        },
        {
          property: `twitter:url`,
          content: `https://www.orlandoservicerelief.com/`,
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
