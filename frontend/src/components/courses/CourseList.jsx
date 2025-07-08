import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/courses', { withCredentials: true });
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div
            key={course.id}
            onClick={() => navigate(`/dashboard/courses/${course.id}`)}
            className="cursor-pointer bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition-transform border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-[#1D1E2C] mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-2">{course.description?.slice(0, 60) || 'No description provided...'}</p>
            <p className="text-sm text-gray-500">Semester: {course.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
