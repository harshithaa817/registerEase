import { useNavigate } from 'react-router-dom';

const LectureCard = ({ lecture }) => {
  const navigate = useNavigate();

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div
      onClick={() => navigate(`/dashboard/lectures/${lecture.id}`)}
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/dashboard/lectures/${lecture.id}`)}
    >
      <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <h3 className="text-xl font-semibold text-white px-4 text-center line-clamp-2">
          {lecture.title}
        </h3>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{lecture.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-indigo-600">{lecture.speaker}</span>
          <span className="text-sm text-gray-500">{formatDate(lecture.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default LectureCard;