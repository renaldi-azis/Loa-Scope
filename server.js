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
// Temp comment
app.use(cors());
app.use(express.json({}));
