'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// Temp comment
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config')[env];
