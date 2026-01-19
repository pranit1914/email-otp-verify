
require('dotenv').config();
console.log("App.js started");

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get('/ping', (req, res) => {
  res.send('ping pong pong');
});

// Auth routes (Send OTP & Verify OTP)
app.use('/api/auth', require('./routes/authRoutes'));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

// Connect database
connectDB();

