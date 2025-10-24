import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MentalReplenishment = () => {
  const navigate = useNavigate();
  const [dailyQuote, setDailyQuote] = useState('');

  const quotes = [
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
      description: "Your mental state shapes your reality. Choose your thoughts wisely."
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill", 
      description: "Every step forward, no matter how small, is progress worth celebrating."
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      description: "You've already started. That's the hardest part behind you."
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      description: "Confidence is built through action, not just positive thinking."
    },
    {
      quote: "Your limitation—it's only your imagination.",
      author: "Unknown",
      description: "The boundaries you think exist are often just stories you tell yourself."
    }
  ];

  useEffect(() => {
    // Get a different quote each day
    const today = new Date().getDate();
    const quoteIndex = today % quotes.length;
    setDailyQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Replenish</h1>
              <p className="text-gray-600">Mental training and motivation</p>
            </div>
            <button
              onClick={() => navigate("/mental-hub")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to Mental Hub
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Daily Quote */}
        {dailyQuote && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Inspiration</h2>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                "{dailyQuote.quote}"
              </blockquote>
              <cite className="text-gray-600">— {dailyQuote.author}</cite>
              <p className="text-gray-500 mt-4 text-sm">{dailyQuote.description}</p>
            </div>
          </div>
        )}

        {/* Mental Training Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Breathing Exercise</h3>
            <p className="text-blue-800 mb-4">Take a moment to center yourself with this simple breathing pattern.</p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">4-4-4-4 Breathing:</p>
              <p className="text-sm text-gray-600">Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 3 times.</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
              Start Breathing
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Visualization</h3>
            <p className="text-green-800 mb-4">Picture yourself crossing the finish line strong and confident.</p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">Race Day Visualization:</p>
              <p className="text-sm text-gray-600">Close your eyes and see yourself running the perfect race. Feel the strength in your legs, the rhythm of your breathing.</p>
            </div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition">
              Start Visualization
            </button>
          </div>
        </div>

        {/* Motivational Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Mental Reset</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left">
              <div className="text-2xl mb-2">🧘‍♂️</div>
              <div className="font-medium">Meditation</div>
              <div className="text-sm text-gray-600">5-minute mindfulness</div>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-medium">Gratitude</div>
              <div className="text-sm text-gray-600">Write 3 things you're grateful for</div>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-medium">Goal Setting</div>
              <div className="text-sm text-gray-600">Set your intention for today</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalReplenishment;
