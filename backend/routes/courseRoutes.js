const express = require('express');
const router = express.Router();
const { getAllCourses, getCourseById } = require('../controllers/courseController');

// GET all courses
router.get('/', getAllCourses);

// GET course by ID
router.get('/:id', getCourseById);

module.exports = router;
