// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow only your main site to call the API
app.use(cors({
  origin: 'https://bernardolopez.me',
  methods: ['GET', 'POST'],
}));

app.use(cors({ origin: "https://bernardolopez.me" }));

// Test route
app.get('/api/test', (req, res) => {
  res.json({
    message: '✅ Express server is running correctly with CORS enabled!',
    timestamp: new Date().toISOString(),
  });
});

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Express Server is Live</h1><p>Go to /api/test to check JSON response.</p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
