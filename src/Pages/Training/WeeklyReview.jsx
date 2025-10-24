import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeeklyReview = () => {
  const navigate = useNavigate();
  
  // Dummy weekly summary data
  const summary = {
    weekIndex: 4,
    totalMiles: 52,
    totalTime: "7:15:30",
    avgPace: "8:30",
    runsCompleted: 5,
    runsPlanned: 6,
    longestRun: 15,
    avgHeartRate: 155,
    caloriesBurned: 4200,
    elevationGained: 1200
  };

  const [reflection, setReflection] = useState({
    durability: 4,
    breathing: 4,
    fatigue: 3,
    mood: "🙂",
    injuryRisk: false,
    injurySeverity: 1,
    notes: ""
  });

  const moodOptions = ["😫", "😕", "🙂", "😎", "🔥"];

  const handleSave = () => {
    // Save reflection data (could be localStorage or API)
    localStorage.setItem('weekly-reflection', JSON.stringify(reflection));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Weekly Review</h1>

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
            placeholder="Anything your future self or coach should know?"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Save + Build Next Week
      </button>
    </div>
  );
};

export default WeeklyReview;
