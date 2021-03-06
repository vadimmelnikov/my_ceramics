import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Meta from '@components/Meta';
// import { MOBILE_WIDTH } from '@constants';

import styles from './styles.styl';

const IndexPage = inject('MainStore')(
  observer(({ MainStore }) => {
    return (
      <div className={styles.root}>
        <Meta />
        <p>Home page</p>
      </div>
    );
  }),
);
export default withRouter(IndexPage);
