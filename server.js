/**
 * @description Http Server
 */

/** Dependencies */
const axios = require('axios');
const cors = require('cors');
const express = require('express');

const PassportMiddleware = require('./server/middlewares/PassportMiddleware');
const router = require('./server/routes');

/** Instantiate Server */
