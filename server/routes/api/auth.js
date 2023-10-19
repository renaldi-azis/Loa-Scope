/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Temp comment
// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
