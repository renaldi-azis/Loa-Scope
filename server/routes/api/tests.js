/**
 * @description Define Test API Routes
 */

// Test API Router
const testApiRouter = require('express').Router();

// Validator Middleware

// Controller
const TestApiController = require('../../controllers/TestApiController');

// Add Routes
testApiRouter.post('/search', TestApiValidator.searchTests, TestApiController.searchTests);
testApiRouter.get(
  '/:testId/videos',
  TestApiValidator.getTestVideos,
  TestApiController.getTestVideos,
);
