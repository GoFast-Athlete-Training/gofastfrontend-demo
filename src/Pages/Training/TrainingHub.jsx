import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingHub = () => {
  const navigate = useNavigate();

  // Training modules
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
      name: "Training Journal",
      description: "Log your training sessions",
      icon: "📝",
      color: "bg-purple-500",
      route: "/training-journal"
    },
    {
      name: "Mental Training",
      description: "Mental preparation and focus",
      icon: "🧠",
      color: "bg-orange-500",
      route: "/mental-replenishment"
    },
    {
      name: "Weekly Review",
      description: "Review your week's progress",
      icon: "📊",
      color: "bg-indigo-500",
      route: "/weekly-review"
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
        {/* Training Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, index) => (
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

export default TrainingHub;
