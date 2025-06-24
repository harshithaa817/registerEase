import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get('/api/registrations/me')
      .then(res => setRegistrations(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1D1E2C] mb-4">My Registrations</h2>
      <div className="space-y-4">
        {registrations.length === 0 ? (
          <p className="text-[#59656F]">No registrations found.</p>
        ) : (
          registrations.map((reg, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#CAE5FF]">
              <p className="font-semibold text-[#1D1E2C]">
                {reg.course_title || reg.lecture_title}
              </p>
              {reg.time_slot && <p className="text-sm text-[#59656F]">Time Slot: {reg.time_slot}</p>}
              <p className="text-sm text-[#59656F]">Semester: {reg.semester}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
