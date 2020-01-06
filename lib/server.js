import express from 'express';
const path = require('path');

import config from './config.js';
import serverRender from './renderers/server';

import data from './test-data';

const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.json(data);
});

function listenHandler() {
  console.info(`Running on ${config.port}`);
}

app.listen(config.port, listenHandler);
