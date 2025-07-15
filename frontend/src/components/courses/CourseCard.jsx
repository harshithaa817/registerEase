import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto cursor-pointer transform hover:-translate-y-1"
      onClick={() => navigate(`/dashboard/courses/${course.id}`)}
    >
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-40 flex items-center justify-center text-white text-xl font-semibold tracking-tight">
        {course.title}
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Semester: {course.semester}</span>
          <span className="text-blue-600 font-medium text-sm hover:underline">View Details →</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;