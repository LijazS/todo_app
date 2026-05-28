require('dotenv').config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
  taskServiceUrl: process.env.TASK_SERVICE_URL || 'http://localhost:3002',
};

module.exports = config;
