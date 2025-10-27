import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingPlanSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    raceName: '',
    raceDistance: '',
    targetTime: '',
    raceDate: '',
    currentPace: '',
    weeklyMileage: '',
    experience: '',
    trainingDays: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTrainingDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      trainingDays: prev.trainingDays.includes(day)
        ? prev.trainingDays.filter(d => d !== day)
        : [...prev.trainingDays, day]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.raceName || !formData.raceDistance || !formData.targetTime || !formData.raceDate || 
        !formData.currentPace || !formData.weeklyMileage || !formData.experience ||
        formData.trainingDays.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Save to localStorage (demo)
    localStorage.setItem('trainingPlan', JSON.stringify(formData));

    // Navigate to training plan page
    navigate('/training-plan');
  };

  const handleBack = () => {
    navigate('/training-explainer');
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/logo.jpg" alt="GoFast" className="w-16 h-16 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Build Your Training Plan</h1>
          <p className="text-gray-600">Tell us about your goals and we'll create a personalized plan</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Race Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Race Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={formData.raceName} 
              onChange={(e) => handleInputChange('raceName', e.target.value)}
              placeholder="e.g., Boston Marathon, NYC Half Marathon"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Race Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Race Distance <span className="text-red-500">*</span>
            </label>
            <select 
              value={formData.raceDistance} 
              onChange={(e) => handleInputChange('raceDistance', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select your race distance</option>
              <option value="5K">5K (3.1 miles)</option>
              <option value="10K">10K (6.2 miles)</option>
              <option value="Half Marathon">Half Marathon (13.1 miles)</option>
              <option value="Marathon">Marathon (26.2 miles)</option>
            </select>
          </div>

          {/* Target Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Time <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={formData.targetTime} 
              onChange={(e) => handleInputChange('targetTime', e.target.value)}
              placeholder="e.g., 1:45:00 for half marathon"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Race Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Race Date <span className="text-red-500">*</span>
            </label>
            <input 
              type="date" 
              value={formData.raceDate} 
              onChange={(e) => handleInputChange('raceDate', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Current Pace */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Easy Run Pace <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={formData.currentPace} 
              onChange={(e) => handleInputChange('currentPace', e.target.value)}
              placeholder="e.g., 9:30 per mile"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Weekly Mileage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Weekly Mileage <span className="text-red-500">*</span>
            </label>
            <input 
              type="number" 
              value={formData.weeklyMileage} 
              onChange={(e) => handleInputChange('weeklyMileage', e.target.value)}
              placeholder="e.g., 25"
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Running Experience <span className="text-red-500">*</span>
            </label>
            <select 
              value={formData.experience} 
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
            </select>
          </div>

          {/* Training Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Training Days <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {days.map(day => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleTrainingDayToggle(day)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                    formData.trainingDays.includes(day)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Create My Training Plan
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="w-full mt-4 bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TrainingPlanSetup;
