require('dotenv').config();

// Temp comment
module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
  },
  production: {
