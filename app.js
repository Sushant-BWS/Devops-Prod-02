const express = require('express');
const client = require('prom-client');

const app = express();

// metrics
client.collectDefaultMetrics();

app.get('/', (req, res) => {
  res.send("CI/CD + Monitoring Working 🚀");
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(4000, () => console.log("Server running on 4000"));

