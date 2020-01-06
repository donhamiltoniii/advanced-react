import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from '../state-api';

import App from '../components/app';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(<App store={store} />, document.getElementById('root'));
