import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FormRunCrew = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    crewName: 'Morning Warriors',
    description: 'Early morning runners who love coffee and crushing goals together. We meet at 6 AM sharp!',
    crewCode: 'FAST123', // DEMO: Pre-filled so you can click through
    logo: null,
    logoPreview: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      
      setFormData(prev => ({
        ...prev,
        logo: file,
        logoPreview: previewUrl
      }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!formData.crewName.trim()) {
      alert('Please enter a crew name');
      return;
    }

    if (!formData.crewCode.trim()) {
      alert('Please enter a crew code');
      return;
    }

    // Save to localStorage (demo)
    localStorage.setItem('currentCrew', JSON.stringify({
      ...formData,
      logoPreview: null, // Don't store blob URLs
      joinCode: formData.crewCode,
      members: []
    }));

    navigate('/run-crew-success');
  };

  const handleBack = () => {
    navigate('/join-or-start-crew');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <button onClick={handleBack} className="mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Run Crew
          </h1>
          <p className="text-xl text-gray-600">
            Set up your crew and invite others to join
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Crew Logo */}
          <div className="text-center mb-8">
            <div 
              className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
              onClick={handleImageClick}
            >
              {formData.logoPreview ? (
                <img 
                  src={formData.logoPreview} 
                  alt="Crew logo preview" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <span className="text-5xl">👥</span>
              )}
            </div>
            <button
              onClick={handleImageClick}
              className="text-orange-500 text-sm font-medium hover:text-orange-600"
            >
              {formData.logo ? 'Change Logo' : 'Add Logo'}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Form Fields */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Crew Name *
              </label>
              <input
                type="text"
                value={formData.crewName}
                onChange={(e) => handleInputChange('crewName', e.target.value)}
                placeholder="e.g., Morning Warriors"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create Your Join Code *
              </label>
              <input
                type="text"
                value={formData.crewCode}
                onChange={(e) => handleInputChange('crewCode', e.target.value)}
                placeholder="e.g., runningfoolsofarlington"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              />
              <p className="text-sm text-gray-500 mt-1">Make it memorable - others will use this to join your crew!</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Tell us about your crew..."
                rows="4"
                maxLength="500"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.description.length}/500
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-orange-500 text-white py-4 px-12 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Create Crew
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRunCrew;

