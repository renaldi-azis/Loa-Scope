/**
 * @description Define User API Routes
 */

// User API Router
const userApiRouter = require('express').Router();
// Temp comment

// Validator Middleware
const UserApiValidator = require('../../middlewares/validators/UserApiValidator');

// Controller
const UserApiController = require('../../controllers/UserApiController');

// Add Routes
userApiRouter.get('/', UserApiController.getUsers);
