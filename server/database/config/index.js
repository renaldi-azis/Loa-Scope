require('dotenv').config();

module.exports = {
  development: {
  },
  production: {
    use_env_variable: 'DATABASE_URL',
