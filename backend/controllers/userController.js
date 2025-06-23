exports.test = (req, res) => {
  console.log('Received request for /api/test');
  res.status(200).json({ message: 'Backend is running!' });
};