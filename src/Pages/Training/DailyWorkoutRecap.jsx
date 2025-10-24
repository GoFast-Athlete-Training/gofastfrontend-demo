import React, { useState } from "react";

const DailyWorkoutRecap = () => {
  const [feeling, setFeeling] = useState("");
  const [injury, setInjury] = useState(false);
  const [injuryDetail, setInjuryDetail] = useState([]);
  const [notes, setNotes] = useState("");

  const injuries = ["Hamstring", "Calf", "Knee", "Groin", "Other"];

  const handleSubmit = () => {
    console.log({ feeling, injury, injuryDetail, notes });
    // post to backend here
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daily Workout Recap</h1>
      <p className="mb-6 text-gray-700">
        Here’s how you did today. Fill this out to help shape your next workout.
      </p>

      <label className="block mb-2 font-medium">How did it feel?</label>
      <select
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
        className="w-full border p-2 mb-4"
      >
        <option value="">Select</option>
        <option value="crushed">Crushed it</option>
        <option value="struggled">Struggled</option>
        <option value="fine">Felt fine</option>
      </select>

      <label className="block mb-2 font-medium">Anything hurt?</label>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={injury}
            onChange={(e) => setInjury(e.target.checked)}
            className="mr-2"
          />
          Yes
        </label>
      </div>

      {injury && (
        <div className="mb-4">
          <p className="mb-2">What hurt?</p>
          {injuries.map((part) => (
            <label key={part} className="block">
              <input
                type="checkbox"
                checked={injuryDetail.includes(part)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setInjuryDetail((prev) =>
                    checked ? [...prev, part] : prev.filter((p) => p !== part)
                  );
                }}
              />
              <span className="ml-2">{part}</span>
            </label>
          ))}
        </div>
      )}

      <label className="block mb-2 font-medium">Notes to coach (optional)</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full border p-2 mb-4"
        rows={4}
        placeholder="Let us know how it went..."
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Submit Recap
      </button>
    </div>
  );
};

export default DailyWorkoutRecap;