import React from "react";
import { useNavigate } from "react-router-dom";

const SeeActivities = () => {
  const navigate = useNavigate();

  // Dummy Garmin activities data
  const activities = [
    {
      id: 1,
      date: "Today",
      time: "6:30 AM",
      type: "Running",
      distance: "8.2 mi",
      duration: "1:03:45",
      pace: "7:46",
      avgHR: 165,
      calories: 720,
      elevation: 245
    },
    {
      id: 2,
      date: "Yesterday", 
      time: "7:15 AM",
      type: "Running",
      distance: "5.1 mi",
      duration: "42:30",
      pace: "8:20",
      avgHR: 152,
      calories: 480,
      elevation: 180
    },
    {
      id: 3,
      date: "2 days ago",
      time: "6:45 AM", 
      type: "Running",
      distance: "3.2 mi",
      duration: "25:15",
      pace: "7:55",
      avgHR: 158,
      calories: 320,
      elevation: 120
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">My Runs</h1>
              <p className="text-gray-600">From your Garmin Connect</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-700">Synced</span>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`border rounded-lg p-4 ${index === 0 ? 'bg-orange-50 border-orange-200' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">🏃‍♂️</span>
                      <div>
                        <h3 className="font-semibold">{activity.type}</h3>
                        <p className="text-sm text-gray-600">{activity.date} at {activity.time}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                      <div>
                        <p className="text-xs text-gray-500">Distance</p>
                        <p className="font-semibold">{activity.distance}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Pace</p>
                        <p className="font-semibold">{activity.pace}/mi</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Avg HR</p>
                        <p className="font-semibold">{activity.avgHR} bpm</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold">{activity.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <button
                      onClick={() => navigate("/match-activity")}
                      className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                    >
                      Match to Training
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeActivities;
