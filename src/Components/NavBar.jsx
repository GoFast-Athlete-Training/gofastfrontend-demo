import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navigation Bar - Desktop */}
      <div className="hidden md:block bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/athlete-home')}
                className="flex items-center space-x-2"
              >
                <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
                <span className="text-xl font-bold text-gray-900">GoFast</span>
              </button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/athlete-home')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive('/athlete-home')
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigate('/crew')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive('/crew')
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Crew
                </button>
                <button
                  onClick={() => navigate('/matching-home')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive('/matching-home')
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Find Matches
                </button>
                <button
                  onClick={() => navigate('/training')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive('/training')
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Training
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/athlete-profile')}
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl hover:bg-gray-300 transition-colors"
              >
                👤
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex items-center justify-around">
          <button
            onClick={() => navigate('/athlete-home')}
            className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/athlete-home') ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => navigate('/crew')}
            className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/crew') ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-xs">Crew</span>
          </button>
          <button
            onClick={() => navigate('/matching-home')}
            className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/matching-home') ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Matches</span>
          </button>
          <button
            onClick={() => navigate('/training')}
            className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/training') ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Training</span>
          </button>
          <button
            onClick={() => navigate('/athlete-profile')}
            className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/athlete-profile') ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">
              👤
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
