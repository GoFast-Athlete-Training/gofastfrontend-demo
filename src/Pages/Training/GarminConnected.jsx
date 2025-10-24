import React from "react";
import { useNavigate } from "react-router-dom";

const GarminConnected = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">You’re Connected!</h1>
      <p className="mb-4 text-gray-700">
        Your Garmin account is now synced. Your workouts will be automatically pulled into GoFast.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Go to Training Dashboard
      </button>
    </div>
  );
};

export default GarminConnected;
