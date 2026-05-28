const express = require('express');
const path = require('path');
const config = require('./config/env');

const app = express();
const publicDir = path.join(__dirname, '..', 'public');

app.use(express.static(publicDir));

app.get('/health', (req, res) => {
  res.json({
    service: 'web-app',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

app.get('/config.js', (req, res) => {
  res.type('application/javascript');
  res.send(
    `window.APP_CONFIG = ${JSON.stringify({
      authServiceUrl: config.authServiceUrl,
      taskServiceUrl: config.taskServiceUrl,
    })};`
  );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(config.port, config.host, () => {
  console.log(`web-app running on http://${config.host}:${config.port}`);
});
