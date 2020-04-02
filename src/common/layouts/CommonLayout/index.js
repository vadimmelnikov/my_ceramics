import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';

// import HeaderLogo from '@components/HeaderLogo';
// import HeaderNav from '@components/HeaderNav';
// import Socials from '@components/Socials';

import './styles.styl';

import styles from './index.styl';

const CommonLayout = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonLayout;
