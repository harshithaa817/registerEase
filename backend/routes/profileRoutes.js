const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');

router.get('/me', getProfile);

module.exports = router;