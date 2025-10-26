import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Running History
    longestRun: '',
    longestRace: '',
    raceTime: '',
    currentlyTraining: '',
    runsPerWeek: '',
    weeklyMileage: '',
    longestRunLastMonth: '',
    
    // Goals & Training
    primaryGoal: [],
    trainingFor: '',
    raceDate: '',
    raceName: '',
    shareRace: '',
    
    // Running Style
    myRunningStyle: '',
    preferredPartnerStyle: '',
    matchFrequency: '',
    availability: [],
    timeWindows: '',
    willingToTravel: '',
    
    // Basic Preferences
    pace: '',
    distance: '',
    experience: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    // Store match preferences locally
    localStorage.setItem('matchPreferences', JSON.stringify(formData));
    navigate('/match-profile-success');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl font-bold">Let's Get to Know You</h1>
              <p className="text-blue-100 text-sm">Help us understand your running preferences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop" 
            alt="Runner on path"
            className="w-full h-48 object-cover rounded-b-3xl"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-6 space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Let's Get to Know You</h2>
            <p className="text-gray-600 text-sm">
              Help us understand your training history and current fitness. This helps improve your match experience later.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center text-sm text-blue-800">
              <span className="text-orange-500 mr-2">🚀</span>
              Takes 2-3 minutes
            </div>
            <div className="flex items-center text-sm text-blue-800">
              <span className="text-orange-500 mr-2">🚀</span>
              You can update this anytime in your profile
            </div>
            <div className="flex items-center text-sm text-blue-800">
              <span className="text-orange-500 mr-2">🚀</span>
              We'll ask about your past training and current goals
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Running History */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Longest run ever (miles)</label>
              <input 
                type="number" 
                value={formData.longestRun} 
                onChange={(e) => handleInputChange('longestRun', e.target.value)}
                placeholder="Ex: 24"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Are you currently training for a race?</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="currentlyTraining" 
                    value="Yes"
                    checked={formData.currentlyTraining === 'Yes'}
                    onChange={(e) => handleRadioChange('currentlyTraining', e.target.value)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="currentlyTraining" 
                    value="No"
                    checked={formData.currentlyTraining === 'No'}
                    onChange={(e) => handleRadioChange('currentlyTraining', e.target.value)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Average runs per week</label>
              <input 
                type="number" 
                value={formData.runsPerWeek} 
                onChange={(e) => handleInputChange('runsPerWeek', e.target.value)}
                placeholder="Ex: 4"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Running Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Choose what best describes you when you run?</label>
              <div className="space-y-2">
                {['Talkative', 'Quiet / Zoned-In', 'Social but Serious', 'Competitive', 'Newbie Friendly', 'Chill / Go-with-the-Flow'].map((style) => (
                  <label key={style} className="flex items-center">
                    <input 
                      type="radio" 
                      name="myRunningStyle" 
                      value={style}
                      checked={formData.myRunningStyle === style}
                      onChange={(e) => handleRadioChange('myRunningStyle', e.target.value)}
                      className="mr-3"
                    />
                    {style}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Who do you prefer to run with?</label>
              <div className="space-y-2">
                {['Talkative', 'Quiet / Zoned-In', 'Social but Serious', 'Competitive', 'Newbie Friendly', 'Doesn\'t Matter'].map((style) => (
                  <label key={style} className="flex items-center">
                    <input 
                      type="radio" 
                      name="preferredPartnerStyle" 
                      value={style}
                      checked={formData.preferredPartnerStyle === style}
                      onChange={(e) => handleRadioChange('preferredPartnerStyle', e.target.value)}
                      className="mr-3"
                    />
                    {style}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">How often do you want to be matched?</label>
              <div className="space-y-2">
                {['Just once a week', '2-3x per week', 'As often as possible', 'Not sure yet'].map((freq) => (
                  <label key={freq} className="flex items-center">
                    <input 
                      type="radio" 
                      name="matchFrequency" 
                      value={freq}
                      checked={formData.matchFrequency === freq}
                      onChange={(e) => handleRadioChange('matchFrequency', e.target.value)}
                      className="mr-3"
                    />
                    {freq}
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Preferred run days</label>
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <button
                    key={day}
                    onClick={() => handleArrayToggle('availability', day)}
                    className={`p-2 rounded-lg border-2 transition-all text-sm ${
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Preferred time windows</label>
              <div className="space-y-2">
                {['Early AM', 'Morning', 'Midday', 'Evening', 'Night', 'Flexible'].map((time) => (
                  <label key={time} className="flex items-center">
                    <input 
                      type="radio" 
                      name="timeWindows" 
                      value={time}
                      checked={formData.timeWindows === time}
                      onChange={(e) => handleRadioChange('timeWindows', e.target.value)}
                      className="mr-3"
                    />
                    {time}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Willing to travel for a match?</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="willingToTravel" 
                    value="Yes"
                    checked={formData.willingToTravel === 'Yes'}
                    onChange={(e) => handleRadioChange('willingToTravel', e.target.value)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="willingToTravel" 
                    value="No"
                    checked={formData.willingToTravel === 'No'}
                    onChange={(e) => handleRadioChange('willingToTravel', e.target.value)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="p-6 pt-0">
          <button
            onClick={handleContinue}
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
          >
            Continue
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchProfile;
