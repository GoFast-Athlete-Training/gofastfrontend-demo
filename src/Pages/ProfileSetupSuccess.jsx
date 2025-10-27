import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetupSuccess = () => {
  const navigate = useNavigate();

  const handleConnectTracker = () => {
    navigate('/link-running-app');
  };

  const handleGoToPlatform = () => {
    navigate('/gofast-platform');
  };

  const handleGoToAthleteHome = () => {
    navigate('/athlete-home');
  };

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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile Complete!</h1>
            <p className="text-gray-600 text-lg">
              Great! Your profile is set up. Now let's connect your activity tracker to get the full GoFast experience.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">1</span>
                </div>
                <p className="text-sm text-gray-600">Connect your Garmin or Strava to auto-sync your runs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">2</span>
                </div>
                <p className="text-sm text-gray-600">Get personalized training recommendations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">3</span>
                </div>
                <p className="text-sm text-gray-600">Start connecting with other runners</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleConnectTracker}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Connect Activity Tracker
            </button>
            
            <div className="flex gap-4">
              <button
                onClick={handleGoToAthleteHome}
                className="flex-1 bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleGoToPlatform}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Back to Platform
              </button>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            You can always connect your tracker later in Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupSuccess;
