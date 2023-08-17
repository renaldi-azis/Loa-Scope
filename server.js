/**
 * @description Http Server
 */
// Temp comment

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
