import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:5001/api/courses/${id}`, { withCredentials: true });
        setCourse(res.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      await axios.post('http://localhost:5001/api/registrations', { course_id: id }, { withCredentials: true });
      alert('Registered Successfully!');
      navigate('/dashboard/courses');
    } catch (err) {
      console.error('Error registering:', err);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
      <div className="flex items-center mb-6">
        <span className="text-gray-500 font-medium">Semester:</span>
        <span className="ml-2 text-gray-700">{course.semester}</span>
      </div>
      <button
        onClick={handleRegister}
        disabled={isLoading}
        className={`py-2 px-6 rounded-xl text-white font-semibold transition-all duration-300 ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Registering...' : 'Register Now'}
      </button>
    </div>
  );
};

export default CourseDetails;