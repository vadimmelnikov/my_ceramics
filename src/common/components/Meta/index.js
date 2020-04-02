import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import commonPreview from '@assets/common__preview.png';

import { Helmet } from 'react-helmet';

const Meta = ({ title, description, location }) => {
  const site = ``;

  const isDefaultTitle =
    title === Meta.defaultProps.title || title === '' || title === '';
  const preTitle = isDefaultTitle ? '' : '';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="" />
      <meta property="og:title" content={title + preTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site} />
      <meta property="og:locale" content="ru_RU" />

      {/* <meta property="og:image" content={preview} /> */}
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="533" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:text:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={preview} /> */}
      <meta name="twitter:site" content={site} />

      <link rel="canonical" content={site} />
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Meta.defaultProps = {
  title: 'TWST',
  description: 'TEST descr',
};

export default withRouter(Meta);
