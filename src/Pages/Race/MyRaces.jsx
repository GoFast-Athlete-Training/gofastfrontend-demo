import React from "react";
import { useNavigate } from "react-router-dom";

const MyRaces = () => {
  const navigate = useNavigate();

  // Pre-race planning modules
  const preRaceModules = [
    {
      name: "Course Preview",
      description: "Map, elevation, strategy — all in one place",
      icon: "🗺️",
      color: "bg-green-500",
      route: "/course-visualization"
    },
    {
      name: "Race Predictor",
      description: "Calculate your projected pace and lock it in",
      icon: "🎯",
      color: "bg-blue-500",
      route: "/race-predictor"
    },
    {
      name: "Final Workout",
      description: "Preview your shakeout and race-eve tips",
      icon: "🏃‍♂️",
      color: "bg-purple-500",
      route: "/final-workout"
    },
    {
      name: "Hotel & Travel",
      description: "Book hotels, flights, and race logistics",
      icon: "✈️",
      color: "bg-orange-500",
      route: "/hotel-travel"
    },
    {
      name: "Race Strategy",
      description: "Pacing, nutrition, and race day plan",
      icon: "📋",
      color: "bg-red-500",
      route: "/race-strategy"
    },
    {
      name: "Race Checklist",
      description: "Everything you need for race day",
      icon: "✅",
      color: "bg-yellow-500",
      route: "/race-checklist"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">My Races</h1>
              <p className="text-gray-600">Plan and prepare for your race</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Race Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">Boston Marathon</h2>
              <p className="text-gray-600">April 30, 2026</p>
              <p className="text-sm text-gray-500 mt-1">26 weeks until race</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600">3:25:00</p>
              <p className="text-sm text-gray-500">Goal Time</p>
            </div>
          </div>
        </div>

        {/* Pre-Race Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preRaceModules.map((module, index) => (
            <div
              key={index}
              onClick={() => navigate(module.route)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {module.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRaces;
