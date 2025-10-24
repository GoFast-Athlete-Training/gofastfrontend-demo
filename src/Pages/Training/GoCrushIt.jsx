import React from "react";
import { useNavigate } from "react-router-dom";

const GoCrushIt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-6">You Crushed It! 🎉</h1>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            That was solid work. Your body just got stronger, your mind just got tougher.  
            This is how champions are built - one workout at a time.
          </p>

          <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-left mb-8">
            <p className="mb-4 font-semibold text-green-900">What's Next:</p>
            <ul className="list-disc ml-6 space-y-2 text-green-800">
              <li>Your stats are being synced from your Garmin</li>
              <li>Take a moment to reflect on how it felt</li>
              <li>Hydrate, fuel, and recover smart</li>
              <li>Tomorrow's plan is already waiting for you</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">Today's Impact</h3>
            <p className="text-blue-800 text-sm">
              <strong>8 miles of marathon pace work.</strong> Every step made you stronger.<br/><br/>
              <em>This is the work that builds champions. You're doing it.</em>
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate("/todays-workout")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Review Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoCrushIt;