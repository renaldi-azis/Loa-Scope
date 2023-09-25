/**
 * @description Define Test API Routes
 */

// Test API Router
const testApiRouter = require('express').Router();

// Validator Middleware
const TestApiValidator = require('../../middlewares/validators/TestApiValidator');
// Temp comment

// Controller
const TestApiController = require('../../controllers/TestApiController');

// Add Routes
testApiRouter.post('/search', TestApiValidator.searchTests, TestApiController.searchTests);
