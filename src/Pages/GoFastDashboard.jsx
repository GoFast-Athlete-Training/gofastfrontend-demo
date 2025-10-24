import React from "react";
import { useNavigate } from "react-router-dom";

const GoFastDashboard = () => {
  const navigate = useNavigate();

  // Boston Marathon data
  const raceDate = new Date('2026-04-30');
  const today = new Date();
  const daysUntilRace = Math.ceil((raceDate - today) / (1000 * 60 * 60 * 24));
  const weeksUntilRace = Math.ceil(daysUntilRace / 7);
  
  const marathonData = {
    goalTime: "3:25:00",
    currentTime: "3:45:00", 
    goalPace: "7:48",
    currentPace: "8:30",
    projectedPace: "8:12",
    weeksUntilRace,
    daysUntilRace,
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
      name: "Next Up",
      description: "Upcoming workouts and schedule",
      icon: "📅",
      color: "bg-purple-500",
      route: "/week-view"
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
              <h3 className="text-xl font-bold mb-1">{marathonData.raceName}</h3>
              <p className="text-gray-600">{marathonData.raceDate}</p>
              <p className="text-sm text-gray-500 mt-1">{marathonData.weeksUntilRace} weeks until race</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">Your Goal Race</h2>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">{marathonData.goalTime}</p>
                <p className="text-sm text-gray-500">Goal Time</p>
                <p className="text-sm text-gray-500 mt-1">{marathonData.goalPace} pace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Phase */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Current Phase</h2>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">{currentPhase.name}</h3>
              <p className="text-gray-600">{currentPhase.week}</p>
              <p className="text-sm text-gray-500 mt-1">{currentPhase.focus}</p>
            </div>
            <div className="text-right">
              <div className="w-32 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: `${currentPhase.progress}%`}}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{currentPhase.progress}% complete</p>
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

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group ${
                card.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Body & Mind Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Body & Mind Maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              onClick={() => navigate("/mental-hub")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🧠
                </div>
                <h3 className="text-lg font-semibold mb-2">Mental Health</h3>
                <p className="text-gray-600 text-sm">Reflection, journaling, and mental training</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/nutrition")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🥗
                </div>
                <h3 className="text-lg font-semibold mb-2">Nutrition</h3>
                <p className="text-gray-600 text-sm">Fuel your training with proper nutrition</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/injury-prevention")}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🏥
                </div>
                <h3 className="text-lg font-semibold mb-2">Injury Prevention</h3>
                <p className="text-gray-600 text-sm">Stay healthy and avoid injuries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoFastDashboard;
