/**
 * @description Define Test API Routes
 */
// Temp comment

// Test API Router
const testApiRouter = require('express').Router();

// Validator Middleware
const TestApiValidator = require('../../middlewares/validators/TestApiValidator');

// Controller
const TestApiController = require('../../controllers/TestApiController');

// Add Routes
testApiRouter.post('/search', TestApiValidator.searchTests, TestApiController.searchTests);
testApiRouter.get(
  '/:testId/videos',
