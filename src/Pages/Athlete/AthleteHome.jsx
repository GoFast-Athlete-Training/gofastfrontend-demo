import React from 'react';
import { useNavigate } from 'react-router-dom';

const AthleteHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/settings')}
                className="text-gray-600 hover:text-gray-800"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=400&fit=crop"
            alt="Running trail"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="text-white">
              <p className="text-sm mb-2">You've earned <span className="font-bold text-orange-400">50 points</span> this week.</p>
              <h1 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">🏃‍♂️</span>
                Keep Going!
              </h1>
            </div>
          </div>
          <button className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Progress
          </button>
        </div>

        {/* Personal Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🔥</span>
              <span className="font-bold text-gray-900">Weekly Streak</span>
            </div>
            <p className="text-sm text-gray-600">You've run 4 days in a row</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🎯</span>
              <span className="font-bold text-gray-900">Your Goal</span>
            </div>
            <p className="text-sm text-gray-600">Sub-30 min 5K</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-bold text-gray-900">Gear Unlock</span>
            </div>
            <p className="text-sm text-gray-600">10 points away from new gear</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏆</span>
              <span className="font-bold text-gray-900">Badge Milestones</span>
            </div>
            <p className="text-sm text-gray-600">Tap to see details</p>
          </div>
        </div>

        {/* Upcoming Runs */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Runs</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">Morning Trail Run</h3>
                <span className="text-sm text-gray-500 font-medium">5K</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Tomorrow, 7:00 AM</p>
              <p className="text-sm text-gray-600 mb-3 flex items-center">
                📍 Revonice Park
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-2 text-sm text-gray-500">+1 more</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">Weekend Long Run</h3>
                <span className="text-sm text-gray-500 font-medium">5K</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Sunday, 9:30 AM</p>
              <p className="text-sm text-gray-600 mb-3 flex items-center">
                📍 Central Park Loop
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-2 text-sm text-gray-500">+2 more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="max-w-4xl mx-auto flex items-center justify-around">
            <button className="flex flex-col items-center space-y-1 text-orange-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-xs font-medium">Home</span>
            </button>
            <button 
              onClick={() => navigate('/crew')}
              className="flex flex-col items-center space-y-1 text-gray-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-xs">Group</span>
            </button>
            <button 
              onClick={() => navigate('/matching-home')}
              className="flex flex-col items-center space-y-1 text-gray-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-xs">Pair</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="text-xs">Shop</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs">Status</span>
            </button>
          </div>
        </div>
        
        {/* Spacer for bottom nav */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default AthleteHome;
