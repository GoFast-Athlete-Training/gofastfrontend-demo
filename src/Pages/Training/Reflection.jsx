import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reflection = () => {
  const navigate = useNavigate();
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({
    feeling: "",
    injury: false,
    injuryDetail: [],
    notes: ""
  });

  // Sample reflection entries
  const reflectionEntries = [
    {
      id: 1,
      date: "2024-01-15",
      workout: "Tempo Run - 8 miles @ 7:50 pace",
      feeling: "crushed",
      injury: false,
      notes: "Felt really strong today! The pace felt comfortable and I had energy left at the end. Weather was perfect and I was in a great headspace.",
      coachResponse: "Great work! Your pacing was spot on. Keep building that confidence."
    },
    {
      id: 2,
      date: "2024-01-13",
      workout: "Long Run - 16 miles easy",
      feeling: "struggled",
      injury: true,
      injuryDetail: ["Calf"],
      notes: "Tough day. Right calf was tight from mile 8 onwards. Had to slow down significantly. Feeling frustrated but trying to stay positive.",
      coachResponse: "Smart to listen to your body. Let's adjust this week's plan and focus on recovery."
    },
    {
      id: 3,
      date: "2024-01-11",
      workout: "Track Workout - 6x800m @ 3:20",
      feeling: "fine",
      injury: false,
      notes: "Solid workout. Hit all the splits but felt like I was working hard. Need to work on my mental game during the last few reps.",
      coachResponse: "Good execution! Mental toughness comes with practice. You're right where you need to be."
    },
    {
      id: 4,
      date: "2024-01-09",
      workout: "Easy Run - 6 miles @ 8:30 pace",
      feeling: "crushed",
      injury: false,
      notes: "Perfect recovery run. Legs felt fresh and I could have gone faster but stuck to the plan. Really enjoying the process lately.",
      coachResponse: "Excellent discipline! Recovery runs are just as important as hard workouts."
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
                onClick={() => navigate("/")}
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
                <label className="block mb-2 font-medium text-gray-900">How did it feel?</label>
                <select
                  value={newEntry.feeling}
                  onChange={(e) => setNewEntry({...newEntry, feeling: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select how it felt</option>
                  <option value="crushed">🔥 Crushed it</option>
                  <option value="struggled">😤 Struggled</option>
                  <option value="fine">😌 Felt fine</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-900">Anything hurt?</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newEntry.injury}
                    onChange={(e) => setNewEntry({...newEntry, injury: e.target.checked})}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </div>
              </div>

              {newEntry.injury && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="mb-3 font-medium text-red-900">What hurt?</p>
                  <div className="space-y-2">
                    {injuries.map((part) => (
                      <label key={part} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newEntry.injuryDetail.includes(part)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setNewEntry({
                              ...newEntry,
                              injuryDetail: checked 
                                ? [...newEntry.injuryDetail, part] 
                                : newEntry.injuryDetail.filter(p => p !== part)
                            });
                          }}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="ml-2 text-red-800">{part}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block mb-2 font-medium text-gray-900">Notes</label>
                <textarea
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="How did the workout feel? Any insights or concerns?"
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
                  <h3 className="text-lg font-semibold">{entry.workout}</h3>
                  <p className="text-gray-600 text-sm">{entry.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getFeelingEmoji(entry.feeling)}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {getFeelingText(entry.feeling)}
                  </span>
                </div>
              </div>

              {entry.injury && (
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg mb-4">
                  <p className="text-red-800 text-sm">
                    <strong>Injury noted:</strong> {entry.injuryDetail.join(", ")}
                  </p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-gray-700">{entry.notes}</p>
              </div>

              {entry.coachResponse && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-900 text-sm">
                    <strong>Coach:</strong> {entry.coachResponse}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflection;
