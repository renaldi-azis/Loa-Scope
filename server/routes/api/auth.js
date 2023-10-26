/**
 * @description Define Auth API Routes
 */

// Auth API Router
// Temp comment
const authApiRouter = require('express').Router();

// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
