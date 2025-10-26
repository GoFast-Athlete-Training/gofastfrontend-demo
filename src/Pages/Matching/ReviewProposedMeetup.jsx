import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewProposedMeetup = () => {
  const navigate = useNavigate();
  const [suggestedChanges, setSuggestedChanges] = useState('');

  const meetupDetails = {
    time: 'Saturday @ 7:30 AM',
    location: 'National Mall',
    note: 'Looking forward to an easy 5-6 miles.',
    partner: 'Adam'
  };

  const handleConfirmMeetup = () => {
    navigate('/youre-paired');
  };

  const handleSuggestChanges = () => {
    if (suggestedChanges.trim()) {
      alert(`Changes suggested: ${suggestedChanges}`);
      navigate('/youre-paired');
    } else {
      alert('Please enter your suggested changes');
    }
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
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Review Proposed Meetup
            </h1>
            <p className="text-gray-600 text-lg">
              {meetupDetails.partner} suggested a time and place. Confirm or suggest something new.
            </p>
          </div>

          {/* Meetup Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Meetup Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <div className="font-medium text-gray-900">Time</div>
                  <div className="text-gray-600">{meetupDetails.time}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">{meetupDetails.location}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-medium text-gray-900">Note</div>
                  <div className="text-gray-600">{meetupDetails.note}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Changes */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Want to suggest changes?</h3>
            <textarea
              value={suggestedChanges}
              onChange={(e) => setSuggestedChanges(e.target.value)}
              placeholder="Suggest a different time, location, or add any notes..."
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleConfirmMeetup}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Confirm Meetup
            </button>
            
            <button
              onClick={handleSuggestChanges}
              className="w-full border-2 border-orange-500 text-orange-600 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              Suggest Changes
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6 text-center">
            Once confirmed, you'll both receive calendar invites
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewProposedMeetup;
