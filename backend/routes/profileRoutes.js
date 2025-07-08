const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');

router.get('/me', getProfile); // this becomes /api/profiles/me

module.exports = router;
