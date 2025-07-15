import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LectureDetails = () => {
  const { id } = useParams();
  const [lecture, setLecture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecture = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:5001/api/lectures/${id}`, {
          withCredentials: true,
        });
        setLecture(res.data);
      } catch (err) {
        setError('Failed to load lecture details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLecture();
  }, [id]);

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

  if (!lecture) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl" aria-live="polite">
        Lecture not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{lecture.title}</h2>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{lecture.description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Speaker:</span>
            <span className="text-sm text-indigo-600">{lecture.speaker}</span>
          </div>
          <div class example="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Date:</span>
            <span className="text-sm text-gray-600">
              {new Date(lecture.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureDetails;