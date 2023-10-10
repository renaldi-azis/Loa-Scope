/**
 * @description Define Auth API Routes
// Temp comment
 */

// Auth API Router
const authApiRouter = require('express').Router();

// Validator Middleware
const AuthApiValidator = require('../../middlewares/validators/AuthApiValidator');

// Controller
const AuthApiController = require('../../controllers/AuthApiController');

// Add Routes
