import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CommonLayout from '@layouts/CommonLayout';
import checkDevice from '@utils/checkDevice';
import useLayout from '@hooks/useLayout';
import { MOBILE_WIDTH } from '@constants';
import isVisible from './utils/isVisible';

const getKey = (pathname) => {
  if (pathname.includes('map')) {
    return 'map';
  }

  if (pathname.includes('cards')) {
    return 'cards';
  }

  return pathname;
};

const ReactTransitionGroup = (props) => {
  const { routes, location } = props;

  const myReg = /map\/\d/;
  const myRegCards = /cards\/\d/;

  const isDisplayOverlay =
    myReg.test(location.pathname) || myRegCards.test(location.pathname);
  const isDevice = checkDevice();
  const isDesktop = useLayout(MOBILE_WIDTH);
  const isNotVideo = isDevice || !isDesktop;

  const key = getKey(location.pathname);
  const timeout = key === '/' && !isNotVideo ? 4800 : 0;

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={key} classNames="route" timeout={timeout}>
        {(status) => (
          <Switch location={location} key={key}>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                render={(props) => {
                  const PageContent = route.component;

                  return (
                    <CommonLayout
                      {...route}
                      path={route.path}
                      isVisibleFooter={!isDisplayOverlay}
                    >
                      <PageContent
                        {...props}
                        transitionStatus={status}
                        isVisiblePage={isVisible(status)}
                      />
                    </CommonLayout>
                  );
                }}
              />
            ))}
          </Switch>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactTransitionGroup.propTypes = {
  location: PropTypes.shape().isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withRouter(ReactTransitionGroup);
