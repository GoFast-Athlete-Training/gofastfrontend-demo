import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RaceFeedback = () => {
  const navigate = useNavigate();
  const [goalStatus, setGoalStatus] = useState("close"); // hit, close, miss, none

  const feedbackMessages = {
    hit: {
      title: "You Earned This.",
      message: "You showed up. You executed. That wasn't luck — that was the result of your work, your patience, and your grit. Let it sink in. You're capable of even more, but take this win with full honor.",
      color: "bg-green-50 border-green-200 text-green-900"
    },
    close: {
      title: "You Fought for It.",
      message: "You aimed high and gave everything you had. That takes courage. It might sting a little — but this wasn't failure. This was a brave, honest effort. You're closer than you think.",
      color: "bg-yellow-50 border-yellow-200 text-yellow-900"
    },
    miss: {
      title: "Some Days Hit Harder.",
      message: "This one got away — but you didn't fold. That matters. You were in the arena. And even if it felt off, you stayed in the fight. That's the kind of effort that builds real runners.",
      color: "bg-red-50 border-red-200 text-red-900"
    },
    none: {
      title: "You Got It Done.",
      message: "No goal? No problem. You showed up and saw it through — that's a win in itself. Let's use this as your starting line for what comes next.",
      color: "bg-blue-50 border-blue-200 text-blue-900"
    }
  };

  const currentFeedback = feedbackMessages[goalStatus];

  const handleNext = () => {
    navigate("/dashboard"); // Back to dashboard to start the cycle again
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Race Feedback</h1>
              <p className="text-gray-600">Final reflection and what's next</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/race-hub")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Race Hub
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Goal Status Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">How did your race go?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(feedbackMessages).map(([status, feedback]) => (
              <button
                key={status}
                onClick={() => setGoalStatus(status)}
                className={`p-4 rounded-lg border-2 transition ${
                  goalStatus === status 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {status === 'hit' && '🎯'}
                    {status === 'close' && '🔥'}
                    {status === 'miss' && '💪'}
                    {status === 'none' && '🏃‍♂️'}
                  </div>
                  <p className="font-semibold capitalize">{status}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Message */}
        <div className={`rounded-xl border-2 p-8 text-center mb-6 ${currentFeedback.color}`}>
          <h1 className="text-3xl font-bold mb-4">{currentFeedback.title}</h1>
          <p className="text-lg leading-relaxed">{currentFeedback.message}</p>
        </div>

        {/* Race Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Race Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">3:28:15</p>
              <p className="text-gray-600">Actual Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">3:25:00</p>
              <p className="text-gray-600">Goal Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">+3:15</p>
              <p className="text-gray-600">Difference</p>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Recovery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Take 1-2 weeks easy</li>
                <li>• Focus on sleep and nutrition</li>
                <li>• Light cross-training</li>
                <li>• Listen to your body</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Next Steps</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Plan your next training cycle</li>
                <li>• Set new goals</li>
                <li>• Build on this experience</li>
                <li>• Keep the momentum going</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Action */}
        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg text-lg"
          >
            Start Your Next Training Cycle
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaceFeedback;
