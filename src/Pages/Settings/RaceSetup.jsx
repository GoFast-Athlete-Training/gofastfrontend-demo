import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RaceSetup() {
  const navigate = useNavigate();

  const [raceName, setRaceName] = useState("");
  const [raceType, setRaceType] = useState("half");
  const [raceDate, setRaceDate] = useState("");
  const [goalTime, setGoalTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!raceName || !raceDate || !goalTime) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      // Get runner profile data
      const runnerProfile = JSON.parse(localStorage.getItem('runnerProfile') || '{}');

      // Create race with ALL data via V2 API
      const { createRace } = await import('../../api/raceApi');
      const { generateTrainingPlan, activateTrainingPlan } = await import('../../api/trainingPlanApi');

      console.log('🏁 Creating race...');
      const race = await createRace({
        raceName,
        raceType,
        raceDate,
        goalTime,
        baseline5k: runnerProfile.baseline5k,
        baselineWeeklyMileage: runnerProfile.weeklyMileage
      });

      console.log('✅ Race created:', race);
      localStorage.setItem('currentRaceId', race._id);
      localStorage.setItem('currentRace', JSON.stringify(race));

      console.log('📅 Generating training plan...');
      const result = await generateTrainingPlan(race._id, runnerProfile.age);

      console.log('✅ Activating plan...');
      await activateTrainingPlan(result.plan._id);

      localStorage.setItem('activePlanId', result.plan._id);
      
      // Clean up temp data
      localStorage.removeItem('runnerProfile');

      console.log('🎉 All done! Going to training hub...');
      navigate("/training-pulse-hub");

    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to create your plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏁</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What race are you training for?
          </h1>
          <p className="text-gray-600 text-lg">
            Let's set your goal and build your personalized plan
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Race Name</label>
            <input
              type="text"
              value={raceName}
              onChange={(e) => setRaceName(e.target.value)}
              placeholder="e.g., Boston Marathon"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Distance</label>
            <select
              value={raceType}
              onChange={(e) => setRaceType(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition"
            >
              <option value="5k">5K</option>
              <option value="10k">10K</option>
              <option value="10m">10 Mile</option>
              <option value="half">Half Marathon</option>
              <option value="marathon">Marathon</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Race Date</label>
            <input
              type="date"
              value={raceDate}
              onChange={(e) => setRaceDate(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Goal Finish Time</label>
            <input
              type="text"
              value={goalTime}
              onChange={(e) => setGoalTime(e.target.value)}
              placeholder="e.g., 1:45:00 or 45:00"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition"
            />
            <p className="text-sm text-gray-500 mt-1">
              Format: HH:MM:SS (e.g., 1:30:00) or MM:SS (e.g., 22:30)
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "🔥 Creating Your Plan..." : "Create My Training Plan →"}
        </button>
      </div>
    </div>
  );
}
