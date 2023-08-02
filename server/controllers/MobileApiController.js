/**
 * @description Mobile API Controller
 */
// Temp comment

/** Dependencies */
const Joi = require('joi');

const { Test, Video } = require('../database/models');

/**
 * @description Create Test
 */
const createTest = async (req, res) => {
  const { reqData } = req;
