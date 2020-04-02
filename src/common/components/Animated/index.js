/* eslint-disable */
import React, { PureComponent } from 'react';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import { timeShape, easingShape } from './propTypes';

import styles from './index.styl';

class Animated extends PureComponent {
  constructor(props) {
    super(props);
    this.styles = styles;
    this.state = props.animateOnMount ? this.getAnimatedState(props) : {};
  }

  componentWillReceiveProps(nextProps) {
    const { isVisible } = nextProps;

    if (isVisible !== this.props.isVisible) {
      this.setState(this.getAnimatedState(nextProps));
    }
  }

  getAnimatedState = (props) => {
    const {
      isVisible,
      animationIn,
      animationOut,
      duration,
      easing,
      delay,
    } = props;

    const type = isVisible ? 'in' : 'out';

    return {
      animation: isVisible ? animationIn : animationOut,
      delay: delay[type] === 0 || delay[type] ? delay[type] : delay,
      easing: easing[type] ? easing[type] : easing,
      duration:
        duration[type] === 0 || duration[type] ? duration[type] : duration,
    };
  };

  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  render() {
    const {
      tag,
      style,
      className,
      children,
      innerRef,
      isVisible,
      animationFillMode,
    } = this.props;

    const { delay, easing, duration, animation } = this.state;

    const Tag = tag;

    style.opacity = animation ? null : Number(isVisible);

    return (
      <Tag
        className={classnames(
          className,
          this.styles.animated,
          this.styles[animation],
        )}
        ref={innerRef}
        style={{
          animationDelay: delay ? `${delay}ms` : null,
          animationTimingFunction: easing,
          animationDuration: duration ? `${duration}ms` : null,
          pointerEvents: isVisible ? 'all' : 'none',
          animationFillMode: animationFillMode || null,
          ...style,
        }}
        onClick={this.handleClick}
      >
        {children}
      </Tag>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tag: PropTypes.string,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  animationFillMode: PropTypes.string,
  delay: timeShape,
  duration: timeShape,
  easing: easingShape,
  animateOnMount: PropTypes.bool,
  children: PropTypes.any,
  data: PropTypes.any,
  onClick: PropTypes.func,
};

Animated.defaultProps = {
  tag: 'div',
  style: {},
  isVisible: true,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  delay: 0,
  duration: 300,
  easing: 'ease',
  animateOnMount: false,
};

export default Animated;
