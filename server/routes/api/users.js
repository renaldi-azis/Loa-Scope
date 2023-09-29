/**
 * @description Define User API Routes
 */

// User API Router
const userApiRouter = require('express').Router();

const UserApiValidator = require('../../middlewares/validators/UserApiValidator');

// Controller
const UserApiController = require('../../controllers/UserApiController');

// Add Routes
userApiRouter.get('/', UserApiController.getUsers);
userApiRouter.post('/', UserApiValidator.createUser, UserApiController.createUser);
userApiRouter.post(
  '/:userId/change-password',
