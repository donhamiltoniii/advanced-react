import React from 'react';
import ReactDOMServer from 'react-dom/server';

import axios from 'axios';
import config from '../config';
import StateApi from '../state-api';

import App from '../components/app';

const serverRender = async () => {
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(response.data.data);

  return {
    initialData: response.data.data,
    initialMarkUp: ReactDOMServer.renderToString(<App store={store} />)
  };
};

export default serverRender;
