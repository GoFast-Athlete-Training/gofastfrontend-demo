import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Dashboard
import TrainingDashboard from "./Pages/TrainingDashboard";

// Core Training Modules
import TodaysWorkout from "./Pages/Training/TodaysWorkout";
import WeekView from "./Pages/Training/WeekView";
import TrainingJournal from "./Pages/Training/TrainingJournal";
import MentalReplenishment from "./Pages/Training/MentalReplenishment";
import WeeklyReview from "./Pages/Training/WeeklyReview";
import GoCrushIt from "./Pages/Training/GoCrushIt";
import DailyWorkoutRecap from "./Pages/Training/DailyWorkoutRecap";
import GarminConnect from "./Pages/Training/GarminConnect";
import GarminConnected from "./Pages/Training/GarminConnected";

// Setup (Modular)
import Profile from "./Pages/Setup/Profile";
import Goals from "./Pages/Setup/Goals";

const App = () => (
  <Router>
    <Routes>
      {/* Main Dashboard */}
      <Route path="/" element={<TrainingDashboard />} />
      
      {/* Core Training Modules */}
      <Route path="/todays-workout" element={<TodaysWorkout />} />
      <Route path="/week-view" element={<WeekView />} />
      <Route path="/training-journal" element={<TrainingJournal />} />
      <Route path="/mental-replenishment" element={<MentalReplenishment />} />
      <Route path="/weekly-review" element={<WeeklyReview />} />
      <Route path="/go-crush-it" element={<GoCrushIt />} />
      <Route path="/daily-recap" element={<DailyWorkoutRecap />} />
      <Route path="/connect-garmin" element={<GarminConnect />} />
      <Route path="/garmin-connected" element={<GarminConnected />} />
      
      {/* Setup (Modular) */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/goals" element={<Goals />} />
    </Routes>
  </Router>
);

export default App;