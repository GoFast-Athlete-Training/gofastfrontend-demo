import React from "react";
import { useNavigate } from "react-router-dom";

const MentalHub = () => {
  const navigate = useNavigate();

  // Mental training modules
  const mentalModules = [
    {
      name: "Reflection",
      description: "Daily workout recap and mental training",
      icon: "💭",
      color: "bg-blue-500",
      route: "/reflection"
    },
    {
      name: "Training Journal",
      description: "Log your thoughts and progress",
      icon: "📝",
      color: "bg-purple-500",
      route: "/training-journal"
    },
    {
      name: "Replenish",
      description: "Encouraging words on the journey",
      icon: "🌱",
      color: "bg-orange-500",
      route: "/mental-replenishment"
    },
    {
      name: "Weekly Review",
      description: "Review your week's progress",
      icon: "📊",
      color: "bg-green-500",
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
              <h1 className="text-2xl font-bold">Mental & Reflection</h1>
              <p className="text-gray-600">Mindset, reflection, and mental training tools</p>
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
        {/* Mental Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentalModules.map((module, index) => (
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

export default MentalHub;
