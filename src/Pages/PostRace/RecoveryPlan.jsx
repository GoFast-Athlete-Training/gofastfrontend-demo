import React from "react";
import { useNavigate } from "react-router-dom";

const RecoveryPlan = () => {
  const navigate = useNavigate();

  const recoveryPhases = [
    {
      phase: "Week 1-2: Immediate Recovery",
      focus: "Rest and gentle movement",
      activities: [
        "Complete rest for 3-5 days",
        "Light walking or easy cycling",
        "Focus on sleep and nutrition",
        "Gentle stretching and foam rolling"
      ]
    },
    {
      phase: "Week 3-4: Active Recovery", 
      focus: "Gradual return to movement",
      activities: [
        "Easy 20-30 minute runs",
        "Cross-training (swimming, cycling)",
        "Strength training (bodyweight)",
        "Continue stretching and mobility"
      ]
    },
    {
      phase: "Week 5-8: Building Back",
      focus: "Return to structured training",
      activities: [
        "Gradual increase in mileage",
        "Easy runs and light tempo work",
        "Full strength training routine",
        "Mental recovery and goal setting"
      ]
    }
  ];

  const nutritionTips = [
    "Focus on anti-inflammatory foods (berries, leafy greens, fatty fish)",
    "Stay hydrated - aim for 8-10 glasses of water daily",
    "Include protein with every meal for muscle repair",
    "Consider supplements: omega-3, vitamin D, magnesium"
  ];

  const warningSigns = [
    "Persistent fatigue beyond 2 weeks",
    "Unusual muscle soreness or stiffness", 
    "Changes in sleep patterns",
    "Loss of appetite or mood changes",
    "Any pain that doesn't improve with rest"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Recovery Plan</h1>
              <p className="text-gray-600">Rest, nutrition, and gradual return to training</p>
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
        {/* Recovery Phases */}
        <div className="space-y-6 mb-8">
          {recoveryPhases.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3">{phase.phase}</h2>
              <p className="text-gray-600 mb-4">{phase.focus}</p>
              <ul className="space-y-2">
                {phase.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nutrition Tips */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-green-900">Nutrition for Recovery</h2>
          <ul className="space-y-2">
            {nutritionTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-green-800">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-red-900">When to Seek Help</h2>
          <p className="text-red-800 mb-3">If you experience any of these symptoms, consult a healthcare provider:</p>
          <ul className="space-y-2">
            {warningSigns.map((sign, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-red-800">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPlan;
