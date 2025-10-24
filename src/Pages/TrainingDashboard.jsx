import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingDashboard = () => {
  const navigate = useNavigate();

  // Boston Marathon data
  const raceDate = new Date('2026-04-30');
  const today = new Date();
  const daysUntilRace = Math.ceil((raceDate - today) / (1000 * 60 * 60 * 24));
  const weeksUntilRace = Math.ceil(daysUntilRace / 7);
  
  const marathonData = {
    goalTime: "3:25:00", // 3 hours 25 minutes
    currentTime: "3:45:00", // 3 hours 45 minutes
    goalPace: "7:48", // 7 minutes 48 seconds per mile
    currentPace: "8:30", // 8 minutes 30 seconds per mile
    projectedPace: "8:12", // 8 minutes 12 seconds per mile
    weeksUntilRace,
    daysUntilRace,
    raceName: "Boston Marathon",
    raceDate: "April 30, 2026"
  };

  // Core training modules
  const trainingModules = [
    {
      name: "Today's Workout",
      description: "Your workout for today",
      icon: "🏃‍♂️",
      color: "bg-red-500",
      route: "/todays-workout"
    },
    {
      name: "My Runs",
      description: "View your Garmin activities",
      icon: "⌚",
      color: "bg-blue-500",
      route: "/see-activities"
    },
    {
      name: "Week View",
      description: "This week's training plan",
      icon: "📅",
      color: "bg-indigo-500",
      route: "/week-view"
    },
    {
      name: "Training Journal",
      description: "Log your training sessions",
      icon: "📝",
      color: "bg-green-500",
      route: "/training-journal"
    },
    {
      name: "Mental Training",
      description: "Mental preparation and focus",
      icon: "🧠",
      color: "bg-purple-500",
      route: "/mental-replenishment"
    },
    {
      name: "Weekly Review",
      description: "Review your progress",
      icon: "📊",
      color: "bg-orange-500",
      route: "/weekly-review"
    },
    {
      name: "Garmin Connect",
      description: "Sync your training data",
      icon: "⌚",
      color: "bg-cyan-500",
      route: "/connect-garmin"
    }
  ];

  // Calculate progress (simplified for now)
  const progressPercent = 75; // 75% progress toward goal

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Race Header Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🏃‍♂️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{marathonData.raceName}</h1>
                <p className="text-gray-600">{marathonData.raceDate} • {marathonData.weeksUntilRace} weeks to go</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {marathonData.weeksUntilRace} weeks
              </div>
              <div className="text-sm text-gray-500">
                until race day
              </div>
            </div>
          </div>
          
          {/* Goal vs Current */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{marathonData.goalTime}</div>
              <div className="text-gray-600">Goal Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{marathonData.currentTime}</div>
              <div className="text-gray-600">Current Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{marathonData.projectedPace}/mi</div>
              <div className="text-gray-600">Projected Pace</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Current: {marathonData.currentPace}/mi</span>
              <span>Goal: {marathonData.goalPace}/mi</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Need to improve by 42 seconds per mile to reach goal
          </div>
        </div>

        {/* Training Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, index) => (
            <div
              key={index}
              onClick={() => navigate(module.route)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center`}>
                  <span className="text-2xl text-white">{module.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Training Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">52</div>
              <div className="text-gray-600">Miles This Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-gray-600">Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">8:30</div>
              <div className="text-gray-600">Avg Pace</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">92%</div>
              <div className="text-gray-600">Plan Completion</div>
            </div>
          </div>
        </div>

        {/* Setup Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup & Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/profile')}
              className="p-4 bg-orange-50 border border-orange-200 rounded-xl hover:bg-orange-100 transition-colors text-left"
            >
              <div className="text-orange-600 font-semibold">Profile</div>
              <div className="text-sm text-gray-600">Set your running background</div>
            </button>
            <button
              onClick={() => navigate('/goals')}
              className="p-4 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-colors text-left"
            >
              <div className="text-red-600 font-semibold">Goals</div>
              <div className="text-sm text-gray-600">Set your race targets</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDashboard;
