import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DailyWorkoutRecap = () => {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useState("");
  const [injury, setInjury] = useState(false);
  const [injuryDetail, setInjuryDetail] = useState([]);
  const [notes, setNotes] = useState("");

  const injuries = ["Hamstring", "Calf", "Knee", "Groin", "Other"];

  const handleSubmit = () => {
    console.log({ feeling, injury, injuryDetail, notes });
    // For demo - just show success and navigate back
    alert("Recap submitted! Your coach will review this feedback.");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">How Did It Feel? 💭</h1>
          <p className="mb-6 text-gray-700">
            Here's how you did today. Fill this out to help shape your next workout.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-900">How did it feel?</label>
              <select
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select how it felt</option>
                <option value="crushed">🔥 Crushed it</option>
                <option value="struggled">😤 Struggled</option>
                <option value="fine">😌 Felt fine</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-900">Anything hurt?</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={injury}
                  onChange={(e) => setInjury(e.target.checked)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </div>
            </div>

            {injury && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="mb-3 font-medium text-red-900">What hurt?</p>
                <div className="space-y-2">
                  {injuries.map((part) => (
                    <label key={part} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={injuryDetail.includes(part)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setInjuryDetail((prev) =>
                            checked ? [...prev, part] : prev.filter((p) => p !== part)
                          );
                        }}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="ml-2 text-red-800">{part}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block mb-2 font-medium text-gray-900">Notes to coach (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={4}
                placeholder="Let us know how it went... any insights, concerns, or victories?"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Submit Recap
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyWorkoutRecap;
