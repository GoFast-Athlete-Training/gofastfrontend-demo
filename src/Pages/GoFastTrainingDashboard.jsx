import React from "react";
import { useNavigate } from "react-router-dom";

const GoFastDashboard = () => {
  const navigate = useNavigate();

  // Next Race (local prep race)
  const nextRaceDate = new Date('2025-01-15');
  const today = new Date();
  const daysUntilNextRace = Math.ceil((nextRaceDate - today) / (1000 * 60 * 60 * 24));
  const weeksUntilNextRace = Math.ceil(daysUntilNextRace / 7);
  
  const nextRaceData = {
    raceName: "DC Rock 'n' Roll 5K",
    raceDate: "January 15, 2025",
    raceType: "5K",
    goalTime: "22:30",
    weeksUntilRace: weeksUntilNextRace,
    daysUntilRace: daysUntilNextRace
  };

  // Goal Race (the big one we really track)
  const goalRaceDate = new Date('2026-04-30');
  const daysUntilGoalRace = Math.ceil((goalRaceDate - today) / (1000 * 60 * 60 * 24));
  const weeksUntilGoalRace = Math.ceil(daysUntilGoalRace / 7);
  
  const goalRaceData = {
    goalTime: "3:25:00",
    currentTime: "3:45:00", 
    goalPace: "7:48",
    currentPace: "8:30",
    projectedPace: "8:12",
    weeksUntilRace: weeksUntilGoalRace,
    daysUntilRace: daysUntilGoalRace,
    raceName: "Boston Marathon",
    raceDate: "April 30, 2026"
  };

  // Current phase data
  const currentPhase = {
    name: "Base Building",
    week: "Week 8 of 16",
    focus: "Building aerobic base and endurance",
    progress: 50
  };

  // Today's dashboard data
  const todayData = {
    workout: {
      type: "Long Run",
      distance: "12 miles",
      pace: "8:30-9:00",
      time: "1:42:00"
    },
    weather: {
      temp: "68°F",
      condition: "Partly Cloudy",
      humidity: "65%",
      wind: "8 mph"
    }
  };

  // Main action cards
  const mainCards = [
    {
      name: "Training",
      description: "Your complete training dashboard",
      icon: "🏃‍♂️",
      color: "bg-blue-500",
      route: "/training-hub",
      size: "large"
    },
    {
      name: "Race",
      description: "Race day execution",
      icon: "🏁",
      color: "bg-red-500",
      route: "/race-hub"
    },
    {
      name: "Beyond",
      description: "Post-race recovery and next steps",
      icon: "🎉",
      color: "bg-green-500", 
      route: "/post-race-hub"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="GoFast Logo" className="h-12 w-12 rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold">GoFast Planner</h1>
                <p className="text-gray-600">Your complete training ecosystem</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/my-races")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                My Races 📅
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Settings ⚙️
              </button>
              <button
                onClick={() => navigate("/todays-workout")}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition text-lg"
              >
                Run Today 🏃‍♂️
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Race Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">Your Next Race</h2>
              <h3 className="text-xl font-bold mb-1">{nextRaceData.raceName}</h3>
              <p className="text-gray-600">{nextRaceData.raceDate}</p>
              <p className="text-sm text-gray-500 mt-1">{nextRaceData.weeksUntilRace} weeks until race</p>
              <p className="text-sm text-blue-600 font-semibold mt-1">Goal: {nextRaceData.goalTime}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">Your Goal Race</h2>
              <h3 className="text-xl font-bold mb-1">{goalRaceData.raceName}</h3>
              <p className="text-gray-600">{goalRaceData.raceDate}</p>
              <p className="text-sm text-gray-500 mt-1">{goalRaceData.weeksUntilRace} weeks until race</p>
              <div className="text-right mt-2">
                <p className="text-2xl font-bold text-orange-600">{goalRaceData.goalTime}</p>
                <p className="text-sm text-gray-500">Goal Time</p>
                <p className="text-sm text-gray-500">{goalRaceData.goalPace} pace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Today's Run</h2>
            <div className="text-center">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-2xl font-bold text-blue-600">{todayData.workout.type}</h3>
              <p className="text-gray-600 text-lg">{todayData.workout.distance}</p>
              <p className="text-sm text-gray-500 mt-2">Pace: {todayData.workout.pace}</p>
              <p className="text-sm text-gray-500">Time: {todayData.workout.time}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Weather</h2>
            <div className="text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-2xl font-bold text-orange-600">{todayData.weather.temp}</h3>
              <p className="text-gray-600 text-lg">{todayData.weather.condition}</p>
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="text-gray-500">Humidity</p>
                  <p className="font-semibold">{todayData.weather.humidity}</p>
                </div>
                <div>
                  <p className="text-gray-500">Wind</p>
                  <p className="font-semibold">{todayData.weather.wind}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training - Main Focus */}
        <div className="mb-8">
          <div
            onClick={() => navigate("/training-hub")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group text-white"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                🏃‍♂️
              </div>
              <h3 className="text-3xl font-bold mb-2">Training</h3>
              <p className="text-blue-100 text-lg">Your complete training dashboard</p>
              <p className="text-sm text-blue-200 mt-2">Base Building - Week 8 of 16</p>
            </div>
          </div>
        </div>

        {/* Body & Mind Section */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-white">Body & Mind Maintenance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                onClick={() => navigate("/mental-hub")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    🧠
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">Mental Health</h3>
                  <p className="text-xs text-purple-100">Reflection & journaling</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/nutrition")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    🥗
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">Nutrition</h3>
                  <p className="text-xs text-purple-100">Fuel your training</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/injury-prevention")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    🏥
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">Injury Prevention</h3>
                  <p className="text-xs text-purple-100">Stay healthy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Section */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-white">Find Your Running Match</h2>
            <p className="text-orange-100 mb-6">Connect with runners who share your pace and goals</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                onClick={() => navigate("/onboarding")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    🏃‍♂️
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">Get Started</h3>
                  <p className="text-xs text-orange-100">Set your preferences</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/find-matches")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    🔍
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">Find Matches</h3>
                  <p className="text-xs text-orange-100">Discover runners</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/crew")}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    👥
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-white">My Crew</h3>
                  <p className="text-xs text-orange-100">Your running partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Race & Beyond - Demo Only */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-500">Race & Beyond (Demo)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              onClick={() => navigate("/race-hub")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group border-2 border-gray-200 opacity-75"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🏁
                </div>
                <h3 className="text-lg font-semibold mb-2">Race Day</h3>
                <p className="text-gray-600 text-sm">Race day execution</p>
                <p className="text-xs text-gray-400 mt-1">Not yet in training phase</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/post-race-hub")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group border-2 border-gray-200 opacity-75"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🎉
                </div>
                <h3 className="text-lg font-semibold mb-2">Post-Race</h3>
                <p className="text-gray-600 text-sm">Recovery and next steps</p>
                <p className="text-xs text-gray-400 mt-1">Not yet in training phase</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoFastDashboard;
