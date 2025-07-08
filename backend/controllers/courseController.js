const supabase = require('../config/supabase');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', parseInt(id))
      .single();

    if (error || !data) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(data);
  } catch (err) {
    console.error('Error fetching course by ID:', err);
    res.status(500).json({ message: 'Failed to fetch course details' });
  }
};

module.exports = { getAllCourses, getCourseById };
