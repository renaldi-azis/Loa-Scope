/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Temp comment
// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
