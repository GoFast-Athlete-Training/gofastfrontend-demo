import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const RaceDetail = () => {
  const navigate = useNavigate();
  const { raceId } = useParams();

  // Race data (in real app, this would come from API)
  const raceData = {
    "boston-2026": {
      name: "Boston Marathon",
      date: "April 30, 2026",
      location: "Boston, MA",
      distance: "26.2 miles",
      status: "registered",
      goalTime: "3:25:00",
      weeksUntil: 26,
      color: "bg-blue-500"
    },
    "chicago-2025": {
      name: "Chicago Marathon",
      date: "October 12, 2025",
      location: "Chicago, IL",
      distance: "26.2 miles",
      status: "completed",
      goalTime: "3:30:00",
      actualTime: "3:28:15",
      color: "bg-orange-500"
    },
    "nyc-2025": {
      name: "New York City Marathon",
      date: "November 2, 2025",
      location: "New York, NY",
      distance: "26.2 miles",
      status: "planning",
      goalTime: "3:20:00",
      weeksUntil: 8,
      color: "bg-green-500"
    }
  };

  const race = raceData[raceId];

  if (!race) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Race Not Found</h1>
          <button
            onClick={() => navigate("/my-races")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Back to My Races
          </button>
        </div>
      </div>
    );
  }

  // Race-specific modules based on status
  const getRaceModules = (status) => {
    const baseModules = [
      {
        name: "Course Preview",
        description: "Map, elevation, strategy — all in one place",
        icon: "🗺️",
        color: "bg-green-500",
        route: "/course-visualization"
      },
      {
        name: "Hotel & Travel",
        description: "Book hotels, flights, and race logistics",
        icon: "✈️",
        color: "bg-orange-500",
        route: "/hotel-travel"
      }
    ];

    if (status === 'completed') {
      return [
        ...baseModules,
        {
          name: "Race Results",
          description: "View your race performance and splits",
          icon: "📊",
          color: "bg-purple-500",
          route: "/race-results"
        },
        {
          name: "Race Recap",
          description: "Reflect on your race experience",
          icon: "💭",
          color: "bg-blue-500",
          route: "/race-recap"
        }
      ];
    } else {
      return [
        ...baseModules,
        {
          name: "Race Strategy",
          description: "Pacing, nutrition, and race day plan",
          icon: "📋",
          color: "bg-red-500",
          route: "/race-strategy"
        },
        {
          name: "Race Checklist",
          description: "Everything you need for race day",
          icon: "✅",
          color: "bg-yellow-500",
          route: "/race-checklist"
        }
      ];
    }
  };

  const raceModules = getRaceModules(race.status);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{race.name}</h1>
              <p className="text-gray-600">{race.date} • {race.location}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/my-races")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to My Races
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Race Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">{race.name}</h2>
              <p className="text-gray-600">{race.date} • {race.location}</p>
              <p className="text-sm text-gray-500 mt-1">{race.distance}</p>
            </div>
            <div className="text-right">
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

        {/* Race Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raceModules.map((module, index) => (
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

export default RaceDetail;
