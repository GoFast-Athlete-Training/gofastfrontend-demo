import React from "react";
import { useNavigate } from "react-router-dom";

const RunnerNews = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Runner News</h1>
      <p className="text-gray-700 mb-6">
        Stay sharp with curated insights from across the running world. Gear tips, race stories,
        science drops — all handpicked for athletes like you.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">📰 Today’s Spotlight</h2>
        <p className="text-sm text-gray-600">
          <em>“The Science of the Taper”</em> – Explore how the best runners pull back to fire forward.
        </p>
        <a
          href="https://www.runnersworld.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm block mt-2"
        >
          Read on Runner’s World →
        </a>
      </div>

      <button
        onClick={() => navigate("/return-runner-hub")}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Back to Hub
      </button>
    </div>
  );
};

export default RunnerNews;
