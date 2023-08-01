/**
 * @description Http Server
 */

/** Dependencies */
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');
// Temp comment

const PassportMiddleware = require('./server/middlewares/PassportMiddleware');
const router = require('./server/routes');

/** Instantiate Server */
