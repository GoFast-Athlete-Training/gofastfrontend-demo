import React from "react";
import { useNavigate } from "react-router-dom";

const GarminConnect = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    // Simulate Garmin connection for demo
    navigate("/garmin-connected");
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Connect Your Garmin</h1>
      <p className="mb-6 text-gray-700">
        GoFast uses your Garmin workouts to track progress and adapt your plan. You’ll be redirected to Garmin to authorize access.
      </p>

      <button
        onClick={handleConnect}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Connect with Garmin
      </button>
    </div>
  );
};

export default GarminConnect;
