import React from "react";
import { useNavigate } from "react-router-dom";

const RacePredictor = () => {
  const navigate = useNavigate();

  // Training data analysis
  const trainingData = {
    goalTime: "3:25:00",
    currentTime: "3:45:00",
    projectedTime: "3:28:00",
    goalPace: "7:48",
    currentPace: "8:30",
    projectedPace: "7:50",
    trainingMiles: 847,
    weeksCompleted: 16,
    avgWeeklyMileage: 53,
    recent5k: "22:30",
    recent10k: "46:15",
    recentHalf: "1:38:45"
  };

  const predictions = [
    {
      metric: "Goal Time",
      value: trainingData.goalTime,
      status: "target",
      color: "text-orange-600"
    },
    {
      metric: "Current Time",
      value: trainingData.currentTime,
      status: "baseline",
      color: "text-gray-600"
    },
    {
      metric: "Projected Time",
      value: trainingData.projectedTime,
      status: "prediction",
      color: "text-green-600"
    }
  ];

  const paceAnalysis = [
    {
      metric: "Goal Pace",
      value: trainingData.goalPace,
      status: "target",
      color: "text-orange-600"
    },
    {
      metric: "Current Pace",
      value: trainingData.currentPace,
      status: "baseline",
      color: "text-gray-600"
    },
    {
      metric: "Projected Pace",
      value: trainingData.projectedPace,
      status: "prediction",
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Race Predictor</h1>
              <p className="text-gray-600">Analyze your training data to predict race performance</p>
            </div>
            <button
              onClick={() => navigate("/training-hub")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Training
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Training Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Training Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{trainingData.trainingMiles}</p>
              <p className="text-sm text-gray-500">Total Miles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{trainingData.weeksCompleted}</p>
              <p className="text-sm text-gray-500">Weeks Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{trainingData.avgWeeklyMileage}</p>
              <p className="text-sm text-gray-500">Avg Weekly Miles</p>
            </div>
          </div>
        </div>

        {/* Time Predictions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Marathon Time Predictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <p className="text-sm text-gray-500 mb-2">{prediction.metric}</p>
                <p className={`text-2xl font-bold ${prediction.color}`}>{prediction.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pace Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Pace Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paceAnalysis.map((pace, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <p className="text-sm text-gray-500 mb-2">{pace.metric}</p>
                <p className={`text-2xl font-bold ${pace.color}`}>{pace.value}/mi</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Race Times */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Recent Race Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-gray-500 mb-2">5K Time</p>
              <p className="text-xl font-bold text-blue-600">{trainingData.recent5k}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-gray-500 mb-2">10K Time</p>
              <p className="text-xl font-bold text-green-600">{trainingData.recent10k}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Half Marathon</p>
              <p className="text-xl font-bold text-purple-600">{trainingData.recentHalf}</p>
            </div>
          </div>
        </div>

        {/* Analysis Summary */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-green-900">Training Analysis</h2>
          <div className="space-y-3 text-green-800">
            <p>• Your training volume of <strong>{trainingData.avgWeeklyMileage} miles/week</strong> is excellent for marathon training</p>
            <p>• Recent race times suggest you're <strong>3 minutes ahead</strong> of your goal pace</p>
            <p>• Your projected finish time of <strong>{trainingData.projectedTime}</strong> is <strong>3 minutes faster</strong> than your goal</p>
            <p>• Based on your training, you're on track to <strong>exceed your goal</strong> by a significant margin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacePredictor;
