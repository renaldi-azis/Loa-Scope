require('dotenv').config();

module.exports = {
    use_env_variable: 'DATABASE_URL',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
