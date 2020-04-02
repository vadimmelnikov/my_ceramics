import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import modsClasses from '@utils/modsClasses';

import styles from './index.styl';

class Text extends PureComponent {
  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  render() {
    const {
      className,
      size,
      tag,
      color,
      fontFamily,
      opacity,
      hover,
      textAlign,
      whiteSpace,
      textTransform,
      fontWeight,
      letterSpacing,
      children,
      html,
      pointerEvents,
      style,
      innerRef,
    } = this.props;

    const classes = modsClasses(styles,
      {
        size,
        color,
        fontFamily,
        hover,
        textAlign,
        whiteSpace,
        fontWeight,
        textTransform,
        pointerEvents,
        opacity,
        letterSpacing,
      },
    );

    const Tag = tag;

    return (
      <Tag
        ref={innerRef}
        style={{ ...style }}
        className={classnames(className, styles.root, classes)}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={html ? {__html: html} : null}
      >
        {!html ? children : null}
      </Tag>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "small-xs",
    "small-s",
    "small",
    "normal",
    "medium",
    "medium-xl",
    "big",
    "big-m",
    "big-xl",
    "large",
    "medium-16-fix",
    "big-s",
    "large-s",
  ]),
  fontWeight: PropTypes.oneOf([
    "black",
    "extra-bold",
    "bold",
    "normal",
    "medium",
    "semi-bold"
  ]),
  letterSpacing: PropTypes.oneOf([
    "small",
    "one",
  ]),
  color: PropTypes.oneOf([
    "white",
    "black",
    "silver",
    "red",
    "cod-gray",
    "gray",
    'silver-chalice',
    'silver',
  ]),
  fontFamily: PropTypes.oneOf([
    "mont",
    "play",
  ]),
  opacity: PropTypes.oneOf([
    "translucent",
    "lessHalf",
  ]),
  hover: PropTypes.oneOf(["opacity"]),
  textTransform: PropTypes.oneOf(["uppercase", "none"]),
  whiteSpace: PropTypes.oneOf(["normal", "nowrap", "prewrap"]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  pointerEvents: PropTypes.oneOf(["auto", "none"]),
  data: PropTypes.any,
  tag: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  // html: PropTypes.bool,
  style: PropTypes.object,
  innerRef: PropTypes.func
};

Text.defaultProps = {
  tag: "div",
  size: "small",
  fontWeight: "normal",
  color: "white",
  html: false,
  fontFamily: 'mont',
};

export default Text;
