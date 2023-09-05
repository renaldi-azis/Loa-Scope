/**
 * @description Define Test API Routes
 */

const testApiRouter = require('express').Router();

// Validator Middleware
const TestApiValidator = require('../../middlewares/validators/TestApiValidator');

// Controller
const TestApiController = require('../../controllers/TestApiController');
