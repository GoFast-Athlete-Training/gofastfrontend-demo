import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  // Setup & Settings cards
  const settingsCards = [
    {
      name: "Profile Setup",
      description: "Set up your runner profile",
      icon: "👤",
      color: "bg-blue-500",
      route: "/profile"
    },
    {
      name: "Build My Plan",
      description: "Set goals and build your training plan",
      icon: "🎯",
      color: "bg-purple-500",
      route: "/goals"
    },
    {
      name: "Race Setup",
      description: "Set up your race and training plan",
      icon: "🏁",
      color: "bg-red-500",
      route: "/race-setup"
    },
    {
      name: "My Races",
      description: "Manage your races and events",
      icon: "📅",
      color: "bg-green-500",
      route: "/my-races"
    },
    {
      name: "Garmin Connect",
      description: "Connect your Garmin device",
      icon: "⌚",
      color: "bg-orange-500",
      route: "/garmin-connect"
    },
    {
      name: "Preferences",
      description: "App settings and preferences",
      icon: "⚙️",
      color: "bg-gray-500",
      route: "/preferences"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-gray-600">Setup and manage your GoFast experience</p>
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
        {/* Setup & Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 cursor-pointer group border-2 border-gray-200"
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
      </div>
    </div>
  );
};

export default Settings;
