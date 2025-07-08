const supabase = require('../config/supabase');

// Get all lectures
const getAllLectures = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('lectures')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error('Error fetching lectures:', err);
    res.status(500).json({ message: 'Failed to fetch lectures' });
  }
};

// Get lecture by ID
const getLectureById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('lectures')
      .select('*')
      .eq('id', parseInt(id))
      .single();

    if (error || !data) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(data);
  } catch (err) {
    console.error('Error fetching lecture by ID:', err);
    res.status(500).json({ message: 'Failed to fetch lecture details' });
  }
};

module.exports = { getAllLectures, getLectureById };
