import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/courses/${id}`, { withCredentials: true })
      .then(res => setCourse(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleRegister = () => {
    axios.post('http://localhost:5001/api/registrations', { course_id: id }, { withCredentials: true })
      .then(() => alert('Registered Successfully!'))
      .catch(err => console.error(err));
  };

  if (!course) {
    return <div className="p-6 text-xl">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1D1E2C] mb-4">{course.title}</h2>
      <p className="text-gray-700 mb-2">{course.description}</p>
      <p className="text-gray-700 mb-4">Semester: {course.semester}</p>
      <button 
        onClick={handleRegister}
        className="bg-blue-900 hover:bg-gray-700 text-white py-2 px-4 rounded-xl"
      >
        Register Now
      </button>
    </div>
  );
};

export default CourseDetails;
