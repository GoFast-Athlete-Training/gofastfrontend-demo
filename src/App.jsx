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
import RacePredictor from "./Pages/Training/RacePredictor";
import TrainingAnalysis from "./Pages/Training/TrainingAnalysis";
import GoCrushIt from "./Pages/Training/GoCrushIt";
import DailyWorkoutRecap from "./Pages/Training/DailyWorkoutRecap";
import Reflection from "./Pages/Training/Reflection";
import SeeActivities from "./Pages/Training/SeeActivities";
import MatchActivity from "./Pages/Training/MatchActivity";
import GarminConnect from "./Pages/Training/GarminConnect";
import GarminConnected from "./Pages/Training/GarminConnected";

// Race Modules
import RaceHub from "./Pages/Race/RaceHub";
import MyRaces from "./Pages/Race/MyRaces";
import CourseVisualization from "./Pages/Race/CourseVisualization";
import HotelTravel from "./Pages/Race/HotelTravel";
import RaceStrategy from "./Pages/Race/RaceStrategy";
import RaceChecklist from "./Pages/Race/RaceChecklist";
import RaceDetail from "./Pages/Race/RaceDetail";
import RaceMorning from "./Pages/Race/RaceMorning";
import RaceFeedback from "./Pages/Race/RaceFeedback";
import PostRaceHub from "./Pages/PostRace/PostRaceHub";
import RecoveryPlan from "./Pages/PostRace/RecoveryPlan";
import NextGoals from "./Pages/PostRace/NextGoals";
import MentalHub from "./Pages/Mental/MentalHub";
import Nutrition from "./Pages/Maintenance/Nutrition";
import InjuryPrevention from "./Pages/Maintenance/InjuryPrevention";

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
      <Route path="/race-predictor" element={<RacePredictor />} />
      <Route path="/training-analysis" element={<TrainingAnalysis />} />
      <Route path="/go-crush-it" element={<GoCrushIt />} />
      <Route path="/daily-recap" element={<DailyWorkoutRecap />} />
      <Route path="/reflection" element={<Reflection />} />
      <Route path="/see-activities" element={<SeeActivities />} />
      <Route path="/match-activity" element={<MatchActivity />} />
      <Route path="/connect-garmin" element={<GarminConnect />} />
      <Route path="/garmin-connected" element={<GarminConnected />} />
      
      {/* Race Modules */}
      <Route path="/race-hub" element={<RaceHub />} />
      <Route path="/my-races" element={<MyRaces />} />
      <Route path="/course-visualization" element={<CourseVisualization />} />
      <Route path="/hotel-travel" element={<HotelTravel />} />
      <Route path="/race-strategy" element={<RaceStrategy />} />
      <Route path="/race-checklist" element={<RaceChecklist />} />
      <Route path="/race-detail/:raceId" element={<RaceDetail />} />
      <Route path="/race-morning" element={<RaceMorning />} />
      <Route path="/race-feedback" element={<RaceFeedback />} />
      <Route path="/post-race-hub" element={<PostRaceHub />} />
      <Route path="/recovery-plan" element={<RecoveryPlan />} />
      <Route path="/next-goals" element={<NextGoals />} />
      <Route path="/mental-hub" element={<MentalHub />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/injury-prevention" element={<InjuryPrevention />} />
      
      {/* Setup (Modular) */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/goals" element={<Goals />} />
    </Routes>
  </Router>
);

export default App;