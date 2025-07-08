import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LectureDetails = () => {
  const { id } = useParams();
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/lectures/${id}`, { withCredentials: true })
      .then(res => setLecture(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!lecture) return <div className="p-6 text-xl">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1D1E2C] mb-4">{lecture.title}</h2>
      <p className="text-gray-700 mb-2">{lecture.description}</p>
      <p className="text-gray-700 mb-2">Speaker: {lecture.speaker}</p>
      <p className="text-gray-700 mb-4">Date: {lecture.date}</p>
    </div>
  );
};

export default LectureDetails;
