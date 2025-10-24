import React from "react";
import { useNavigate } from "react-router-dom";

const NextGoals = () => {
  const navigate = useNavigate();

  const goalCategories = [
    {
      category: "Performance Goals",
      goals: [
        "Sub-3:20 marathon",
        "5K PR under 19:00", 
        "Complete a 50K ultra",
        "Qualify for Boston 2027"
      ]
    },
    {
      category: "Training Goals", 
      goals: [
        "Consistent 50+ mile weeks",
        "Add strength training 2x/week",
        "Improve running form",
        "Build mental toughness"
      ]
    },
    {
      category: "Health Goals",
      goals: [
        "Maintain injury-free training",
        "Improve sleep quality",
        "Better nutrition habits",
        "Stress management"
      ]
    }
  ];

  const nextRaces = [
    {
      name: "Chicago Marathon",
      date: "October 2025",
      goal: "Sub-3:20",
      status: "Planning"
    },
    {
      name: "Boston Marathon", 
      date: "April 2026",
      goal: "Sub-3:15",
      status: "Qualified"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Next Goals</h1>
              <p className="text-gray-600">Set your next training targets</p>
            </div>
            <button
              onClick={() => navigate("/post-race-hub")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Post Race
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Goal Categories */}
        <div className="space-y-6 mb-8">
          {goalCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Next Races */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Next Races</h2>
          <div className="space-y-4">
            {nextRaces.map((race, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{race.name}</h3>
                  <p className="text-gray-600">{race.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">{race.goal}</p>
                  <p className="text-sm text-gray-500">{race.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Next Steps</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-800">Take 2-3 weeks to fully recover before setting new goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-800">Reflect on what worked well in your training</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-800">Identify areas for improvement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-800">Set realistic, time-bound goals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextGoals;
