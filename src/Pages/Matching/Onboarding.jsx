import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pace: '',
    distance: '',
    city: '',
    timePreference: '',
    goalRace: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Store data locally and navigate to find matches
      localStorage.setItem('runnerPreferences', JSON.stringify(formData));
      navigate('/find');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Contact Details</h2>
        <p className="text-gray-600">Basic info to connect with other runners</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Name</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Your first name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your@email.com"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Phone (optional)</label>
          <input 
            type="tel" 
            value={formData.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Runner Baseline & Preferences</h2>
        <p className="text-gray-600">Help us find runners who match your style</p>
      </div>
      
      <div className="space-y-6">
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
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">When do you like to run?</h2>
        <p className="text-gray-600">Help us find runners with similar schedules</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Preferred run time</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Morning', 'Afternoon', 'Evening'].map((time) => (
              <button
                key={time}
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Goal race</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['5K', '10K', 'Half Marathon', 'Marathon'].map((race) => (
              <button
                key={race}
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
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="text-sm text-gray-500">
              Step {step} of 3
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                step === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={handleNext}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all"
            >
              {step === 3 ? 'Find Your Match' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
