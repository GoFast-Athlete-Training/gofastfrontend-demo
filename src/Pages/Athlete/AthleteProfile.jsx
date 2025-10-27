import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';

const AthleteProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Profile Header - Instagram Style */}
        <div className="flex gap-8 mb-8">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-6xl">
              👤
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sarah Johnson</h1>
              <p className="text-gray-600 mb-2">@runner_sarah • Arlington, VA</p>
              <p className="text-gray-600">Racing for: <span className="font-medium">Run a 5K</span></p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-4">
              <div className="flex items-center">
                <span className="font-bold text-gray-900">1,285</span>
                <span className="text-gray-600 ml-2">GoFast Points</span>
                <button
                  onClick={() => navigate('/points-explainer')}
                  className="ml-3 text-orange-500 hover:text-orange-600 font-medium text-sm"
                >
                  Learn More →
                </button>
              </div>
              <div>
                <span className="font-bold text-gray-900">38.5</span>
                <span className="text-gray-600 ml-2">Miles This Week</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">23:45</span>
                <span className="text-gray-600 ml-2">5K PR</span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Settings Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Sidebar - Left */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Settings</h3>
              <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Account</div>
                <button 
                  onClick={() => setActiveSection('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'profile' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Edit Profile
                </button>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-3">Preferences</div>
                <button 
                  onClick={() => setActiveSection('preferences')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'preferences' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Run Preferences
                </button>
                <button 
                  onClick={() => setActiveSection('matching')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'matching' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Match Preferences
                </button>

                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-3">Connections</div>
                <button 
                  onClick={() => setActiveSection('devices')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'devices' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Connected Devices
                </button>

                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-3">Privacy & Security</div>
                <button 
                  onClick={() => setActiveSection('security')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'security' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Security & Password
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Trophies */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trophies 🏆</h2>
              <div className="grid grid-cols-4 gap-4">
                {['50K Club', 'Speed Demon', 'Marathon', 'Crew Leader'].map((trophy, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{trophy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                {[
                  { icon: '🚀', title: 'New 5K PR!', desc: '23:45 (+50 points)', date: '2 days ago' },
                  { icon: '🤝', title: 'Crew Member Joined', desc: 'Mike joined your crew (+25 points)', date: '3 days ago' },
                  { icon: '🎯', title: 'Crew Challenge Completed', desc: '7-day streak (+100 points)', date: '5 days ago' },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-3xl mr-4">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-sm text-gray-600">{achievement.desc}</p>
                    </div>
                    <span className="text-sm text-gray-500">{achievement.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Settings</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveSection('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'profile' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  ✏️ Edit Profile Data
                </button>
                <button 
                  onClick={() => setActiveSection('preferences')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'preferences' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  🏃 Edit Run Preferences
                </button>
                <button 
                  onClick={() => setActiveSection('matching')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'matching' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  💪 Edit Match Preferences
                </button>
                <button 
                  onClick={() => setActiveSection('devices')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'devices' 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  📱 Connected Devices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;

