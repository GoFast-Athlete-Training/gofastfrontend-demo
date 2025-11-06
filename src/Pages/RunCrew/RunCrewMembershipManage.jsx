import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Crew = () => {
  const navigate = useNavigate();
  const [crewMembers, setCrewMembers] = useState([]);

  // Mock accepted matches data
  const mockCrew = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      pace: "8:30",
      nextRun: "Tomorrow, 7:00 AM - Golden Gate Park",
      status: "confirmed",
      runsCompleted: 3
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      pace: "9:00",
      nextRun: "Friday, 6:30 PM - Mission District",
      status: "pending",
      runsCompleted: 1
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      pace: "7:45",
      nextRun: "Sunday, 8:00 AM - Presidio",
      status: "confirmed",
      runsCompleted: 5
    }
  ];

  useEffect(() => {
    setCrewMembers(mockCrew);
  }, []);

  const handleMessage = (member) => {
    alert(`Opening chat with ${member.name}... (This would open a chat interface)`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'declined':
        return 'Declined';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/find-matches')}
                className="text-gray-600 hover:text-gray-800"
              >
                Find Matches
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="text-gray-600 hover:text-gray-800"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your RunCrew</h1>
          <p className="text-gray-600">Your running partners and upcoming runs</p>
        </div>

        {crewMembers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Crew Members Yet</h2>
            <p className="text-gray-600 mb-6">Start inviting runners to build your crew</p>
            <button
              onClick={() => navigate('/find')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Find Matches
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {crewMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  
                  {/* Member Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(member.status)}`}>
                        {getStatusText(member.status)}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">Pace:</span>
                        <span>{member.pace} min/mile</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">Runs Together:</span>
                        <span>{member.runsCompleted}</span>
                      </div>
                      
                      <div className="flex items-start text-sm">
                        <span className="font-medium text-gray-600 mr-2">Next Run:</span>
                        <span className="text-gray-900">{member.nextRun}</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleMessage(member)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Message
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Section */}
        {crewMembers.length > 0 && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Crew Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {crewMembers.length}
                </div>
                <div className="text-gray-600">Crew Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {crewMembers.reduce((total, member) => total + member.runsCompleted, 0)}
                </div>
                <div className="text-gray-600">Total Runs Together</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {crewMembers.filter(member => member.status === 'confirmed').length}
                </div>
                <div className="text-gray-600">Confirmed Runs</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crew;
