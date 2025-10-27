import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navigationConfig } from '../config/navigation';

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
          {navigationConfig.bottomNav.items.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
                isActive(item.path) ? 'text-orange-600' : 'text-gray-400'
              }`}
            >
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                {item.icon === 'home' && '🏠'}
                {item.icon === 'crew' && '👥'}
                {item.icon === 'matches' && '💪'}
                {item.icon === 'training' && '🏃'}
                {item.icon === 'profile' && '👤'}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
