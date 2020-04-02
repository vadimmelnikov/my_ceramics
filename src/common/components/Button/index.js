import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.styl';

const Button = ({ className, children, onClick, tabIndex }) => (
  <button
    className={cx(styles.root, className)}
    onClick={onClick}
    type="button"
    tabIndex={tabIndex}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  tabIndex: 1,
};

export default Button;
