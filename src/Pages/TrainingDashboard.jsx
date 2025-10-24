import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingDashboard = () => {
  const navigate = useNavigate();

  // Core training modules
  const trainingModules = [
    {
      name: "Today's Workout",
      description: "Your workout for today",
      icon: "🏃‍♂️",
      color: "bg-red-500",
      route: "/todays-workout"
    },
    {
      name: "Week View",
      description: "This week's training plan",
      icon: "📅",
      color: "bg-blue-500",
      route: "/week-view"
    },
    {
      name: "Training Journal",
      description: "Log your training sessions",
      icon: "📝",
      color: "bg-green-500",
      route: "/training-journal"
    },
    {
      name: "Mental Training",
      description: "Mental preparation and focus",
      icon: "🧠",
      color: "bg-purple-500",
      route: "/mental-replenishment"
    },
    {
      name: "Weekly Review",
      description: "Review your progress",
      icon: "📊",
      color: "bg-orange-500",
      route: "/weekly-review"
    },
    {
      name: "Garmin Connect",
      description: "Sync your training data",
      icon: "⌚",
      color: "bg-cyan-500",
      route: "/connect-garmin"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Dashboard</h1>
          <p className="text-lg text-gray-600">Your complete training command center</p>
        </div>

        {/* Training Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, index) => (
            <div
              key={index}
              onClick={() => navigate(module.route)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center`}>
                  <span className="text-2xl text-white">{module.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">42</div>
              <div className="text-gray-600">Miles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-gray-600">Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">8:15</div>
              <div className="text-gray-600">Avg Pace</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">85%</div>
              <div className="text-gray-600">Completion</div>
            </div>
          </div>
        </div>

        {/* Setup Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup & Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/profile')}
              className="p-4 bg-orange-50 border border-orange-200 rounded-xl hover:bg-orange-100 transition-colors text-left"
            >
              <div className="text-orange-600 font-semibold">Profile</div>
              <div className="text-sm text-gray-600">Set your running background</div>
            </button>
            <button
              onClick={() => navigate('/goals')}
              className="p-4 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-colors text-left"
            >
              <div className="text-red-600 font-semibold">Goals</div>
              <div className="text-sm text-gray-600">Set your race targets</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDashboard;
