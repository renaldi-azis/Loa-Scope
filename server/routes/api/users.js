 * @description Define User API Routes
 */

// User API Router
const userApiRouter = require('express').Router();

// Validator Middleware
const UserApiValidator = require('../../middlewares/validators/UserApiValidator');

// Controller
const UserApiController = require('../../controllers/UserApiController');
