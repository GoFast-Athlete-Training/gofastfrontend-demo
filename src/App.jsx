import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

// Main Dashboard
import GoFastDashboard from "./Pages/GoFastDashboard";

// Core Training Modules
import TrainingHub from "./Pages/Training/TrainingHub";
import TodaysWorkout from "./Pages/Training/TodaysWorkout";
import WeekView from "./Pages/Training/WeekView";
import TrainingJournal from "./Pages/Training/TrainingJournal";
import MentalReplenishment from "./Pages/Training/MentalReplenishment";
import WeeklyReview from "./Pages/Training/WeeklyReview";
import GoCrushIt from "./Pages/Training/GoCrushIt";
import DailyWorkoutRecap from "./Pages/Training/DailyWorkoutRecap";
import SeeActivities from "./Pages/Training/SeeActivities";
import MatchActivity from "./Pages/Training/MatchActivity";
import GarminConnect from "./Pages/Training/GarminConnect";
import GarminConnected from "./Pages/Training/GarminConnected";

// Setup (Modular)
import Profile from "./Pages/Setup/Profile";
import Goals from "./Pages/Setup/Goals";

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      {/* Main Dashboard */}
      <Route path="/" element={<GoFastDashboard />} />
      
      {/* Core Training Modules */}
      <Route path="/training-hub" element={<TrainingHub />} />
      <Route path="/todays-workout" element={<TodaysWorkout />} />
      <Route path="/week-view" element={<WeekView />} />
      <Route path="/training-journal" element={<TrainingJournal />} />
      <Route path="/mental-replenishment" element={<MentalReplenishment />} />
      <Route path="/weekly-review" element={<WeeklyReview />} />
      <Route path="/go-crush-it" element={<GoCrushIt />} />
      <Route path="/daily-recap" element={<DailyWorkoutRecap />} />
      <Route path="/see-activities" element={<SeeActivities />} />
      <Route path="/match-activity" element={<MatchActivity />} />
      <Route path="/connect-garmin" element={<GarminConnect />} />
      <Route path="/garmin-connected" element={<GarminConnected />} />
      
      {/* Setup (Modular) */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/goals" element={<Goals />} />
    </Routes>
  </Router>
);

export default App;