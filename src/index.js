import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import 'custom-event-polyfill';
// import moment from 'moment';
// import 'moment/locale/ru';
import { Provider } from 'mobx-react';

import stores from '@stores';

// import route
import App from './App';

// config
import './common/config/api';

// moment.locale('ru');

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
