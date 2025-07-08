const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lectureRoutes = require('./routes/lectureRoutes');
const profileRoutes = require('./routes/profileRoutes');

require('dotenv').config();


const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',  // React frontend URL
  credentials: true
}));

console.log('✅ Middleware initialized:', {
  json: true,
  cors: 'http://localhost:3000 with credentials'
});

// Routes
app.use('/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lectures', lectureRoutes);
app.use('/api/profiles', profileRoutes);

// Start Server on port 5001 (fixed)
app.listen(5001, () => {
  console.log(`🚀 Server running on port 5001`);
  console.log('Available Routes:');
  console.log(`🔗 Google Auth: http://localhost:5001/auth/google`);
  console.log(`🔗 Callback: http://localhost:5001/auth/callback`);
  console.log(`🔗 Logout: http://localhost:5001/auth/logout`);
  console.log(`🔗 User Info: http://localhost:5001/auth/user`);
  console.log(`🔗 Get Courses: http://localhost:5001/api/courses`);
});
