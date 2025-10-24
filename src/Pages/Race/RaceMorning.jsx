import React from "react";
import { useNavigate } from "react-router-dom";

const RaceMorning = () => {
  const navigate = useNavigate();

  // Race day data
  const raceData = {
    name: "Boston Marathon",
    date: "April 30, 2026",
    lockedPace: "7:49/mile",
    goalTime: "3:25:00"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Race Morning</h1>
              <p className="text-gray-600">Pre-race mindset and locked-in pace</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/race-hub")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Race Hub
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Main Header */}
          <h1 className="text-4xl font-semibold mb-6 text-gray-900">You got this.</h1>

          {/* Supportive Text */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            You've already done the work.
            <br />
            You've already made the plan.
            <br />
            Now it's time to run.
          </p>

          {/* Spacer */}
          <div className="my-8 border-t border-gray-200 w-32 mx-auto" />

          {/* Race Day Tips */}
          <p className="text-md text-gray-600 mb-8">
            Stick to your plan. Trust your pacing. Hydrate and breathe.
          </p>

          {/* Locked Pace Display */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Your Locked-In Pace</h2>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {raceData.lockedPace}
            </div>
            <p className="text-blue-800">Goal Time: {raceData.goalTime}</p>
          </div>

          {/* Race Day Checklist */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">Race Day Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-yellow-800">✓ Eat breakfast 3 hours before</p>
                <p className="text-yellow-800">✓ Hydrate consistently</p>
                <p className="text-yellow-800">✓ Arrive 1 hour early</p>
              </div>
              <div className="space-y-2">
                <p className="text-yellow-800">✓ Warm up 15-20 minutes</p>
                <p className="text-yellow-800">✓ Trust your training</p>
                <p className="text-yellow-800">✓ Enjoy the experience</p>
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">You're Ready</h3>
            <p className="text-green-800">
              Every mile you've run, every early morning, every tough workout has led to this moment. 
              Trust your training, trust your pace, and trust yourself. You've got this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceMorning;
