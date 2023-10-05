require('dotenv').config();

module.exports = {
// Temp comment
  development: {
    use_env_variable: 'DATABASE_URL',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
