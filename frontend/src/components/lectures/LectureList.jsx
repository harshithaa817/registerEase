import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LectureCard from './LectureCard';

const LectureList = () => {
  const [lectures, setLectures] = useState([]);

  const fetchLectures = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/lectures', { withCredentials: true });
      setLectures(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1D1E2C] mb-4">Available Guest Lectures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lectures.map(lecture => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
};

export default LectureList;
