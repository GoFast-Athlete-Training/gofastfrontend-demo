import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AthleteProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [goesBy, setGoesBy] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [averagePace, setAveragePace] = useState("");
  const [weeklyMileage, setWeeklyMileage] = useState("");
  const [handle, setHandle] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      setProfilePhoto(file);
      setProfilePhotoPreview(previewUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !goesBy || !age || !city || !averagePace || !weeklyMileage) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      // Save to localStorage only (demo mode)
      localStorage.setItem('runnerProfile', JSON.stringify({
        name,
        goesBy,
        age: parseInt(age),
        city,
        averagePace,
        weeklyMileage: parseInt(weeklyMileage),
        handle,
        personalMessage,
        profilePhotoPreview: null // Don't store blob URLs
      }));
      console.log("💾 Runner profile saved to localStorage");

      // Route to dashboard
      navigate("/dashboard");
      
    } catch (error) {
      console.error("❌ Profile save failed:", error);
      alert("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Welcome to GoFast! 🏃‍♂️
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Just tell us a bit about yourself and we'll get started!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo */}
          <div className="text-center">
            <div 
              className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
              onClick={handleImageClick}
            >
              {profilePhotoPreview ? (
                <img 
                  src={profilePhotoPreview} 
                  alt="Profile preview" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <span className="text-4xl">👤</span>
              )}
            </div>
            <div className="flex items-center justify-center text-orange-500 text-sm cursor-pointer hover:text-orange-600" onClick={handleImageClick}>
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              {profilePhoto ? 'Change Photo' : 'Add Photo'}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Sarah Johnson"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold text-gray-700">Goes By</label>
              <input
                type="text"
                value={goesBy}
                onChange={(e) => setGoesBy(e.target.value)}
                placeholder="e.g., Sarah, F3 names, etc."
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
              <p className="text-sm text-gray-500">What should we call you?</p>
            </div>
          </div>

          <div className="space-y-2">
                <label className="font-semibold text-gray-700">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g., 32"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-gray-700">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g., Charlotte, NC"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
                <p className="text-sm text-gray-500">Your current city and state</p>
              </div>

          <div className="space-y-2">
            <label className="font-semibold text-gray-700">Handle</label>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="e.g., @runner_sarah"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <p className="text-sm text-gray-500">Your social handle</p>
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-gray-700">Personal Message</label>
            <textarea
              value={personalMessage}
              onChange={(e) => setPersonalMessage(e.target.value)}
              placeholder="Tell us about yourself as a runner..."
              rows="3"
              maxLength="200"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <div className="text-right text-sm text-gray-500">
              {personalMessage.length}/200
            </div>
          </div>



          <div className="border-t-2 border-gray-200 pt-6 mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Your Current Fitness</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-semibold text-gray-700">Average Pace (5K)</label>
                  <input
                    type="text"
                    value={averagePace}
                    onChange={(e) => setAveragePace(e.target.value)}
                    placeholder="e.g., 8:30"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                  <p className="text-sm text-gray-500">Per mile (MM:SS format)</p>
                </div>

              <div className="space-y-2">
                <label className="font-semibold text-gray-700">Weekly Mileage</label>
                <input
                  type="number"
                  value={weeklyMileage}
                  onChange={(e) => setWeeklyMileage(e.target.value)}
                  placeholder="e.g., 25"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
                <p className="text-sm text-gray-500">Miles per week</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? "Saving..." : "Save & Continue"}
              </button>
        </form>
      </div>
    </div>
  );
}

