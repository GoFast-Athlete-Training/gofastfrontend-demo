import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FormRunCrew = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    crewName: '',
    description: '',
    logo: null,
    logoPreview: null
  });
  const [joinCode] = useState('ABC123'); // This would be generated server-side
  const [showMembers, setShowMembers] = useState(false);

  // Mock member data
  const mockMembers = [
    { id: 1, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', miles: 45.2, runs: 8 },
    { id: 2, name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', miles: 38.5, runs: 7 },
    { id: 3, name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', miles: 52.1, runs: 9 }
  ];

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

    // Save to localStorage (demo)
    localStorage.setItem('currentCrew', JSON.stringify({
      ...formData,
      logoPreview: null, // Don't store blob URLs
      joinCode,
      members: mockMembers
    }));

    navigate('/crew-dashboard');
  };

  const handleBack = () => {
    navigate('/join-or-start-crew');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
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

            {/* Join Code Section */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Your Join Code</h3>
              <div className="flex items-center justify-between">
                <code className="text-3xl font-mono tracking-widest text-orange-600 font-bold">
                  {joinCode}
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(joinCode);
                    alert('Code copied to clipboard!');
                  }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Copy
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Share this code with friends to invite them to your crew
              </p>
            </div>
          </div>

          {/* Members Section */}
          <div className="mt-8 border-t pt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Members</h3>
              <button
                onClick={() => setShowMembers(!showMembers)}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                {showMembers ? 'Hide' : 'Show'} ({mockMembers.length})
              </button>
            </div>

            {showMembers && (
              <div className="space-y-3">
                {mockMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.runs} runs this week</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">{member.miles} mi</p>
                      <p className="text-xs text-gray-500">This week</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
  );
};

export default FormRunCrew;
