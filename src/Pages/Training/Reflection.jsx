import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reflection = () => {
  const navigate = useNavigate();
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({
    type: "",
    reflection: ""
  });

  // Sample reflection entries
  const reflectionEntries = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Tempo Run",
      reflection: "Felt really strong today! The pace felt comfortable and I had energy left at the end. Weather was perfect and I was in a great headspace."
    },
    {
      id: 2,
      date: "2024-01-13",
      type: "Long Run",
      reflection: "Tough day. Right calf was tight from mile 8 onwards. Had to slow down significantly. Feeling frustrated but trying to stay positive."
    },
    {
      id: 3,
      date: "2024-01-11",
      type: "Track Workout",
      reflection: "Solid workout. Hit all the splits but felt like I was working hard. Need to work on my mental game during the last few reps."
    },
    {
      id: 4,
      date: "2024-01-09",
      type: "Easy Run",
      reflection: "Perfect recovery run. Legs felt fresh and I could have gone faster but stuck to the plan. Really enjoying the process lately."
    }
  ];

  const injuries = ["Hamstring", "Calf", "Knee", "Groin", "Other"];

  const getFeelingEmoji = (feeling) => {
    switch (feeling) {
      case 'crushed': return '🔥';
      case 'struggled': return '😤';
      case 'fine': return '😌';
      default: return '😐';
    }
  };

  const getFeelingText = (feeling) => {
    switch (feeling) {
      case 'crushed': return 'Crushed it';
      case 'struggled': return 'Struggled';
      case 'fine': return 'Felt fine';
      default: return 'Unknown';
    }
  };

  const handleSubmitNewEntry = () => {
    // In real app, this would save to backend
    alert("New reflection entry saved!");
    setShowNewEntry(false);
    setNewEntry({ feeling: "", injury: false, injuryDetail: [], notes: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Reflection</h1>
              <p className="text-gray-600">Your workout reflections and mental training</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowNewEntry(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                + New Entry
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* New Entry Form */}
        {showNewEntry && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">New Reflection Entry</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-900">Type of Run</label>
                <select
                  value={newEntry.type}
                  onChange={(e) => setNewEntry({...newEntry, type: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select run type</option>
                  <option value="Easy Run">Easy Run</option>
                  <option value="Tempo Run">Tempo Run</option>
                  <option value="Long Run">Long Run</option>
                  <option value="Track Workout">Track Workout</option>
                  <option value="Hill Workout">Hill Workout</option>
                  <option value="Recovery Run">Recovery Run</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-900">Reflection</label>
                <textarea
                  value={newEntry.reflection}
                  onChange={(e) => setNewEntry({...newEntry, reflection: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="How did the workout feel? Any insights or thoughts?"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSubmitNewEntry}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Save Entry
                </button>
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reflection Entries */}
        <div className="space-y-6">
          {reflectionEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{entry.type}</h3>
                  <p className="text-gray-600 text-sm">{entry.date}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-700">{entry.reflection}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflection;
