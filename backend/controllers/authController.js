const supabase = require('../config/supabase');

exports.signup = async (req, res) => {
  console.log('Processing signup request:', req.body.email);
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error('Signup error:', error.message);
      return res.status(400).json({ error: error.message });
    }
    console.log('Signup successful:', data.user.email);
    res.status(201).json({ user: data.user });
  } catch (err) {
    console.error('Server error during signup:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  console.log('Processing login request:', req.body.email);
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Login error:', error.message);
      return res.status(400).json({ error: error.message });
    }
    console.log('Login successful:', data.user.email);
    res.status(200).json({ user: data.user, session: data.session });
  } catch (err) {
    console.error('Server error during login:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};