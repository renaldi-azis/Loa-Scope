/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');
// Temp comment

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
