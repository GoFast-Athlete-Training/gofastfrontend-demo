import React from "react";
import { useNavigate } from "react-router-dom";

const MyRaces = () => {
  const navigate = useNavigate();

  // User's races
  const races = [
    {
      id: "boston-2026",
      name: "Boston Marathon",
      date: "April 30, 2026",
      location: "Boston, MA",
      distance: "26.2 miles",
      status: "registered",
      goalTime: "3:25:00",
      weeksUntil: 26,
      color: "bg-blue-500"
    },
    {
      id: "chicago-2025",
      name: "Chicago Marathon",
      date: "October 12, 2025",
      location: "Chicago, IL",
      distance: "26.2 miles",
      status: "completed",
      goalTime: "3:30:00",
      actualTime: "3:28:15",
      color: "bg-orange-500"
    },
    {
      id: "nyc-2025",
      name: "New York City Marathon",
      date: "November 2, 2025",
      location: "New York, NY",
      distance: "26.2 miles",
      status: "planning",
      goalTime: "3:20:00",
      weeksUntil: 8,
      color: "bg-green-500"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'registered': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'registered': return 'Registered';
      case 'completed': return 'Completed';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">My Races</h1>
              <p className="text-gray-600">Your race calendar and planning</p>
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
        {/* Races List */}
        <div className="space-y-4">
          {races.map((race) => (
            <div
              key={race.id}
              onClick={() => navigate(`/race-detail/${race.id}`)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold">{race.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(race.status)}`}>
                      {getStatusText(race.status)}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                    <div>
                      <p className="font-semibold">Date</p>
                      <p>{race.date}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p>{race.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Distance</p>
                      <p>{race.distance}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right ml-6">
                  {race.status === 'completed' ? (
                    <div>
                      <p className="text-2xl font-bold text-green-600">{race.actualTime}</p>
                      <p className="text-sm text-gray-500">Actual Time</p>
                      <p className="text-sm text-gray-400">Goal: {race.goalTime}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{race.goalTime}</p>
                      <p className="text-sm text-gray-500">Goal Time</p>
                      {race.weeksUntil && (
                        <p className="text-sm text-gray-400">{race.weeksUntil} weeks until</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Race Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate("/race-setup")}
            className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg"
          >
            + Add New Race
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRaces;
