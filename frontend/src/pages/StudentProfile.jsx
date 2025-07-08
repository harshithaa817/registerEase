import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/profiles/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      withCredentials: true
    })
    .then(res => setProfile(res.data))
    .catch(err => console.error(err));
  }, []);

  if (!profile) return <div className="p-6 text-xl">Loading profile...</div>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-[#1D1E2C]">Student Profile</h2>
      <div className="bg-[#CAE5FF] p-4 rounded-xl shadow">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Branch:</strong> {profile.branch}</p>
        <p><strong>Graduation Year:</strong> {profile.graduation_year}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
