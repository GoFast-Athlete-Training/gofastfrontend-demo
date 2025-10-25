import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pace: '',
    distance: '',
    city: '',
    zip: '',
    timePreference: '',
    goalRace: '',
    availability: []
  });
  const [saved, setSaved] = useState(false);

  const availabilityOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('runnerPreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setFormData(prev => ({
        ...prev,
        ...preferences,
        availability: preferences.availability || []
      }));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAvailabilityToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day]
    }));
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('runnerPreferences', JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    const savedPreferences = localStorage.getItem('runnerPreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setFormData(prev => ({
        ...prev,
        ...preferences,
        availability: preferences.availability || []
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/find')}
                className="text-gray-600 hover:text-gray-800"
              >
                Find Matches
              </button>
              <button
                onClick={() => navigate('/crew')}
                className="text-gray-600 hover:text-gray-800"
              >
                My Crew
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Profile</h1>
          <p className="text-gray-600">Update your preferences to find better matches</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-8">
            {/* Pace and Distance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Pace per mile</label>
                <select 
                  value={formData.pace} 
                  onChange={(e) => handleInputChange('pace', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select your pace</option>
                  <option value="6:00">6:00 min/mile</option>
                  <option value="7:00">7:00 min/mile</option>
                  <option value="8:00">8:00 min/mile</option>
                  <option value="9:00">9:00 min/mile</option>
                  <option value="10:00">10:00 min/mile</option>
                  <option value="11:00">11:00 min/mile</option>
                  <option value="12:00">12:00 min/mile</option>
                  <option value="13:00">13:00 min/mile</option>
                  <option value="14:00">14:00 min/mile</option>
                  <option value="15:00">15:00 min/mile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Preferred distance</label>
                <select 
                  value={formData.distance} 
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select distance</option>
                  <option value="1-3 miles">1-3 miles</option>
                  <option value="3-5 miles">3-5 miles</option>
                  <option value="5-8 miles">5-8 miles</option>
                  <option value="8-12 miles">8-12 miles</option>
                  <option value="12+ miles">12+ miles</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">City</label>
                <input 
                  type="text" 
                  value={formData.city} 
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Enter your city"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">ZIP Code</label>
                <input 
                  type="text" 
                  value={formData.zip} 
                  onChange={(e) => handleInputChange('zip', e.target.value)}
                  placeholder="12345"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Time Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Preferred run time</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Morning', 'Afternoon', 'Evening'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleInputChange('timePreference', time)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.timePreference === time
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Race */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Goal race</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['5K', '10K', 'Half Marathon', 'Marathon'].map((race) => (
                  <button
                    key={race}
                    type="button"
                    onClick={() => handleInputChange('goalRace', race)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.goalRace === race
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {race}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
              <p className="text-sm text-gray-600 mb-4">Select the days you're typically available to run</p>
              <div className="grid grid-cols-7 gap-2">
                {availabilityOptions.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleAvailabilityToggle(day)}
                    className={`p-3 rounded-lg border-2 transition-all text-sm ${
                      formData.availability.includes(day)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
              
              <div className="flex items-center space-x-4">
                {saved && (
                  <span className="text-green-600 text-sm font-medium">
                    ✓ Profile updated successfully!
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Current Preferences Summary */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Pace:</span>
              <span className="font-medium">{formData.pace || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Distance:</span>
              <span className="font-medium">{formData.distance || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{formData.city && formData.zip ? `${formData.city}, ${formData.zip}` : 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{formData.timePreference || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Goal Race:</span>
              <span className="font-medium">{formData.goalRace || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Available:</span>
              <span className="font-medium">{formData.availability.length > 0 ? formData.availability.join(', ') : 'Not set'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
