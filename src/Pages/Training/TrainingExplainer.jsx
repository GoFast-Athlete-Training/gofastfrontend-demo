import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingExplainer = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/training-plan-setup');
  };

  const handleBackToHome = () => {
    navigate('/athlete-home');
  };

  return (
    <div className="min-h-screen bg-white">
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
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🏃‍♂️</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Build Your Training Plan
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get a personalized training plan that adapts to your goals and schedule
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Tell Us Your Goals</h3>
                <p className="text-gray-600 text-sm">Race distance, target time, and current fitness level</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Get Your Plan</h3>
                <p className="text-gray-600 text-sm">AI-generated training plan with daily workouts and pacing</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Track & Adapt</h3>
                <p className="text-gray-600 text-sm">Log workouts and watch your plan evolve with your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">What You Get</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Personalized daily workouts</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Race-specific pacing guidance</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Progress tracking & analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700">Automatic plan adjustments</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGetStarted}
            className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            Build My Plan
          </button>
          
          <button
            onClick={handleBackToHome}
            className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            Back to Home
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Takes 2 minutes • Free to get started
        </p>
      </div>
    </div>
  );
};

export default TrainingExplainer;
