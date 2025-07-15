import { useEffect, useState } from 'react';
import axios from 'axios';
import LectureCard from './LectureCard';

const LectureList = () => {
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLectures = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('http://localhost:5001/api/lectures', {
        withCredentials: true,
      });
      setLectures(res.data);
    } catch (err) {
      setError('Failed to load lectures');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" aria-live="polite">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl" aria-live="polite">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Guest Lectures</h2>
        {lectures.length === 0 ? (
          <div className="text-center text-gray-600 text-lg" aria-live="polite">
            No lectures available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureList;