/**
 * @description Http Server
 */

/** Dependencies */
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');

const PassportMiddleware = require('./server/middlewares/PassportMiddleware');
const router = require('./server/routes');

/** Instantiate Server */
const app = express();

/** Load routes */
app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.post('/call-external-url', async (req, res) => {
  const { method, url, data } = req.body;
  const options = {
    method,
    url,
  };
  if (data) {
    if (method === 'GET') {
      options.params = data;
    } else {
      options.body = data;
    }
  }
  try {
    const { data } = await axios(options);
    res.json(data);
  } catch (error) {
    if (error.response && error.response.status) {
      return res.status(error.response.status).json(error.response.data);
