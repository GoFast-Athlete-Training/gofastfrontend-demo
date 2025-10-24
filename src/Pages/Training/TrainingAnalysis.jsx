import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingAnalysis = () => {
  const navigate = useNavigate();

  // Detailed analysis data
  const analysisData = {
    performanceMetrics: [
      { metric: "VO2 Max", current: "52.3", improvement: "+2.1", trend: "up" },
      { metric: "Lactate Threshold", current: "8:15/mi", improvement: "+0:15", trend: "up" },
      { metric: "Running Economy", current: "185", improvement: "+12", trend: "up" },
      { metric: "Recovery Rate", current: "92%", improvement: "+8%", trend: "up" }
    ],
    weeklyBreakdown: [
      { week: "Week 13", totalMiles: 48, avgPace: "8:45", longRun: "18 mi", intensity: "Moderate" },
      { week: "Week 14", totalMiles: 52, avgPace: "8:35", longRun: "20 mi", intensity: "High" },
      { week: "Week 15", totalMiles: 55, avgPace: "8:25", longRun: "22 mi", intensity: "High" },
      { week: "Week 16", totalMiles: 58, avgPace: "8:15", longRun: "24 mi", intensity: "Peak" }
    ],
    keyInsights: [
      "Your weekly mileage progression shows excellent adaptation (+10 miles over 4 weeks)",
      "Pace improvement of 30 seconds/mile indicates significant fitness gains",
      "Long run distance progression (18→24 mi) demonstrates endurance development",
      "Consistent intensity increases show proper training load management"
    ],
    recommendations: [
      "Continue current training progression - you're in the sweet spot",
      "Focus on recovery between high-intensity weeks",
      "Your 24-mile long run indicates readiness for marathon distance",
      "Consider tapering 2-3 weeks before race day"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Training Analysis</h1>
              <p className="text-gray-600">Detailed performance metrics and insights</p>
            </div>
            <button
              onClick={() => navigate("/race-predictor")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Predictor
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Performance Metrics 📊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {analysisData.performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <p className="text-sm text-gray-500 mb-2">{metric.metric}</p>
                <p className="text-2xl font-bold text-blue-600">{metric.current}</p>
                <p className="text-sm text-green-600">+{metric.improvement}</p>
                <div className="flex justify-center mt-2">
                  <span className="text-green-500">📈</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Weekly Training Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Week</th>
                  <th className="text-left py-3">Total Miles</th>
                  <th className="text-left py-3">Avg Pace</th>
                  <th className="text-left py-3">Long Run</th>
                  <th className="text-left py-3">Intensity</th>
                </tr>
              </thead>
              <tbody>
                {analysisData.weeklyBreakdown.map((week, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{week.week}</td>
                    <td className="py-3 text-blue-600 font-semibold">{week.totalMiles} mi</td>
                    <td className="py-3 text-green-600 font-semibold">{week.avgPace}/mi</td>
                    <td className="py-3 text-purple-600 font-semibold">{week.longRun}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        week.intensity === 'Peak' ? 'bg-red-100 text-red-800' :
                        week.intensity === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {week.intensity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Key Insights 🔍</h2>
          <div className="space-y-3">
            {analysisData.keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">•</span>
                <p className="text-blue-800">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-green-900">Recommendations 💡</h2>
          <div className="space-y-3">
            {analysisData.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 font-bold mr-3">•</span>
                <p className="text-green-800">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingAnalysis;
