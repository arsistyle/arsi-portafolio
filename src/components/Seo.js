import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title = null, url = null, description = null, og = {} }) => {
  console.log({ title, url, description, og });

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name='description' content={description} />}
      <meta name='robots' content='index, follow'></meta>
      {(og.title || title) && (
        <meta property='og:title' content={og.title || title} />
      )}
      {(og.description || description) && (
        <meta
          property='og:description'
          content={og.description || description}
        />
      )}
      {(og.url || url) && <meta property='og:url' content={og.url || url} />}
      {og.image && <meta property='og:image' content={og.image} />}
      {og.type && <meta property='og:type' content={og.type} />}
    </Helmet>
  );
};

export default Seo;
