const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

console.log('Middleware initialized:', {
  json: true,
  cors: 'http://localhost:3000 with credentials'
});

// Mount auth routes
app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
  console.log('Available routes:', {
    googleAuth: 'http://localhost:5000/auth/google',
    callback: 'http://localhost:5000/auth/callback',
    logout: 'http://localhost:5000/auth/logout',
    user: 'http://localhost:5000/auth/user'
  });
});