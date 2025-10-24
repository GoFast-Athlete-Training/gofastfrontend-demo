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

  // Main action cards
  const mainCards = [
    {
      name: "Training Hub",
      description: "Your complete training dashboard",
      icon: "🏃‍♂️",
      color: "bg-blue-500",
      route: "/training-hub"
    },
    {
      name: "Race Planning",
      description: "Plan and prepare for your race",
      icon: "📅",
      color: "bg-purple-500",
      route: "/my-races"
    },
    {
      name: "Race Day", 
      description: "Race day execution",
      icon: "🏁",
      color: "bg-red-500",
      route: "/race-hub"
    },
    {
      name: "Recovery",
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
                onClick={() => navigate("/training-analysis")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Analytics 📊
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
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">{marathonData.raceName}</h2>
              <p className="text-gray-600">{marathonData.raceDate}</p>
              <p className="text-sm text-gray-500 mt-1">{marathonData.weeksUntilRace} weeks until race</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600">{marathonData.goalTime}</p>
              <p className="text-sm text-gray-500">Goal Time</p>
            </div>
          </div>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group"
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
