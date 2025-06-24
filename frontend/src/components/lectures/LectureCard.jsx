import React from 'react';
import axios from 'axios';

const LectureCard = ({ lecture, onRegister }) => {
  const handleRegister = async () => {
    try {
      await axios.post('/api/registrations', { lecture_id: lecture.id });
      onRegister();
    } catch (err) {
      alert('Registration failed!');
      console.error(err);
    }
  };

  return (
    <div className="bg-[#CAE5FF] p-4 rounded-lg shadow-md hover:bg-[#89BBFE] transition">
      <h3 className="text-xl font-semibold text-[#1D1E2C]">{lecture.title}</h3>
      <p className="text-sm text-[#59656F] mt-1">{lecture.description}</p>
      <p className="text-sm mt-2 text-[#1D1E2C] font-medium">Time: {lecture.time_slot}</p>
      <p className="text-sm text-[#1D1E2C]">Date: {lecture.date}</p>
      <p className="text-sm mt-1 text-[#1D1E2C] font-medium">Semester: {lecture.semester}</p>
      <button
        onClick={handleRegister}
        className="mt-4 bg-[#1D1E2C] text-white px-4 py-2 rounded hover:bg-[#59656F]"
      >
        Register
      </button>
    </div>
  );
};

export default LectureCard;
