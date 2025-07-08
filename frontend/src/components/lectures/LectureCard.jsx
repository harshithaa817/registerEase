import { useNavigate } from 'react-router-dom';

const LectureCard = ({ lecture }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dashboard/lectures/${lecture.id}`)}
      className="cursor-pointer bg-white border border-[#FEEBCB] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 w-full max-w-md mx-auto"
    >
      <div className="bg-[#FEEBCB] h-36 flex items-center justify-center text-[#1D1E2C] text-2xl font-bold">
        {lecture.title}
      </div>
      <div className="p-4">
       
      </div>
    </div>
  );
};

export default LectureCard;
