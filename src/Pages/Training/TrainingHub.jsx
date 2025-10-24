import React from "react";
import { useNavigate } from "react-router-dom";

const TrainingHub = () => {
  const navigate = useNavigate();

  // Training modules - focused on execution
  const trainingModules = [
    {
      name: "Today's Workout",
      description: "Your workout for today",
      icon: "🏃‍♂️",
      color: "bg-red-500",
      route: "/todays-workout"
    },
    {
      name: "Week View",
      description: "This week's training plan",
      icon: "📅",
      color: "bg-blue-500",
      route: "/week-view"
    },
    {
      name: "My Runs",
      description: "View your Garmin activities",
      icon: "⌚",
      color: "bg-green-500",
      route: "/see-activities"
    },
    {
      name: "Race Predictor",
      description: "Analyze training data to predict race performance",
      icon: "🎯",
      color: "bg-purple-500",
      route: "/race-predictor"
    },
    {
      name: "Training Analytics",
      description: "Detailed analysis of your training data",
      icon: "📊",
      color: "bg-indigo-500",
      route: "/training-analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Training Tools</h2>
          <nav className="space-y-2">
            <button
              onClick={() => navigate("/week-view")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">📅</span>
              Week View
            </button>
            <button
              onClick={() => navigate("/race-predictor")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">🎯</span>
              Race Predictor
            </button>
            <button
              onClick={() => navigate("/training-analysis")}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition"
            >
              <span className="mr-3">📊</span>
              Training Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Training Hub</h1>
                <p className="text-gray-600">Your training plan and progress</p>
              </div>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Main Training Dashboard */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Week Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">This Week's Training</h2>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">42.5 mi</p>
                  <p className="text-sm text-gray-500">Total Miles</p>
                </div>
              </div>
              
              {/* Week Calendar */}
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const isToday = index === 2; // Wednesday
                  const isCompleted = index < 3; // Mon, Tue, Wed completed
                  const workoutType = index === 0 ? 'easy' : index === 1 ? 'tempo' : index === 2 ? 'long' : index === 4 ? 'interval' : index === 6 ? 'easy' : 'rest';
                  
                  return (
                    <div key={day} className={`p-3 rounded-lg text-center ${
                      isToday ? 'bg-blue-100 border-2 border-blue-500' :
                      isCompleted ? 'bg-green-100' :
                      workoutType === 'rest' ? 'bg-gray-100' :
                      'bg-orange-100'
                    }`}>
                      <p className="text-xs font-semibold text-gray-600">{day}</p>
                      <p className="text-lg font-bold">
                        {workoutType === 'rest' ? 'R' : 
                         workoutType === 'easy' ? 'E' :
                         workoutType === 'tempo' ? 'T' :
                         workoutType === 'long' ? 'L' : 'I'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {workoutType === 'rest' ? 'Rest' :
                         workoutType === 'easy' ? '6 mi' :
                         workoutType === 'tempo' ? '8 mi' :
                         workoutType === 'long' ? '12 mi' : '5 mi'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's Focus */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div
                onClick={() => navigate("/todays-workout")}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group text-white"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    🏃‍♂️
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Run Today</h3>
                  <p className="text-blue-100">Long Run - 12 miles</p>
                  <p className="text-sm text-blue-200 mt-2">Target Pace: 8:30-9:00</p>
                </div>
              </div>
              
              <div
                onClick={() => navigate("/see-activities")}
                className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 cursor-pointer group text-white"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    ⌚
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">My Runs</h3>
                  <p className="text-green-100">View your Garmin activities</p>
                  <p className="text-sm text-green-200 mt-2">3 runs this week</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">This Week</p>
                    <p className="text-2xl font-bold">42.5 mi</p>
                  </div>
                  <div className="text-2xl">📊</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Avg Pace</p>
                    <p className="text-2xl font-bold">8:15</p>
                  </div>
                  <div className="text-2xl">⏱️</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Streak</p>
                    <p className="text-2xl font-bold">12 days</p>
                  </div>
                  <div className="text-2xl">🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHub;
