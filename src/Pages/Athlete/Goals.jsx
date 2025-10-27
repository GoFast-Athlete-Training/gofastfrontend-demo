import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const navigate = useNavigate();
  const [goalTime, setGoalTime] = useState("");
  const [raceDate, setRaceDate] = useState("");
  const [raceDistance, setRaceDistance] = useState("5K");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save goals
    localStorage.setItem('runnerGoals', JSON.stringify({
      goalTime, raceDate, raceDistance
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Set Your Goals</h1>
          <p className="text-gray-600">What do you want to achieve?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Goal Time</label>
            <input
              type="text"
              value={goalTime}
              onChange={(e) => setGoalTime(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              placeholder="e.g., 18:30"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Race Date</label>
            <input
              type="date"
              value={raceDate}
              onChange={(e) => setRaceDate(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Race Distance</label>
            <select
              value={raceDistance}
              onChange={(e) => setRaceDistance(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
            >
              <option value="5K">5K</option>
              <option value="10K">10K</option>
              <option value="Half Marathon">Half Marathon</option>
              <option value="Marathon">Marathon</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            Set Goals
          </button>
        </form>
      </div>
    </div>
  );
};

export default Goals;
