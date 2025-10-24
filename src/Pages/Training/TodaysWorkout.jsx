import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodaysWorkout = () => {
  const navigate = useNavigate();

  // Dummy workout data - no API calls
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  const [workout, setWorkout] = useState({
    planned: {
      label: "Tempo Run - Marathon Pace",
      type: "tempo",
      mileage: 8,
      paceRange: "7:45-8:00",
      targetPace: "7:50",
      hrZone: "3",
      hrRange: "160-170 bpm",
      description: "Run at your goal marathon pace. Focus on maintaining consistent effort throughout. This builds the endurance you need for Boston."
    },
    actual: {
      completed: false
    },
    status: "scheduled"
  });

  const { planned, actual, status } = workout;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">{planned.label || "Today's Workout"}</h2>
              <p className="text-gray-600 capitalize">{planned.type}</p>
              <p className="text-sm text-gray-500 mt-1">{dayName}, {dateStr}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              status === 'completed' ? 'bg-green-100 text-green-700' :
              status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {status}
            </div>
          </div>

          {/* Main Workout Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Distance</p>
              <p className="text-2xl font-bold">{planned.mileage} mi</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Target Pace</p>
              <p className="text-2xl font-bold">{planned.paceRange || planned.targetPace || "Easy"}</p>
            </div>
          </div>

          {/* HR Zone */}
          {planned.hrZone && (
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-1">Heart Rate Zone {planned.hrZone}</p>
              <p className="text-lg font-semibold">{planned.hrRange} bpm</p>
            </div>
          )}

          {/* Description */}
          {planned.description && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-1">Coach's Notes</p>
              <p className="text-sm text-blue-800">{planned.description}</p>
            </div>
          )}
        </div>

        {/* Workout Segments */}
        {planned.segments && planned.segments.length > 0 && (
          <div className="bg-white shadow-md rounded-xl p-6 mb-4">
            <h3 className="text-lg font-semibold mb-4">Workout Structure</h3>
            <div className="space-y-3">
              {planned.segments.map((seg, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium capitalize">{seg.type}</span>
                  <span className="text-gray-600">
                    {seg.distance ? `${seg.distance} mi` : seg.duration ? `${seg.duration} min` : ''} 
                    {seg.pace && ` @ ${seg.pace}`}
                    {seg.reps && ` × ${seg.reps}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actual Data (if completed) */}
        {actual?.completed && (
          <div className="bg-green-50 shadow-md rounded-xl p-6 mb-4">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Completed ✅</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-green-700 mb-1">Distance</p>
                <p className="text-xl font-bold text-green-900">{actual.mileage} mi</p>
              </div>
              <div>
                <p className="text-sm text-green-700 mb-1">Pace</p>
                <p className="text-xl font-bold text-green-900">{actual.pace}</p>
              </div>
              <div>
                <p className="text-sm text-green-700 mb-1">Avg HR</p>
                <p className="text-xl font-bold text-green-900">{actual.avgHR} bpm</p>
              </div>
            </div>
          </div>
        )}

        {/* Garmin Status */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-blue-900">Garmin Connected</span>
            </div>
            <span className="text-xs text-blue-700">Auto-sync enabled</span>
          </div>
          <p className="text-xs text-blue-600 mt-2">
            <em>Future: Workouts will auto-sync from Garmin after completion</em>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {!actual?.completed ? (
            <button
              className="w-full px-6 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition text-lg"
              onClick={() => navigate("/")}
            >
              Go Do It! 🏃‍♂️
            </button>
          ) : (
            <button
              className="w-full px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              onClick={() => navigate("/daily-recap")}
            >
              How Did It Feel? 💭
            </button>
          )}
          
          <button
            className="w-full px-6 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition"
            onClick={() => navigate("/")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodaysWorkout;
