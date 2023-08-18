/**
 * @description Mobile API Controller
 */
/** Dependencies */
const Joi = require('joi');

const { Test, Video } = require('../database/models');

/**
 * @description Create Test
 */
const createTest = async (req, res) => {
  const { reqData } = req;

  const test = await Test.create({
    deviceId: reqData.deviceId,
    patientId: reqData.patientId,
    testId: reqData.testId,
    latitude: reqData.lat,
    longitude: reqData.lng,
