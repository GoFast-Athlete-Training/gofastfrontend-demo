import React from "react";
import { useNavigate } from "react-router-dom";

const GoCrushIt = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 text-center bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">Go Crush It 💥</h1>
      <p className="text-gray-700 mb-6 text-lg">
        You’ve seen the plan. Now it’s time to make it real.  
        Get out there, hit your stride, and come back strong.
      </p>

      <div className="bg-gray-100 p-4 rounded text-left text-sm text-gray-600 mb-6">
        <p className="mb-2 font-semibold">How it works:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>We’re not timing you. No beeps. No cues.</li>
          <li>Just go do the workout on your own terms.</li>
          <li>If your Garmin is connected, we’ll auto-sync your stats.</li>
          <li>If not, no worries — you can log it manually after.</li>
        </ul>
      </div>

      <button
        onClick={() => navigate("/training-pulse-hub")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Hub
      </button>
    </div>
  );
};

export default GoCrushIt;
