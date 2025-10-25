import React from 'react';
import { useNavigate } from 'react-router-dom';

const YourePaired = () => {
  const navigate = useNavigate();

  const meetupDetails = {
    time: 'Saturday @ 7:30 AM',
    location: 'National Mall',
    partner: 'Adam'
  };

  const handleAddToCalendar = () => {
    alert('Added to calendar! You\'ll receive a reminder before the run.');
    navigate('/athlete-home');
  };

  const handleViewCrew = () => {
    navigate('/crew');
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
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">You're Paired!</h1>
            <p className="text-gray-600 text-lg">
              You're all set to meet {meetupDetails.partner} for a run.
            </p>
          </div>

          {/* Meetup Image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
              alt="Runners meeting up"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Meetup Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Meetup Details</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">⏰</span>
                <div className="text-center">
                  <div className="font-medium text-gray-900">Time</div>
                  <div className="text-red-600 font-bold">{meetupDetails.time}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📍</span>
                <div className="text-center">
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-blue-600 font-bold">{meetupDetails.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Pro Tips</h3>
            <p className="text-gray-700 text-sm">
              Check the weather. Be safe. Show up ready to run.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCalendar}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Add to Calendar
            </button>
            
            <button
              onClick={handleViewCrew}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              View My Crew
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            You'll receive a reminder 24 hours before the run
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourePaired;
