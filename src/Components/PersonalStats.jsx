import React from 'react';

const PersonalStats = ({ 
  milesThisWeek = 38.5, 
  runs = 7, 
  crewRank = 3, 
  lastRun = 'Dec 13',
  showCrewRank = true 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Stats</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{milesThisWeek}</div>
          <div className="text-sm text-gray-600">Miles This Week</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{runs}</div>
          <div className="text-sm text-gray-600">Runs</div>
        </div>
        {showCrewRank && (
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{crewRank}</div>
            <div className="text-sm text-gray-600">Crew Rank</div>
          </div>
        )}
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{lastRun}</div>
          <div className="text-sm text-gray-600">Last Run</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStats;
