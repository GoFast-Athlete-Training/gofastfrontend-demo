import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreAthleteProfile = () => {
  const navigate = useNavigate();

  const handleSetupProfile = () => {
    navigate('/athlete-profile');
  };

  const handleExplorePlatform = () => {
    navigate('/gofast-platform');
  };

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
        <div className="p-8 text-center">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🏃‍♂️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to GoFast!
            </h1>
            <p className="text-gray-600 text-lg">
              Your complete running platform
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">1</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">You create a profile</h3>
                <p className="text-sm text-gray-600">Tell us about yourself as a runner</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">2</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">You create your running preferences</h3>
                <p className="text-sm text-gray-600">Pace, goals, availability, and running style</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">3</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">You get matched</h3>
                <p className="text-sm text-gray-600">Connect with runners who share your pace and goals</p>
              </div>
            </div>
          </div>

          {/* Alternative Option */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Want to explore first?</h3>
            <p className="text-sm text-gray-600 mb-4">
              No problem! Check out our training tools, race information, and other features before setting up your profile.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleSetupProfile}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Set up my Athlete Profile
            </button>
            
            <button
              onClick={handleExplorePlatform}
              className="w-full border-2 border-orange-500 text-orange-600 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              Explore Platform
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            No login required • Start whenever you're ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreAthleteProfile;
