import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import axiosInstance from '../../api/axiosConfig';

const AthleteHome = () => {
  const navigate = useNavigate();
  const [hasCrews, setHasCrews] = useState(false);
  const [myCrews, setMyCrews] = useState([]);
  const [loadingCrews, setLoadingCrews] = useState(true);

  // Fetch user's crews on component mount
  useEffect(() => {
    const fetchMyCrews = async () => {
      try {
        setLoadingCrews(true);
        const response = await axiosInstance.get('/api/runcrew/mine');
        
        if (response.data.success && response.data.count > 0) {
          setHasCrews(true);
          setMyCrews(response.data.runCrews);
        } else {
          setHasCrews(false);
          setMyCrews([]);
        }
      } catch (error) {
        console.error('Error fetching crews:', error);
        // If error, assume no crews and show create/join buttons
        setHasCrews(false);
        setMyCrews([]);
      } finally {
        setLoadingCrews(false);
      }
    };

    fetchMyCrews();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Navigation Hub */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
        
        {/* Main Navigation Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* RunCrew Card - Conditional based on whether user has crews */}
          {loadingCrews ? (
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg text-left">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-1">Loading...</h3>
              <p className="text-blue-100 text-sm">Checking your crews</p>
            </div>
          ) : hasCrews ? (
            <button
              onClick={() => navigate('/runcrew-central')}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-1">My Run Crew</h3>
              <p className="text-blue-100 text-sm">
                {myCrews.length === 1 
                  ? myCrews[0].name 
                  : `${myCrews.length} Crews`}
              </p>
            </button>
          ) : (
            <button
              onClick={() => navigate('/join-or-start-crew')}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-1">Start Your Crew</h3>
              <p className="text-blue-100 text-sm">Create or join a RunCrew</p>
            </button>
          )}

          <button
            onClick={() => navigate('/matching-home')}
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="text-4xl mb-3">💪</div>
            <h3 className="text-xl font-bold mb-1">Find Matches</h3>
            <p className="text-orange-100 text-sm">Connect with runners</p>
          </button>

          <button
            onClick={() => navigate('/training')}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="text-4xl mb-3">🏃</div>
            <h3 className="text-xl font-bold mb-1">Training</h3>
            <p className="text-green-100 text-sm">View your plan</p>
          </button>

          <button
            onClick={() => navigate('/athlete-activity')}
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-1">Activity</h3>
            <p className="text-purple-100 text-sm">View your stats</p>
          </button>
        </div>

        {/* Shopping Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Shopping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="text-4xl mb-3">🛍️</div>
              <h3 className="text-xl font-bold mb-1">Get New Gear</h3>
              <p className="text-blue-100 text-sm">Running shoes, watches, apparel</p>
            </button>
            
            <button
              onClick={() => navigate('/merch-store')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold mb-1">Use Your Points</h3>
              <p className="text-orange-100 text-sm">GoFast merch & exclusive items</p>
            </button>
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Morning Run</h3>
                  <p className="text-sm text-gray-600">Tomorrow, 7:00 AM @ Riverside Park</p>
                </div>
                <span className="text-2xl">🚀</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Crew Challenge Ends</h3>
                  <p className="text-sm text-gray-600">2 days left - 7-day streak</p>
                </div>
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="text-2xl mr-3">✅</div>
                <div>
                  <p className="font-medium text-gray-900">Run logged</p>
                  <p className="text-sm text-gray-600">5.2 miles @ 8:15/mi</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🚀</div>
                <div>
                  <p className="font-medium text-gray-900">New 5K PR!</p>
                  <p className="text-sm text-gray-600">23:45 - +50 points</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteHome;
