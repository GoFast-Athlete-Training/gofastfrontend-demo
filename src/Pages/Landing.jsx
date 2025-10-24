import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="text-8xl mb-4">🏃‍♂️</div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Let's Go Fast!
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            The platform that helps you train, stay mentally fit, and ready to meet your goals!
          </p>
          
          {/* CTA Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="px-12 py-6 bg-orange-500 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:bg-orange-600 hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            See the Platform 🚀
          </button>
          
          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Training</h3>
              <p className="text-gray-600">Personalized plans that adapt to your progress</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mental Fitness</h3>
              <p className="text-gray-600">Stay motivated and mentally strong</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Goal Achievement</h3>
              <p className="text-gray-600">Track progress and celebrate victories</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Landing;
