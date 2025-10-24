import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeeklyReview = () => {
  const navigate = useNavigate();
  
  // Dummy weekly summary data
  const summary = {
    weekIndex: 8,
    totalMileage: 42.5,
    longRunDistance: 12,
    longRunHR: 165,
    activities: [
      {
        date: "Monday, Dec 2",
        mileage: 6.2,
        pace: "8:15",
        avgHr: 155
      },
      {
        date: "Tuesday, Dec 3", 
        mileage: 8.1,
        pace: "7:45",
        avgHr: 170
      },
      {
        date: "Wednesday, Dec 4",
        mileage: 12.0,
        pace: "8:30",
        avgHr: 165
      },
      {
        date: "Friday, Dec 6",
        mileage: 5.2,
        pace: "8:00",
        avgHr: 150
      },
      {
        date: "Sunday, Dec 8",
        mileage: 11.0,
        pace: "8:45",
        avgHr: 160
      }
    ]
  };

  const [reflection, setReflection] = useState({
    durability: 3,
    breathing: 3,
    fatigue: 3,
    mood: "🙂",
    injuryRisk: false,
    injurySeverity: 1,
    notes: ""
  });

  const moodOptions = ["😫", "😕", "🙂", "😎", "🔥"];

  const handleSave = () => {
    alert("Weekly review saved! Great job this week!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Weekly Review</h1>
              <p className="text-gray-600">Review your week's progress and how you felt</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">

      {/* 📊 Garmin Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">This Week's Runs</h2>
        <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
          {summary.activities.map((run, i) => (
            <div key={i} className="border rounded p-3 bg-gray-50">
              <p className="text-sm text-gray-500">{run.date}</p>
              <p><strong>Mileage:</strong> {run.mileage.toFixed(2)} mi</p>
              <p><strong>Pace:</strong> {run.pace}</p>
              <p><strong>Avg HR:</strong> {run.avgHr} bpm</p>
            </div>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <p><strong>Total Mileage:</strong> {summary.totalMileage.toFixed(1)} mi</p>
          {summary.longRunDistance && (
            <p><strong>Longest Run:</strong> {summary.longRunDistance} mi at {summary.longRunHR} bpm</p>
          )}
        </div>
      </div>

      {/* 🧠 Strength Reflection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How’d You Hold Up?</h2>

        {["durability", "breathing", "fatigue"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block font-medium capitalize mb-1">{field}</label>
            <input
              type="range"
              min="1"
              max="5"
              value={reflection[field]}
              onChange={(e) => setReflection({ ...reflection, [field]: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-medium mb-1">Any Injury Risk?</label>
          <input
            type="checkbox"
            checked={reflection.injuryRisk}
            onChange={(e) => setReflection({ ...reflection, injuryRisk: e.target.checked })}
          />
          {reflection.injuryRisk && (
            <div className="mt-2">
              <label className="block font-medium mb-1">Injury Severity</label>
              <input
                type="range"
                min="1"
                max="10"
                value={reflection.injurySeverity}
                onChange={(e) =>
                  setReflection({ ...reflection, injurySeverity: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Mood</label>
          <div className="flex space-x-2">
            {moodOptions.map((m) => (
              <button
                key={m}
                onClick={() => setReflection({ ...reflection, mood: m })}
                className={`text-2xl ${reflection.mood === m ? "ring-2 ring-black rounded" : ""}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Notes</label>
          <textarea
            value={reflection.notes}
            onChange={(e) => setReflection({ ...reflection, notes: e.target.value })}
            className="w-full border rounded p-2"
            rows={3}
            placeholder="How did this week feel? What would you do differently?"
          />
        </div>
      </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Save Reflection
        </button>
      </div>
    </div>
  );
};

export default WeeklyReview;
