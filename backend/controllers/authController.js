const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Environment variables
require('dotenv').config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Error: SUPABASE_URL or SUPABASE_KEY is missing in .env');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const authController = {
  googleAuth: async (req, res) => {
    console.log('Google Auth endpoint hit', { request: req.body });
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/dashboard' 
        }
      });
      if (error) {
        console.error('Supabase Google Auth error:', error.message, { details: error });
        return res.status(500).json({ error: error.message });
      }
      console.log('Redirecting to Google Auth URL:', data.url);
      res.redirect(data.url);
    } catch (error) {
      console.error('Unexpected error in Google Auth:', error.stack);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  callback: async (req, res) => {
    console.log('Callback endpoint hit with query:', req.query);
    const { code } = req.query;
    if (!code) {
      console.error('No authorization code in callback', { query: req.query });
      return res.status(400).send('Authorization code missing');
    }
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        console.error('Error exchanging code for session:', error.message, { details: error });
        return res.status(500).json({ error: error.message });
      }
      console.log('Session exchanged, user data:', data.user);
      const token = data.session.access_token; // Supabase access token
      console.log('Redirecting to dashboard with token:', token);
      res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    } catch (error) {
      console.error('Unexpected error in callback:', error.stack);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  logout: async (req, res) => {
    console.log('Logout endpoint hit', { session: req.session });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message, { details: error });
        return res.status(500).json({ error: error.message });
      }
      console.log('User logged out');
      res.redirect('http://localhost:3000/');
    } catch (error) {
      console.error('Unexpected logout error:', error.stack);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUser: async (req, res) => {
    console.log('Get user endpoint hit', { headers: req.headers });
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Get user error:', error.message, { details: error });
        return res.json({ authenticated: false });
      }
      console.log('User data retrieved:', user);
      res.json({ user, authenticated: true });
    } catch (error) {
      console.error('Unexpected get user error:', error.stack);
      res.json({ authenticated: false });
    }
  }
};

module.exports = authController;