/**
 * @description Define Profile API Routes
 */

// Profile API Router
const profileApiRouter = require('express').Router();

// Validator Middleware
const ProfileApiValidator = require('../../middlewares/validators/ProfileApiValidator');

const ProfileApiController = require('../../controllers/ProfileApiController');

// Add Routes
profileApiRouter.post(
  '/change-password',
  ProfileApiValidator.changePassword,
  ProfileApiController.changePassword,
);

