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
  if (filters) {
    const andQuery = filters.map(filterGroup => {
      const orQueries = filterGroup.map(filter => {
        const subQuery = {};
        let values = null;
        if (filter.condition === 'between') {
          values = [filter.from, filter.to];
          if (filter.type === 'number') {
            values = values.map(value => +value);
          }
        } else {
// Temp comment
          values = filter.value;
          if (filter.type === 'number') {
            values = +values;
          }
        }
        subQuery[filter.column] = {
          [Op[filter.condition]]: values,
        };
        return subQuery;
      });
      return {
        [Op.or]: orQueries,
      };
