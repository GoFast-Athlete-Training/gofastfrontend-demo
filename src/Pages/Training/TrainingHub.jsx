import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingHub = () => {
  const navigate = useNavigate();

  // Training modules - focused on execution
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
      name: "My Runs",
      description: "View your Garmin activities",
      icon: "⌚",
      color: "bg-green-500",
      route: "/see-activities"
    },
    {
      name: "Race Predictor",
      description: "Analyze training data to predict race performance",
      icon: "🎯",
      color: "bg-purple-500",
      route: "/race-predictor"
    },
    {
      name: "Training Analytics",
      description: "Detailed analysis of your training data",
      icon: "📊",
      color: "bg-indigo-500",
      route: "/training-analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Training Tools</h2>
          <nav className="space-y-2">
            <button
              onClick={() => navigate("/week-view")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">📅</span>
              Week View
            </button>
            <button
              onClick={() => navigate("/race-predictor")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">🎯</span>
              Race Predictor
            </button>
            <button
              onClick={() => navigate("/training-analysis")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">📊</span>
              Training Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Training Hub</h1>
                <p className="text-gray-600">Your training plan and progress</p>
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

        {/* Main Training Actions */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                onClick={() => navigate("/todays-workout")}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    🏃‍♂️
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Run Today</h3>
                  <p className="text-gray-600">Your workout for today</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/see-activities")}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    ⌚
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">My Runs</h3>
                  <p className="text-gray-600">View all your Garmin activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHub;
