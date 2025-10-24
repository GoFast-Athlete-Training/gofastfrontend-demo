import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayWorkout } from "../../api/trainingDayApi";

const TodaysWorkout = () => {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getTodayWorkout();
        setWorkout(data);
      } catch (err) {
        console.error("Failed to load today's workout:", err);
        setError(err.response?.data?.error || "Failed to load workout");
      } finally {
        setLoading(false);
      }
    };
    fetchWorkout();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading today's run...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/training-pulse-hub")}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Back to Hub
          </button>
        </div>
      </div>
    );
  }

  if (!workout || workout.status === "rest") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Rest Day 😌</h2>
          <p className="text-gray-600">No workout scheduled for today. Enjoy your recovery!</p>
        </div>
      </div>
    );
  }

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
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              status === 'completed' ? 'bg-green-100 text-green-700' :
              status === 'pending' ? 'bg-blue-100 text-blue-700' :
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

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            onClick={() => navigate("/go-crush-it")}
          >
            {actual?.completed ? "View Details" : "Let's Go 🔥"}
          </button>
          {!actual?.completed && (
            <button
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              onClick={() => navigate("/training-pulse-hub")}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodaysWorkout;
