/**
 * @description Mobile API Controller
 */

/** Dependencies */
const Joi = require('joi');

const { Test, Video } = require('../database/models');

/**
 */
const createTest = async (req, res) => {
