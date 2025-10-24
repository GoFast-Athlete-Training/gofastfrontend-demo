import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NextWeekPlan = ({ userId, current5kPace, age, weekIndex }) => {
  const [week, setWeek] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeek = async () => {
      try {
        const res = await axios.get(`/api/weekplan/${weekIndex}`, {
          params: { userId }
        });
        setWeek(res.data);
      } catch (err) {
        console.error("Error fetching week plan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeek();
  }, [userId, weekIndex]);

  if (loading) return <div className="p-6 text-center">Loading next week's plan...</div>;
  if (!week) return <div className="p-6 text-center">No plan found for next week.</div>;

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

export default NextWeekPlan;
