import React from "react";
import { useNavigate } from "react-router-dom";

const WeekView = () => {
  const navigate = useNavigate();

  // Dummy week data - no API calls
  const week = {
    weekIndex: 4,
    phase: "Base Building",
    targetMileage: 52,
    days: [
      {
        day: "Monday",
        date: "Oct 28",
        type: "Easy Run",
        mileage: 6,
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        completed: true,
        color: "green"
      },
      {
        day: "Tuesday", 
        date: "Oct 29",
        type: "Tempo Run",
        mileage: 8,
        paceRange: { min: "7:45", max: "8:00" },
        hrRange: { min: "160", max: "170" },
        completed: false,
        color: "orange",
        segments: [
          { type: "Warm-up", distance: "2 miles", pace: "8:30" },
          { type: "Tempo", distance: "4 miles", pace: "7:50" },
          { type: "Cool-down", distance: "2 miles", pace: "8:30" }
        ]
      },
      {
        day: "Wednesday",
        date: "Oct 30",
        type: "Rest Day",
        mileage: 0,
        paceRange: { min: "N/A", max: "N/A" },
        hrRange: { min: "N/A", max: "N/A" },
        completed: false,
        color: "gray"
      },
      {
        day: "Thursday",
        date: "Oct 31",
        type: "Easy Run", 
        mileage: 7,
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        completed: false,
        color: "green"
      },
      {
        day: "Friday",
        date: "Nov 1",
        type: "Easy Run",
        mileage: 6, 
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        completed: false,
        color: "green"
      },
      {
        day: "Saturday",
        date: "Nov 2",
        type: "Long Run",
        mileage: 15,
        paceRange: { min: "8:00", max: "8:30" },
        hrRange: { min: "150", max: "160" },
        completed: false,
        color: "red",
        segments: [
          { type: "Easy", distance: "10 miles", pace: "8:30" },
          { type: "Marathon Pace", distance: "5 miles", pace: "7:50" }
        ]
      },
      {
        day: "Sunday",
        date: "Nov 3",
        type: "Recovery Run",
        mileage: 4,
        paceRange: { min: "9:00", max: "9:30" },
        hrRange: { min: "130", max: "140" },
        completed: false,
        color: "blue"
      }
    ]
  };

  const getColorClasses = (color, completed) => {
    const baseClasses = "border-l-4 rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md";
    
    if (completed) {
      return `${baseClasses} bg-green-50 border-green-400`;
    }
    
    switch (color) {
      case 'red': return `${baseClasses} bg-red-50 border-red-400`;
      case 'orange': return `${baseClasses} bg-orange-50 border-orange-400`;
      case 'blue': return `${baseClasses} bg-blue-50 border-blue-400`;
      case 'green': return `${baseClasses} bg-green-50 border-green-400`;
      case 'gray': return `${baseClasses} bg-gray-50 border-gray-400`;
      default: return `${baseClasses} bg-gray-50 border-gray-400`;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Long Run': return '🏃‍♂️';
      case 'Tempo Run': return '⚡';
      case 'Easy Run': return '😌';
      case 'Recovery Run': return '🔄';
      case 'Rest Day': return '😴';
      default: return '🏃';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Week {week.weekIndex + 1}</h1>
              <p className="text-gray-600 text-lg">{week.phase} Phase</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600">{week.targetMileage} mi</p>
              <p className="text-sm text-gray-500">Total Target</p>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid gap-3 mb-6">
          {week.days.map((day, i) => (
            <div key={i} className={getColorClasses(day.color, day.completed)}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTypeIcon(day.type)}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{day.day}</h3>
                    <p className="text-sm text-gray-600">{day.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  {day.completed ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ✅ Done
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Distance</p>
                  <p className="font-semibold text-lg">{day.mileage} mi</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Type</p>
                  <p className="font-semibold">{day.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Pace</p>
                  <p className="font-semibold">{day.paceRange.min}–{day.paceRange.max}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">HR Zone</p>
                  <p className="font-semibold">{day.hrRange.min}–{day.hrRange.max} bpm</p>
                </div>
              </div>

              {day.segments?.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Workout Structure:</p>
                  <div className="flex flex-wrap gap-2">
                    {day.segments.map((seg, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm border">
                        {seg.type}: {seg.distance} @ {seg.pace}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/todays-workout")}
            className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition text-lg"
          >
            Today's Workout 🏃‍♂️
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekView;
