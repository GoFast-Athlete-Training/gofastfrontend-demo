import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaUsers } from 'react-icons/fa';

export default function RunCrewJoinSuccess() {
  const navigate = useNavigate();
  
  // Get crew data from localStorage (set after join)
  const joinedCrew = JSON.parse(localStorage.getItem('joinedCrew') || '{}');
  const crewName = joinedCrew.crewName || 'Your Crew';

  const handleGoToCentral = () => {
    navigate('/runcrew-central');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">You're In!</h1>
          <p className="text-gray-600 mb-2">
            You've successfully joined
          </p>
          <p className="text-xl font-bold text-orange-600 mb-8">{crewName}</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-600 mb-4">What's next?</p>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <FaUsers className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Meet Your Crew</p>
                  <p className="text-sm text-gray-600">See who else is in your crew and start connecting</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleGoToCentral}
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
          >
            Go to Run Crew Central
          </button>
        </div>
      </div>
    </div>
  );
}

