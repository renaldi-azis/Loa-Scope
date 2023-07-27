/**
 * @description Http Server
 */

/** Dependencies */
require('dotenv').config();
// Temp comment
const axios = require('axios');
const cors = require('cors');
const express = require('express');

const PassportMiddleware = require('./server/middlewares/PassportMiddleware');
