import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const res = await axios.get('http://localhost:5001/api/profiles/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile');
        console.error('Error fetching profile:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
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

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl" aria-live="polite">
        Profile not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Profile</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Name:</span>
            <span className="text-sm text-gray-600">{profile.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Email:</span>
            <span className="text-sm text-indigo-600">{profile.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Branch:</span>
            <span className="text-sm text-gray-600">{profile.branch}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">Graduation Year:</span>
            <span className="text-sm text-gray-600">{profile.graduation_year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;