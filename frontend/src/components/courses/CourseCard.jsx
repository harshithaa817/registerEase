import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white border border-blue-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition w-full max-w-sm mx-auto cursor-pointer"
      onClick={() => navigate(`/dashboard/courses/${course.id}`)}
    >
      <div className="bg-blue-100 h-36 flex items-center justify-center text-blue-900 text-xl font-bold">
        {course.title}
      </div>
      <div className="p-4">
       
       
      </div>
    </div>
  );
};

export default CourseCard;
