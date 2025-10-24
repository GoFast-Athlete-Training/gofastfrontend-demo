import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import axiosInstance from "../../api/axiosConfig";

export default function RunnerProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [goesBy, setGoesBy] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [averagePace, setAveragePace] = useState("");
  const [weeklyMileage, setWeeklyMileage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !goesBy || !age || !city || !averagePace || !weeklyMileage) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      
      // DUAL SAVE: Backend first
      const res = await axiosInstance.put('/api/users/profile', {
        name,
        goesBy,
        age: parseInt(age),
        city,
        averagePace,
        weeklyMileage: parseInt(weeklyMileage)
      });

      if (!res.data) throw new Error('Failed to save profile');
      
      console.log("✅ Profile saved to backend:", res.data);

      // DUAL SAVE: Then localStorage
      localStorage.setItem('runnerProfile', JSON.stringify({
        name,
        goesBy,
        age: parseInt(age),
        city,
        averagePace,
        weeklyMileage: parseInt(weeklyMileage)
      }));
      console.log("💾 Runner profile saved to localStorage");

      // Route to pre-race landing
      console.log("✅ Runner profile complete → PreRaceLanding");
      navigate("/pre-race-landing");
      
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
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={auth.currentUser?.email || ''}
              disabled
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600"
            />
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

