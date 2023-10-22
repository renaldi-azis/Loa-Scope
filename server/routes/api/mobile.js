/**
 * @description Define Mobile API Routes
 */

const mobileApiRouter = require('express').Router();

// Validator Middleware
const MobileApiValidator = require('../../middlewares/validators/MobileApiValidator');

// Controller
const MobileApiController = require('../../controllers/MobileApiController');

// Add Routes
mobileApiRouter.post('/tests', MobileApiValidator.createTest, MobileApiController.createTest);
mobileApiRouter.post('/videos', MobileApiValidator.createVideo, MobileApiController.createVideo);

