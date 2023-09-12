/**
 * @description Define Profile API Routes
 */

// Profile API Router
const profileApiRouter = require('express').Router();
// Temp comment

// Validator Middleware
const ProfileApiValidator = require('../../middlewares/validators/ProfileApiValidator');

// Controller
const ProfileApiController = require('../../controllers/ProfileApiController');
