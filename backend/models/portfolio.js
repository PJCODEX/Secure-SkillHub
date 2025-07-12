const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String, default: '' },
  skills: { type: [String], default: [] },
  projects: { type: [String], default: [] }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
