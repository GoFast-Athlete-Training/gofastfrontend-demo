import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingPlanSuccess = () => {
  const navigate = useNavigate();
  const [isHydrating, setIsHydrating] = useState(true);
  const [planGenerated, setPlanGenerated] = useState(false);

  useEffect(() => {
    // Simulate plan generation
    const timer = setTimeout(() => {
      setIsHydrating(false);
      setPlanGenerated(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlanFeedback = (feedback) => {
    if (feedback === 'perfect') {
      navigate('/dashboard');
    } else {
      // Navigate to adjustment flow
      navigate('/training-plan-adjustment');
    }
  };

  if (isHydrating) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Header */}
          <div className="mb-8">
            <img src="/logo.jpg" alt="GoFast" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Hydrating Your Training Plan</h1>
            <p className="text-gray-600">Building your personalized training schedule...</p>
          </div>

          {/* Loading Animation */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-sm text-gray-500">Analyzing your goals, pace, and schedule...</p>
          </div>

          {/* Progress Steps */}
          <div className="space-y-3 text-left">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Calculating base mileage</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Setting pace progressions</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-4 h-4 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              </div>
              <span>Building weekly schedule</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (planGenerated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <img src="/logo.jpg" alt="GoFast" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Training Plan Ready!</h1>
            <p className="text-gray-600">Your personalized 16-week training plan has been generated</p>
          </div>

          {/* Plan Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Plan Overview</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Race:</span>
                <span className="font-medium ml-2">Boston Marathon</span>
              </div>
              <div>
                <span className="text-gray-600">Target Time:</span>
                <span className="font-medium ml-2">3:30:00</span>
              </div>
              <div>
                <span className="text-gray-600">Starting Mileage:</span>
                <span className="font-medium ml-2">20 miles/week</span>
              </div>
              <div>
                <span className="text-gray-600">Peak Mileage:</span>
                <span className="font-medium ml-2">45 miles/week</span>
              </div>
            </div>
          </div>

          {/* Feedback Question */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How does this look?</h2>
            <p className="text-gray-600 mb-6">Review your training plan and let us know if it needs adjustments</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handlePlanFeedback('too-hard')}
                className="bg-red-50 border-2 border-red-200 text-red-700 py-4 px-6 rounded-xl font-medium hover:bg-red-100 transition-colors"
              >
                <div className="text-2xl mb-2">😰</div>
                <div className="font-semibold">Too Hard</div>
                <div className="text-sm">Reduce intensity</div>
              </button>
              
              <button
                onClick={() => handlePlanFeedback('perfect')}
                className="bg-green-50 border-2 border-green-200 text-green-700 py-4 px-6 rounded-xl font-medium hover:bg-green-100 transition-colors"
              >
                <div className="text-2xl mb-2">😊</div>
                <div className="font-semibold">Perfect</div>
                <div className="text-sm">Start training</div>
              </button>
              
              <button
                onClick={() => handlePlanFeedback('too-easy')}
                className="bg-blue-50 border-2 border-blue-200 text-blue-700 py-4 px-6 rounded-xl font-medium hover:bg-blue-100 transition-colors"
              >
                <div className="text-2xl mb-2">💪</div>
                <div className="font-semibold">Too Easy</div>
                <div className="text-sm">Increase intensity</div>
              </button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="text-center">
            <button
              onClick={() => navigate('/training-plan-setup')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Back to Setup
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TrainingPlanSuccess;
