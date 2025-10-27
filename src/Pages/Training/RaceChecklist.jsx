import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RaceChecklist = () => {
  const navigate = useNavigate();

  // Checklist categories
  const [checklists, setChecklists] = useState({
    gear: [
      { item: "Running shoes", checked: true },
      { item: "Race outfit", checked: true },
      { item: "GPS watch", checked: false },
      { item: "Heart rate monitor", checked: true },
      { item: "Sunglasses", checked: false },
      { item: "Hat/visor", checked: true }
    ],
    nutrition: [
      { item: "Pre-race breakfast", checked: true },
      { item: "Energy gels (6-8)", checked: false },
      { item: "Electrolyte tablets", checked: true },
      { item: "Water bottle", checked: true },
      { item: "Post-race recovery drink", checked: false }
    ],
    logistics: [
      { item: "Race bib and safety pins", checked: true },
      { item: "Timing chip", checked: true },
      { item: "Transportation to start", checked: false },
      { item: "Family meeting plan", checked: true },
      { item: "Phone and charger", checked: true },
      { item: "ID and insurance card", checked: false }
    ],
    recovery: [
      { item: "Change of clothes", checked: true },
      { item: "Recovery shoes", checked: false },
      { item: "Protein shake", checked: true },
      { item: "Ice pack", checked: false },
      { item: "Compression socks", checked: true }
    ]
  });

  const toggleItem = (category, index) => {
    setChecklists(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => 
        i === index ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const getProgress = (category) => {
    const checked = checklists[category].filter(item => item.checked).length;
    const total = checklists[category].length;
    return Math.round((checked / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Race Checklist</h1>
              <p className="text-gray-600">Everything you need for race day</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/race-hub")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Race Hub
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Overall Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Overall Progress 📊</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(checklists).map((category) => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {getProgress(category)}%
                </div>
                <p className="text-sm text-gray-600 capitalize">{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(checklists).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold capitalize">{category}</h3>
                <div className="text-sm text-gray-500">
                  {items.filter(item => item.checked).length}/{items.length}
                </div>
              </div>
              
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleItem(category, index)}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      item.checked 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300'
                    }`}>
                      {item.checked && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`flex-1 ${item.checked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Race Day Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-900">Race Day Tips 💡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-yellow-900 mb-3">Night Before</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Lay out all gear the night before</li>
                <li>• Set multiple alarms</li>
                <li>• Eat dinner 12-14 hours before start</li>
                <li>• Get 7-8 hours of sleep</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-900 mb-3">Race Morning</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Wake up 3-4 hours before start</li>
                <li>• Eat breakfast 2-3 hours before</li>
                <li>• Arrive at start area 1 hour early</li>
                <li>• Warm up 15-20 minutes before start</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceChecklist;
