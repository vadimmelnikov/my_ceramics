import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';
import { Link, withRouter } from 'react-router-dom';

import Animated from '@components/Animated';
import Meta from '@components/Meta';

import close from '@assets/icons/icon-close.image.svg';
import useEventListener from '@hooks/useEventListener';
import data from '@data';

import { ESCAPE_KEY, RIGHT_ARROW_KEY, LEFT_ARROW_KEY } from '@constants';
import styles from './styles.styl';

const Popup = ({ id, match, history, isVisible }) => {
  const [correctId, changeCorrectId] = useState(id);

  const currentElement = data.find((item) => item.id === Number(correctId));
  const currentIndex = data.findIndex((item) => item.id === Number(correctId));

  const {
    title,
    icon,
    picWide,
    isTrue,
    link,
    descriptionPreview,
  } = currentElement;

  const backUrl = match.url.includes('cards') ? '/cards' : '/map';

  const goBack = () => {
    history.push(backUrl);
  };

  const handleNextArticleClick = () => {
    if (data.length - 1 > 0 && data.length - 1 !== currentIndex) {
      history.push(`${backUrl}/${data[currentIndex + 1].id}`);
      changeCorrectId(Number(correctId) + 1);
    }
  };

  const handlePrevArticleClick = () => {
    if (currentIndex !== 0) {
      history.push(`${backUrl}/${data[currentIndex - 1].id}`);
      changeCorrectId(Number(correctId) - 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === ESCAPE_KEY) {
      e.preventDefault();
      goBack();
    }
    if (e.keyCode === RIGHT_ARROW_KEY) {
      e.preventDefault();
      handleNextArticleClick();
    }
    if (e.keyCode === LEFT_ARROW_KEY) {
      e.preventDefault();
      handlePrevArticleClick();
    }
  };

  useEventListener('keydown', handleKeyPress);

  return (
    <Swipeable
      onSwipedLeft={handleNextArticleClick}
      onSwipedRight={handlePrevArticleClick}
    >
      <Meta
        title={currentElement.title}
        description={currentElement.metaDescription}
        preview={currentElement.picture}
      />
      <div className={styles.root}>
        <Link className={styles.cross} to={backUrl}>
          <img src={close} alt="close" />
        </Link>
        <button className={styles.overlay} onClick={goBack} type="button" />
        <div className={styles.wrapper}>
          <ul className={styles.grid}>
            <li className={styles.gridItem}>
              <div className={styles.container}>
                <Animated
                  isVisible={isVisible}
                  delay={{
                    in: 100,
                    out: 0,
                  }}
                  duration={{
                    in: 700,
                    out: 400,
                  }}
                  animationIn="fadeInLeftSmall"
                  animationOut="fadeOutLeftSmall"
                  className={styles.filter}
                >
                  <img src={picWide} alt="pic" className={styles.img} />
                </Animated>
                <div className={styles.content}>
                  <Animated
                    className={styles.icon}
                    isVisible={isVisible}
                    duration={{
                      in: 800,
                      out: 400,
                    }}
                    delay={{
                      in: 500,
                      out: 0,
                    }}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                  >
                    <img src={icon} alt="pic" />
                  </Animated>
                  <Animated
                    tag="h3"
                    isVisible={isVisible}
                    duration={{
                      in: 800,
                      out: 400,
                    }}
                    delay={{
                      in: 500,
                      out: 0,
                    }}
                    animationIn="fadeInLeftText"
                    animationOut="fadeOutLeftSmall"
                    className={styles.number}
                  >
                    {currentIndex + 1 < 10 && '0'}
                    {`${currentIndex + 1}`}
                  </Animated>
                  <Animated
                    tag="h2"
                    isVisible={isVisible}
                    duration={{
                      in: 800,
                      out: 400,
                    }}
                    delay={{
                      in: 500,
                      out: 0,
                    }}
                    animationIn="fadeInLeftText"
                    animationOut="fadeOutLeftSmall"
                    className={styles.title}
                  >
                    <div className={styles.subText}>
                      {isTrue ? (
                        <span className={styles.isTrue}>Правда</span>
                      ) : (
                        <span className={styles.isFalse}>Миф</span>
                      )}
                    </div>
                    {title}
                  </Animated>
                </div>
              </div>
            </li>
            <li className={styles.gridItem}>
              <Animated
                isVisible={isVisible}
                duration={{
                  in: 500,
                  out: 400,
                }}
                delay={{
                  in: 300,
                  out: 0,
                }}
                animationIn="fadeInRightSmall"
                animationOut="fadeOutRightSmall"
              >
                <div className={styles.text}>{descriptionPreview}</div>
                <Link to={link} className={styles.link}>
                  Читать полностью
                </Link>
              </Animated>
            </li>
          </ul>
        </div>
      </div>
    </Swipeable>
  );
};

Popup.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isVisible: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Popup.defaultProps = {
  isVisible: false,
  id: 0,
};

export default withRouter(Popup);
