/**
 * @description Define Mobile API Routes
 */

// Mobile API Router
const mobileApiRouter = require('express').Router();

// Validator Middleware

// Controller
const MobileApiController = require('../../controllers/MobileApiController');

// Add Routes
mobileApiRouter.post('/tests', MobileApiValidator.createTest, MobileApiController.createTest);
mobileApiRouter.post('/videos', MobileApiValidator.createVideo, MobileApiController.createVideo);

