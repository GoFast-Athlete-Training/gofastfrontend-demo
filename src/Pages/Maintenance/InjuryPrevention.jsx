import React from "react";
import { useNavigate } from "react-router-dom";

const InjuryPrevention = () => {
  const navigate = useNavigate();

  const preventionTips = [
    {
      category: "Warm-up & Cool-down",
      tips: [
        "5-10 minute dynamic warm-up before runs",
        "Include leg swings, high knees, butt kicks",
        "10-15 minute cool-down walk",
        "Static stretching after runs"
      ]
    },
    {
      category: "Strength Training",
      tips: [
        "2-3 strength sessions per week",
        "Focus on glutes, hips, and core",
        "Single-leg exercises for stability",
        "Progressive overload over time"
      ]
    },
    {
      category: "Recovery & Sleep",
      tips: [
        "7-9 hours of quality sleep",
        "Rest days between hard workouts",
        "Foam rolling and massage",
        "Listen to your body"
      ]
    }
  ];

  const warningSigns = [
    "Persistent pain that doesn't improve with rest",
    "Pain that gets worse during runs",
    "Swelling or inflammation",
    "Changes in running form due to pain",
    "Pain that wakes you up at night"
  ];

  const commonInjuries = [
    { injury: "Runner's Knee", prevention: "Strengthen glutes and hips", symptoms: "Pain around kneecap" },
    { injury: "IT Band Syndrome", prevention: "Hip strengthening, foam rolling", symptoms: "Lateral knee pain" },
    { injury: "Shin Splints", prevention: "Gradual mileage increase", symptoms: "Pain along shin bone" },
    { injury: "Plantar Fasciitis", prevention: "Calf stretching, proper shoes", symptoms: "Heel pain, especially morning" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Injury Prevention</h1>
              <p className="text-gray-600">Stay healthy and avoid injuries</p>
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
        {/* Prevention Tips */}
        <div className="space-y-6 mb-8">
          {preventionTips.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">{section.category}</h2>
              <ul className="space-y-2">
                {section.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Common Injuries */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Common Running Injuries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonInjuries.map((injury, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-600 mb-2">{injury.injury}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Symptoms:</strong> {injury.symptoms}</p>
                <p className="text-sm text-green-600"><strong>Prevention:</strong> {injury.prevention}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-red-900">When to Seek Help</h2>
          <p className="text-red-800 mb-3">Stop running and consult a healthcare provider if you experience:</p>
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

export default InjuryPrevention;
