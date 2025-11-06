import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosConfig';

const FormRunCrew = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    crewName: 'Morning Warriors',
    description: 'Early morning runners who love coffee and crushing goals together. We meet at 6 AM sharp!',
    crewCode: 'FAST123', // DEMO: Pre-filled so you can click through
    logo: null,
    logoPreview: null,
    icon: '👥' // Default icon option
  });

  const iconOptions = ['👥', '🏃‍♂️', '🔥', '⚡', '🎯', '💪', '🌟', '🚀', '🏔️', '🌅'];

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

  const handleSubmit = async () => {
    if (!formData.crewName.trim()) {
      alert('Please enter a crew name');
      return;
    }

    if (!formData.crewCode.trim()) {
      alert('Please enter a crew code');
      return;
    }

    // Get athleteId - try localStorage first, then check if we can get from auth
    const athleteId = localStorage.getItem('athleteId');
    
    // If no athleteId, fallback to demo mode
    if (!athleteId) {
      console.warn('No athleteId found - using demo mode');
      localStorage.setItem('currentCrew', JSON.stringify({
        ...formData,
        logoPreview: null, // Don't store blob URLs
        joinCode: formData.crewCode,
        members: []
      }));
      navigate('/run-crew-success');
      return;
    }

    setIsSubmitting(true);

    try {
      // Call API to create run crew
      const response = await axiosInstance.post('/api/runcrew/create', {
        name: formData.crewName.trim(),
        joinCode: formData.crewCode.trim(),
        description: formData.description?.trim() || null,
        icon: formData.logoPreview ? null : formData.icon, // Use icon if no logo
        logo: formData.logoPreview ? formData.logoPreview : null, // TODO: Upload logo if needed
        athleteId: athleteId
      });

      if (response.data.success && response.data.runCrew) {
        // Store created crew data
        localStorage.setItem('currentCrew', JSON.stringify({
          id: response.data.runCrew.id,
          name: response.data.runCrew.name,
          joinCode: response.data.runCrew.joinCode,
          description: response.data.runCrew.description,
          icon: response.data.runCrew.icon,
          logo: response.data.runCrew.logo,
          members: response.data.runCrew.memberships || [],
          crewCode: response.data.runCrew.joinCode
        }));

        navigate('/run-crew-success');
      } else {
        throw new Error('Failed to create crew');
      }
    } catch (error) {
      console.error('Error creating crew:', error);
      
      // Handle specific error cases
      if (error.response?.status === 409) {
        alert(error.response.data?.message || 'This join code is already taken. Please choose another.');
      } else if (error.response?.status === 403) {
        alert('Unauthorized. Please make sure you are logged in.');
      } else if (error.response?.status === 400) {
        alert(error.response.data?.message || 'Please check your input and try again.');
      } else {
        // Network error or backend down - fallback to demo mode
        console.warn('API call failed - using demo mode fallback');
        alert('Backend is currently unavailable. Using demo mode.');
        localStorage.setItem('currentCrew', JSON.stringify({
          ...formData,
          logoPreview: null,
          joinCode: formData.crewCode,
          members: []
        }));
        navigate('/run-crew-success');
      }
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Crew Logo/Icon */}
          <div className="text-center mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">Crew Logo or Icon</label>
            
            {/* Logo Upload Option */}
            <div className="mb-4">
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
                  <span className="text-5xl">{formData.icon}</span>
                )}
              </div>
              <button
                onClick={handleImageClick}
                className="text-orange-500 text-sm font-medium hover:text-orange-600 mb-2"
              >
                {formData.logo ? 'Change Logo' : 'Upload Logo (Optional)'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Icon Picker */}
            {!formData.logoPreview && (
              <div>
                <p className="text-sm text-gray-600 mb-3">Or choose an icon:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {iconOptions.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => handleInputChange('icon', icon)}
                      className={`w-12 h-12 rounded-full text-2xl flex items-center justify-center transition-all ${
                        formData.icon === icon
                          ? 'bg-orange-500 scale-110 ring-2 ring-orange-300'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            )}
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
              disabled={isSubmitting}
              className={`bg-orange-500 text-white py-4 px-12 rounded-xl font-bold text-lg transition-colors shadow-lg ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-orange-600'
              }`}
            >
              {isSubmitting ? 'Creating...' : 'Create Crew'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRunCrew;

