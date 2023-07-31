/**
 * @description Test API Controller
 */

/** Dependencies */
const { Op } = require('sequelize');
const { Test } = require('../database/models');

/**
 * @description Search tests
 */
const searchTests = async (req, res) => {
  const { reqData } = req;
  const { filters } = reqData;
  let query = {};
    const andQuery = filters.map(filterGroup => {
      const orQueries = filterGroup.map(filter => {
        const subQuery = {};
        let values = null;
        if (filter.condition === 'between') {
