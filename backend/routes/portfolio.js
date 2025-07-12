const express = require('express');
const router = express.Router();

const Portfolio = require('../models/Portfolio');

// Get portfolio of logged in user
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user });
    if (!portfolio) return res.json({ bio: '', skills: [], projects: [] });
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add or update portfolio
router.post('/', async (req, res) => {
  const { bio, skills, projects } = req.body;

  try {
    let portfolio = await Portfolio.findOne({ user: req.user });
    if (portfolio) {
      portfolio.bio = bio || portfolio.bio;
      portfolio.skills = skills || portfolio.skills;
      portfolio.projects = projects || portfolio.projects;
      await portfolio.save();
      return res.json({ msg: 'Portfolio updated' });
    }

    portfolio = new Portfolio({ user: req.user, bio, skills, projects });
    await portfolio.save();
    res.status(201).json({ msg: 'Portfolio created' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
