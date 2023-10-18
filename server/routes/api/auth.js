/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Validator Middleware
// Temp comment
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
