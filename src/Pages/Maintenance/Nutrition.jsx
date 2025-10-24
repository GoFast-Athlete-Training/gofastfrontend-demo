import React from "react";
import { useNavigate } from "react-router-dom";

const Nutrition = () => {
  const navigate = useNavigate();

  const nutritionTips = [
    {
      category: "Pre-Run Fuel",
      tips: [
        "Eat 1-2 hours before running",
        "Focus on carbs: banana, toast, oatmeal",
        "Avoid high-fiber foods",
        "Stay hydrated with water"
      ]
    },
    {
      category: "During Long Runs",
      tips: [
        "Fuel every 45-60 minutes",
        "30-60g carbs per hour",
        "Practice your race day nutrition",
        "Electrolytes for runs over 90 minutes"
      ]
    },
    {
      category: "Recovery Nutrition",
      tips: [
        "Eat within 30 minutes post-run",
        "3:1 or 4:1 carb to protein ratio",
        "Include anti-inflammatory foods",
        "Stay hydrated"
      ]
    }
  ];

  const dailyGoals = [
    { nutrient: "Protein", target: "1.2-1.6g per kg body weight", current: "85g" },
    { nutrient: "Carbs", target: "6-10g per kg body weight", current: "320g" },
    { nutrient: "Water", target: "3-4 liters", current: "2.5L" },
    { nutrient: "Sleep", target: "7-9 hours", current: "7.5h" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Nutrition</h1>
              <p className="text-gray-600">Fuel your training with proper nutrition</p>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Daily Goals */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Today's Nutrition Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dailyGoals.map((goal, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800">{goal.nutrient}</h3>
                <p className="text-sm text-gray-600">{goal.target}</p>
                <p className="text-lg font-bold text-blue-600">{goal.current}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Tips */}
        <div className="space-y-6">
          {nutritionTips.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">{section.category}</h2>
              <ul className="space-y-2">
                {section.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
