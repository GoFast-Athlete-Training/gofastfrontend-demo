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
        type: "Easy Run",
        mileage: "6 miles",
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        segments: []
      },
      {
        day: "Tuesday", 
        type: "Tempo Run",
        mileage: "8 miles",
        paceRange: { min: "7:45", max: "8:00" },
        hrRange: { min: "160", max: "170" },
        segments: [
          { type: "Warm-up", distance: "2 miles", pace: "8:30" },
          { type: "Tempo", distance: "4 miles", pace: "7:50" },
          { type: "Cool-down", distance: "2 miles", pace: "8:30" }
        ]
      },
      {
        day: "Wednesday",
        type: "Rest Day",
        mileage: "0 miles",
        paceRange: { min: "N/A", max: "N/A" },
        hrRange: { min: "N/A", max: "N/A" },
        segments: []
      },
      {
        day: "Thursday",
        type: "Easy Run", 
        mileage: "7 miles",
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        segments: []
      },
      {
        day: "Friday",
        type: "Easy Run",
        mileage: "6 miles", 
        paceRange: { min: "8:30", max: "9:00" },
        hrRange: { min: "140", max: "150" },
        segments: []
      },
      {
        day: "Saturday",
        type: "Long Run",
        mileage: "15 miles",
        paceRange: { min: "8:00", max: "8:30" },
        hrRange: { min: "150", max: "160" },
        segments: [
          { type: "Easy", distance: "10 miles", pace: "8:30" },
          { type: "Marathon Pace", distance: "5 miles", pace: "7:50" }
        ]
      },
      {
        day: "Sunday",
        type: "Recovery Run",
        mileage: "4 miles",
        paceRange: { min: "9:00", max: "9:30" },
        hrRange: { min: "130", max: "140" },
        segments: []
      }
    ]
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🚀 Ready to Go?</h1>
      <p className="text-gray-700 mb-6">
        Here's your plan for <strong>Week {week.weekIndex + 1}</strong> – <em>{week.phase} Phase</em>.
        Total target: <strong>{week.targetMileage} mi</strong>
      </p>

      <div className="grid gap-4 mb-8">
        {week.days.map((day, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold">{day.day}</h3>
            <p><strong>Type:</strong> {day.type}</p>
            <p><strong>Mileage:</strong> {day.mileage}</p>
            <p><strong>Pace Range:</strong> {day.paceRange.min} – {day.paceRange.max}</p>
            <p><strong>HR Range:</strong> {day.hrRange.min} – {day.hrRange.max} bpm</p>
            {day.segments?.length > 0 && (
              <div className="mt-2">
                <p className="font-medium">Segments:</p>
                <ul className="list-disc ml-5 text-sm">
                  {day.segments.map((seg, idx) => (
                    <li key={idx}>{JSON.stringify(seg)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/pulse/today")}
          className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
        >
          Let’s Go
        </button>
      </div>
    </div>
  );
};

export default WeekView;
