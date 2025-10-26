import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';

const ReviewProposedMeetup = () => {
  const navigate = useNavigate();

  // Mock meetup proposal
  const meetup = {
    runner: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      pace: "8:30"
    },
    details: {
      location: "Golden Gate Park",
      address: "501 Stanyan St, San Francisco, CA",
      date: "Saturday, March 15th",
      time: "8:00 AM",
      distance: "5 miles",
      pace: "8:30 min/mile",
      route: "Park loop with water stops",
      notes: "Meet at the main entrance. I'll bring water and snacks!"
    }
  };

  const handleAccept = () => {
    console.log('Accepted meetup');
    navigate('/youre-paired');
  };

  const handleDecline = () => {
    console.log('Declined meetup');
    navigate('/matching-home');
  };

  const handleSuggestChanges = () => {
    console.log('Suggesting changes');
    // In a real app, this would open a form to suggest changes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/matching-home')}
              className="text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
              <span className="font-bold text-gray-900">GoFast</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Run Proposal</h1>
          <p className="text-gray-600">Review the meetup details</p>
        </div>

        {/* Runner Info */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <img 
              src={meetup.runner.avatar} 
              alt={meetup.runner.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-gray-900">{meetup.runner.name}</h3>
              <p className="text-sm text-gray-600">Pace: {meetup.runner.pace}/mile</p>
            </div>
          </div>
        </div>

        {/* Meetup Details */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Run Details</h2>
            
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{meetup.details.location}</div>
                  <div className="text-sm text-gray-600">{meetup.details.address}</div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{meetup.details.date}</div>
                  <div className="text-sm text-gray-600">{meetup.details.time}</div>
                </div>
              </div>

              {/* Distance & Pace */}
              <div className="flex items-start space-x-3">
                <FaClock className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">{meetup.details.distance}</div>
                  <div className="text-sm text-gray-600">Pace: {meetup.details.pace}</div>
                </div>
              </div>

              {/* Route */}
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Route</h3>
                <p className="text-sm text-gray-600">{meetup.details.route}</p>
              </div>

              {/* Notes */}
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Notes</h3>
                <p className="text-sm text-gray-600">{meetup.details.notes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={handleAccept}
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <FaCheck className="w-5 h-5" />
            <span>Accept Run</span>
          </button>
          
          <button
            onClick={handleSuggestChanges}
            className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            Suggest Changes
          </button>
          
          <button
            onClick={handleDecline}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <FaTimes className="w-4 h-4" />
            <span>Decline</span>
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Once you accept, you'll be able to chat and coordinate the details!
        </p>
      </div>
    </div>
  );
};

export default ReviewProposedMeetup;
