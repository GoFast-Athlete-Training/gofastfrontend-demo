import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartRunCrew = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    pace: '',
    distance: '',
    meetupDay: '',
    meetupTime: '',
    maxMembers: '',
    isPublic: true
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateCrew = () => {
    // Validate required fields
    const required = ['name', 'description', 'location', 'pace', 'distance', 'meetupDay', 'meetupTime'];
    const missing = required.filter(field => !formData[field]);
    
    if (missing.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate crew creation
    alert('Run crew created successfully!');
    navigate('/run-crew-success');
  };

  const handleBack = () => {
    navigate('/connect');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Run Crew
          </h1>
          <p className="text-xl text-gray-600">
            Create a running group and invite others to join
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={(e) => { e.preventDefault(); handleCreateCrew(); }} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Crew Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Morning Warriors"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., Central Park, NYC"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Tell people what your crew is about..."
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            {/* Running Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pace *</label>
                <select
                  value={formData.pace}
                  onChange={(e) => handleInputChange('pace', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select pace</option>
                  <option value="6:00-7:00">6:00-7:00 min/mile</option>
                  <option value="7:00-8:00">7:00-8:00 min/mile</option>
                  <option value="8:00-9:00">8:00-9:00 min/mile</option>
                  <option value="9:00-10:00">9:00-10:00 min/mile</option>
                  <option value="10:00+">10:00+ min/mile</option>
                  <option value="All Paces">All Paces Welcome</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance *</label>
                <select
                  value={formData.distance}
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select distance</option>
                  <option value="3-5 miles">3-5 miles</option>
                  <option value="5-8 miles">5-8 miles</option>
                  <option value="8-12 miles">8-12 miles</option>
                  <option value="12+ miles">12+ miles</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Meetup Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meetup Day *</label>
                <select
                  value={formData.meetupDay}
                  onChange={(e) => handleInputChange('meetupDay', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meetup Time *</label>
                <input
                  type="time"
                  value={formData.meetupTime}
                  onChange={(e) => handleInputChange('meetupTime', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* Additional Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Members</label>
                <input
                  type="number"
                  value={formData.maxMembers}
                  onChange={(e) => handleInputChange('maxMembers', e.target.value)}
                  placeholder="e.g., 20"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
                <select
                  value={formData.isPublic ? 'public' : 'private'}
                  onChange={(e) => handleInputChange('isPublic', e.target.value === 'public')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="public">Public (anyone can join)</option>
                  <option value="private">Private (invite only)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Create Run Crew
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartRunCrew;
