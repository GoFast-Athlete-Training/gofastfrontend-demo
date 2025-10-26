import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    if (card === 'connect') {
      navigate('/connect');
    } else if (card === 'train') {
      navigate('/training-hub');
    } else if (card === 'earn') {
      navigate('/gofast-earn-points');
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Accountability Layer
          </h1>
          <p className="text-xl text-gray-600">
            Choose your path to better running
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500"
            onClick={() => handleCardClick('connect')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect</h2>
              <p className="text-gray-600 mb-6">
                Build your running community and find accountability partners
              </p>
              <div className="mt-4">
                <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                  Find Running Partners
                </button>
              </div>
            </div>
          </div>

          {/* Train Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-blue-500"
            onClick={() => handleCardClick('train')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏃‍♂️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Train</h2>
              <p className="text-gray-600 mb-6">
                Track your runs and log your progress
              </p>
              <div className="mt-4">
                <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                  Level Up
                </button>
              </div>
            </div>
          </div>

          {/* Earn Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-green-500"
            onClick={() => handleCardClick('earn')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏆</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Earn</h2>
              <p className="text-gray-600 mb-6">
                Earn points and get rewards
              </p>
              <div className="mt-4">
                <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                  Get Points Toward Merch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
