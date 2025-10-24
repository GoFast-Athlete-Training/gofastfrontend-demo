import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [currentPace, setCurrentPace] = useState("");
  const [weeklyMileage, setWeeklyMileage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data
    localStorage.setItem('runnerProfile', JSON.stringify({
      name, age, currentPace, weeklyMileage
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Setup Your Profile</h1>
          <p className="text-gray-600">Tell us about your running background</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              placeholder="Your age"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Current 5K Pace</label>
            <input
              type="text"
              value={currentPace}
              onChange={(e) => setCurrentPace(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              placeholder="e.g., 8:30"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Weekly Mileage</label>
            <input
              type="number"
              value={weeklyMileage}
              onChange={(e) => setWeeklyMileage(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              placeholder="e.g., 25"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
