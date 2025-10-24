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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
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

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Main Training Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              onClick={() => navigate("/todays-workout")}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🏃‍♂️
                </div>
                <h3 className="text-xl font-semibold mb-2">Run Today</h3>
                <p className="text-gray-600">Your workout for today</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/see-activities")}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  ⌚
                </div>
                <h3 className="text-xl font-semibold mb-2">My Runs</h3>
                <p className="text-gray-600">View all your Garmin activities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Training Tools */}
        <div>
          <h2 className="text-xl font-bold mb-4">Training Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              onClick={() => navigate("/week-view")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  📅
                </div>
                <h3 className="text-lg font-semibold mb-2">Week View</h3>
                <p className="text-gray-600 text-sm">This week's training plan</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/race-predictor")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🎯
                </div>
                <h3 className="text-lg font-semibold mb-2">Race Predictor</h3>
                <p className="text-gray-600 text-sm">Analyze training data to predict race performance</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/training-analysis")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  📊
                </div>
                <h3 className="text-lg font-semibold mb-2">Training Analytics</h3>
                <p className="text-gray-600 text-sm">Detailed analysis of your training data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHub;
