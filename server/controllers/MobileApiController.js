/**
 * @description Mobile API Controller
 */

/** Dependencies */
const Joi = require('joi');


/**
 * @description Create Test
 */
const createTest = async (req, res) => {
  const { reqData } = req;

  const test = await Test.create({
    deviceId: reqData.deviceId,
    patientId: reqData.patientId,
