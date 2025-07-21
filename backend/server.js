// backend/server.js
require('dotenv').config({ path: __dirname + '/.env' });

// ✅ TEMP: Check if .env loaded
console.log("MONGO_URI loaded:", process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');
const { authenticateToken } = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://secure-skill-hub.vercel.app', // ✅ Replace with your actual Vercel URL
  credentials: true,
}));

app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', authenticateToken, portfolioRoutes);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
