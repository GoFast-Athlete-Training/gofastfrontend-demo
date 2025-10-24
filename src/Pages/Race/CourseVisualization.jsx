import React from "react";
import { useNavigate } from "react-router-dom";

const CourseVisualization = () => {
  const navigate = useNavigate();

  // Boston Marathon course data
  const courseData = {
    name: "Boston Marathon",
    distance: "26.2 miles",
    elevation: "Net downhill - 459 ft",
    startTime: "10:00 AM",
    weather: "Partly cloudy, 55°F",
    profile: "The Boston Marathon course is known for its challenging terrain. The first 16 miles are generally downhill, followed by the famous Newton Hills (including Heartbreak Hill at mile 20.5), then a final downhill stretch to the finish.",
    highlights: [
      "Start in Hopkinton - mostly downhill first 16 miles",
      "Wellesley College 'Scream Tunnel' at mile 13",
      "Newton Hills begin at mile 16 - save energy here",
      "Heartbreak Hill at mile 20.5 - the toughest climb",
      "Final 5 miles downhill to Boylston Street finish"
    ],
    strategy: [
      "Start conservatively - don't get carried away on the early downhills",
      "Save energy for Newton Hills (miles 16-21)",
      "Heartbreak Hill is the make-or-break point - stay strong",
      "Use the final downhill to make up time if you have energy",
      "The crowd support on Boylston Street will carry you home"
    ],
    coachNote: "Boston is a thinking runner's race. The early downhills can fool you into going too fast. Trust your training, respect the Newton Hills, and save something for Heartbreak Hill. The finish line on Boylston Street is worth every step."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Course Preview</h1>
              <p className="text-gray-600">Boston Marathon - April 30, 2026</p>
            </div>
            <button
              onClick={() => navigate("/my-races")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to My Races
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Course Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Course Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Distance</p>
              <p className="text-lg font-semibold">{courseData.distance}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Elevation</p>
              <p className="text-lg font-semibold">{courseData.elevation}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Start Time</p>
              <p className="text-lg font-semibold">{courseData.startTime}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Weather</p>
              <p className="text-lg font-semibold">{courseData.weather}</p>
            </div>
          </div>
          <p className="text-gray-700">{courseData.profile}</p>
        </div>

        {/* Course Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Course Highlights</h2>
          <div className="space-y-3">
            {courseData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <span className="text-orange-500 font-bold mr-3">{index + 1}.</span>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Race Strategy */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Race Strategy</h2>
          <div className="space-y-3">
            {courseData.strategy.map((tip, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">•</span>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach's Note */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-orange-900">Coach's Note</h2>
          <p className="text-orange-800 text-lg leading-relaxed">{courseData.coachNote}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseVisualization;
