import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MatchActivity = () => {
  const navigate = useNavigate();
  const [selectedTraining, setSelectedTraining] = useState("");

  // Dummy data
  const garminActivity = {
    date: "Today",
    time: "6:30 AM",
    distance: "8.2 mi",
    duration: "1:03:45",
    pace: "7:46",
    avgHR: 165,
    calories: 720
  };

  const plannedTrainings = [
    {
      id: "tempo",
      label: "Tempo Run - Marathon Pace",
      distance: "8 mi",
      targetPace: "7:45-8:00",
      type: "tempo",
      description: "Run at your goal marathon pace. Focus on maintaining consistent effort throughout."
    },
    {
      id: "easy",
      label: "Easy Run",
      distance: "5 mi", 
      targetPace: "8:30-9:00",
      type: "easy",
      description: "Comfortable pace, conversational effort."
    },
    {
      id: "long",
      label: "Long Run",
      distance: "12 mi",
      targetPace: "8:00-8:30", 
      type: "long",
      description: "Build endurance with steady effort."
    }
  ];

  const handleMatch = () => {
    if (selectedTraining) {
      // Simulate matching the activity to training
      alert("Activity matched to training! Your workout is now logged.");
      navigate("/daily-recap");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-6">Match Activity to Training</h1>
          
          {/* Garmin Activity */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-3">Your Garmin Activity</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700">Distance</p>
                <p className="font-semibold text-blue-900">{garminActivity.distance}</p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Pace</p>
                <p className="font-semibold text-blue-900">{garminActivity.pace}/mi</p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Duration</p>
                <p className="font-semibold text-blue-900">{garminActivity.duration}</p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Avg HR</p>
                <p className="font-semibold text-blue-900">{garminActivity.avgHR} bpm</p>
              </div>
            </div>
          </div>

          {/* Planned Trainings */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Which training was this?</h3>
            <div className="space-y-3">
              {plannedTrainings.map((training) => (
                <label key={training.id} className="block">
                  <div className={`border rounded-lg p-4 cursor-pointer transition ${
                    selectedTraining === training.id 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-start">
                      <input
                        type="radio"
                        name="training"
                        value={training.id}
                        checked={selectedTraining === training.id}
                        onChange={(e) => setSelectedTraining(e.target.value)}
                        className="mt-1 mr-3"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{training.label}</h4>
                        <p className="text-sm text-gray-600 mb-2">{training.description}</p>
                        <div className="flex gap-4 text-sm">
                          <span><strong>Distance:</strong> {training.distance}</span>
                          <span><strong>Pace:</strong> {training.targetPace}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleMatch}
              disabled={!selectedTraining}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                selectedTraining 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Match Activity
            </button>
            <button
              onClick={() => navigate("/see-activities")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchActivity;
