import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LinkRunningApp = () => {
  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState('');

  const handleAppSelect = (app) => {
    setSelectedApp(app);
    if (app === 'Strava') {
      navigate('/log-into-strava');
    } else {
      alert(`${app} integration coming soon!`);
    }
  };

  const handleSkip = () => {
    navigate('/athlete-home');
  };

  const apps = [
    { name: 'Strava', icon: '🏃‍♂️', color: 'bg-orange-100' },
    { name: 'Garmin', icon: '⌚', color: 'bg-blue-100' },
    { name: 'Apple Watch', icon: '🍎', color: 'bg-gray-100' },
    { name: 'Nike Run Club', icon: '👟', color: 'bg-black text-white' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Link Your Running App
            </h1>
            <p className="text-gray-600 text-lg">
              Logging miles is how you earn points. Connect now to sync automatically.
            </p>
          </div>

          {/* App Options */}
          <div className="space-y-4 mb-8">
            {apps.map((app) => (
              <button
                key={app.name}
                onClick={() => handleAppSelect(app.name)}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  selectedApp === app.name
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${app.color}`}>
                    <span className="text-2xl">{app.icon}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-gray-600">Connect your {app.name} account</p>
                  </div>
                  <div className="text-orange-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Skip Button */}
          <div className="text-center">
            <button
              onClick={handleSkip}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkRunningApp;
