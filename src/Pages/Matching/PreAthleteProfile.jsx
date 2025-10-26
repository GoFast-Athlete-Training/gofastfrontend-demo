import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRunning, FaArrowRight } from 'react-icons/fa';

const PreAthleteProfile = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/match-profile-setup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="text-center">
          {/* Hero Icon */}
          <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-8 flex items-center justify-center">
            <FaRunning className="w-12 h-12 text-orange-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Running Match?
          </h1>
          <p className="text-gray-600 mb-8">
            Connect with runners who share your pace, goals, and schedule. 
            Build your running community one step at a time.
          </p>

          {/* Benefits */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Why GoFast Matching?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">1</span>
                </div>
                <p className="text-sm text-gray-600">Find runners with similar paces and goals</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">2</span>
                </div>
                <p className="text-sm text-gray-600">Connect with local runners in your area</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">3</span>
                </div>
                <p className="text-sm text-gray-600">Build lasting friendships through running</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleGetStarted}
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <FaArrowRight className="w-5 h-5" />
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Takes less than 2 minutes to set up
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreAthleteProfile;
