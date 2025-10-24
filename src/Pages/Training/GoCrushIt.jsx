import React from "react";
import { useNavigate } from "react-router-dom";

const GoCrushIt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Go Crush It 💥</h1>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            You've seen the plan. Now it's time to make it real.  
            Get out there, hit your stride, and come back strong.
          </p>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-left mb-8">
            <p className="mb-4 font-semibold text-orange-900">How it works:</p>
            <ul className="list-disc ml-6 space-y-2 text-orange-800">
              <li>We're not timing you. No beeps. No cues.</li>
              <li>Just go do the workout on your own terms.</li>
              <li>If your Garmin is connected, we'll auto-sync your stats.</li>
              <li>If not, no worries — you can log it manually after.</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-green-900 mb-3">Your Mission</h3>
            <p className="text-green-800 text-sm">
              <strong>Trust your training.</strong> You've put in the work. Now let your body do what it knows how to do.<br/><br/>
              <em>No overthinking. No second-guessing. Just run.</em>
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