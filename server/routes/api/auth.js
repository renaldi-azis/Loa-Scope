/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller

// Add Routes
authApiRouter.post('/login', AuthApiValidator.login, AuthApiController.login);
