import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RouterTransitionGroup from '@components/ReactTransitionGroup';
import { PAGE_TRANSITION } from '@constants/index';

import Animated from '@components/Animated';
import Preloader from '@components/Preloader';

import routes from './routes';

const SAFETY__TIME = 1500;
const SAFETY__TIMEOUT = 1000;
const ANIMATION__DURATION = 600;

const App = inject('MainStore')(
  observer(({ MainStore }) => {
    const { getVisiblePreload, hidePreloader } = MainStore;
    const [hasTimeot, setHasTimeot] = useState(false);

    // const { changeScreenSizes } = VideoStore;

    const handleDOMContentLoaded = () => {
      if (hasTimeot) {
        hidePreloader(false);
      } else {
        setTimeout(() => {
          hidePreloader(false);
        }, SAFETY__TIMEOUT);
      }
    };

    useEffect(() => {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

      setTimeout(() => {
        setHasTimeot(true);
      }, SAFETY__TIME);
    }, []);

    return (
      <BrowserRouter>
        <Animated
          duration={{
            in: 0,
            out: ANIMATION__DURATION,
          }}
          isVisible={getVisiblePreload}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 100,
          }}
        >
          <Preloader />
        </Animated>
        <RouterTransitionGroup routes={routes} timeout={PAGE_TRANSITION} />
      </BrowserRouter>
    );
  }),
);

export default App;
