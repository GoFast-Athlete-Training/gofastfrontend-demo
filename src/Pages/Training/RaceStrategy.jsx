import React from "react";
import { useNavigate } from "react-router-dom";

const RaceStrategy = () => {
  const navigate = useNavigate();

  // Race strategy data
  const strategy = {
    goalTime: "3:25:00",
    goalPace: "7:49/mile",
    splits: [
      { mile: "1-5", pace: "7:50", description: "Easy start, find rhythm" },
      { mile: "6-10", pace: "7:45", description: "Settle into goal pace" },
      { mile: "11-15", pace: "7:45", description: "Maintain steady effort" },
      { mile: "16-20", pace: "7:50", description: "Newton Hills approach" },
      { mile: "21-26.2", pace: "7:40", description: "Push to finish" }
    ],
    nutrition: {
      preRace: "Oatmeal, banana, coffee 3 hours before",
      during: "Gel every 45 minutes, water at every station",
      postRace: "Protein shake within 30 minutes"
    },
    keyPoints: [
      "Start conservatively - first 5 miles are downhill",
      "Newton Hills (16-21) are the make-or-break section",
      "Heartbreak Hill at mile 20.5 - stay strong",
      "Final 6 miles are mostly downhill - use gravity"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Race Strategy</h1>
              <p className="text-gray-600">Your Boston Marathon race plan</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/course-visualization")}
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              >
                View Course Map
              </button>
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

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Goal Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Race Goals 🎯</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">{strategy.goalTime}</p>
              <p className="text-gray-600">Goal Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{strategy.goalPace}</p>
              <p className="text-gray-600">Goal Pace</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">BQ</p>
              <p className="text-gray-600">Qualification</p>
            </div>
          </div>
        </div>

        {/* Pace Strategy */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Pace Strategy 📊</h2>
          <div className="space-y-4">
            {strategy.splits.map((split, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <p className="font-semibold text-lg">{split.mile}</p>
                    <p className="text-sm text-gray-500">miles</p>
                  </div>
                  <div>
                    <p className="font-bold text-xl">{split.pace}/mile</p>
                    <p className="text-gray-600 text-sm">{split.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Target Split</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Plan */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Nutrition Plan 🍌</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Pre-Race</h3>
              <p className="text-gray-700">{strategy.nutrition.preRace}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">During Race</h3>
              <p className="text-gray-700">{strategy.nutrition.during}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Post-Race</h3>
              <p className="text-gray-700">{strategy.nutrition.postRace}</p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Key Race Points 🏁</h2>
          <div className="space-y-3">
            {strategy.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-blue-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceStrategy;
