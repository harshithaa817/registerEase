const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/google', authController.googleAuth);
router.get('/callback', authController.callback);
router.get('/logout', authController.logout);
router.get('/user', authController.getUser);

console.log('Auth routes initialized:', {
  google: '/auth/google',
  callback: '/auth/callback',
  logout: '/auth/logout',
  user: '/auth/user'
});

module.exports = router;