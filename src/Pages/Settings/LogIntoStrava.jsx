import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIntoStrava = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinueWithApple = () => {
    alert('Apple login coming soon!');
  };

  const handleContinueWithGoogle = () => {
    alert('Google login coming soon!');
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Simulate login
    alert('Strava connected successfully!');
    navigate('/gofast-earn-points');
  };

  const handleBack = () => {
    navigate('/link-running-app');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏃‍♂️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Log Into Strava
            </h1>
            <p className="text-gray-600 text-lg">
              Connect your account to sync past and future runs for GoFast points.
            </p>
          </div>

          {/* Login Options */}
          <div className="space-y-4 mb-8">
            {/* Apple Login */}
            <button
              onClick={handleContinueWithApple}
              className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-3"
            >
              <span className="text-2xl">🍎</span>
              <span>Continue with Apple</span>
            </button>

            {/* Google Login */}
            <button
              onClick={handleContinueWithGoogle}
              className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3"
            >
              <span className="text-2xl">G</span>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or Login with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-orange-600 hover:text-orange-800 text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Log In
            </button>
          </form>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-4">
              By connecting, you agree to share your running data for progress tracking and rewards.
            </p>
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIntoStrava;
