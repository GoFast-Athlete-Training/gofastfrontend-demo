import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

// Dashboard
import GoFastTrainingDashboard from "./Pages/GoFastTrainingDashboard";
import Connect from "./Pages/Connect";

// Run Crew
import StartRunCrew from "./Pages/RunCrew/StartRunCrew";
import JoinOrStartCrew from "./Pages/RunCrew/JoinOrStartCrew";
import FormRunCrew from "./Pages/RunCrew/FormRunCrew";
import CrewDashboard from "./Pages/RunCrew/CrewDashboard";
import CrewExplainer from "./Pages/RunCrew/CrewExplainer";
import RunCrewSuccess from "./Pages/RunCrew/RunCrewSuccess";

// Merch Store (now in Shopping)
import GoFastMerch from "./Pages/Shopping/GoFastMerch";
import RedeemPoints from "./Pages/Shopping/RedeemPoints";

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

// Race Modules (now in Training)
import RaceHub from "./Pages/Training/RaceHub";
import MyRaces from "./Pages/Training/MyRaces";
import CourseVisualization from "./Pages/Training/CourseVisualization";
import HotelTravel from "./Pages/Training/HotelTravel";
import RaceStrategy from "./Pages/Training/RaceStrategy";
import RaceChecklist from "./Pages/Training/RaceChecklist";
import RaceDetail from "./Pages/Training/RaceDetail";
import RaceMorning from "./Pages/Training/RaceMorning";
import RaceFeedback from "./Pages/Training/RaceFeedback";
import PostRaceHub from "./Pages/Training/PostRaceHub";
import RecoveryPlan from "./Pages/Training/RecoveryPlan";
import NextGoals from "./Pages/Training/NextGoals";
import MentalHub from "./Pages/Training/MentalHub";
import Nutrition from "./Pages/Training/Nutrition";
import InjuryPrevention from "./Pages/Training/InjuryPrevention";

// Athlete Pages
import AthleteProfile from "./Pages/Athlete/AthleteProfile";
import AthleteCreateProfile from "./Pages/Athlete/AthleteCreateProfile";
import AthleteHome from "./Pages/Athlete/AthleteHome";

// Matching Flow
import PreAthleteProfile from "./Pages/Matching/PreAthleteProfile";
import MatchingHome from "./Pages/Matching/MatchingHome";
import PreMatch from "./Pages/Matching/PreMatch";
import MatchProfileSetup from "./Pages/Matching/MatchProfileSetup";
import MatchProfile from "./Pages/Matching/MatchProfile";
import MatchProfileSuccess from "./Pages/Matching/MatchProfileSuccess";
import FindMatches from "./Pages/Matching/FindMatches";
import RequestSent from "./Pages/Matching/RequestSent";
import RequestReceived from "./Pages/Matching/RequestReceived";
import YourePaired from "./Pages/Matching/YourePaired";
import ReviewProposedMeetup from "./Pages/Matching/ReviewProposedMeetup";

// Settings
import Settings from "./Pages/Settings/Settings";
import LinkGamin from "./Pages/Settings/LinkGamin";
import LinkStrava from "./Pages/Settings/LinkStrava";

// Shopping/Points
import TrophyBoard from "./Pages/Shopping/TrophyBoard";
import PointsExplainer from "./Pages/Shopping/PointsExplainer";
import GoFastShop from "./Pages/Shopping/GoFastShop";
import ProductDetail from "./Pages/Shopping/ProductDetail";
import Cart from "./Pages/Shopping/Cart";
import Checkout from "./Pages/Shopping/Checkout";
import OrderConfirmation from "./Pages/Shopping/OrderConfirmation";

// RunCrew/Clubs
import FindRunningClubs from "./Pages/RunCrew/FindRunningClubs";
import ClubDetail from "./Pages/RunCrew/ClubDetail";

// Training Flow
import TrainingExplainer from "./Pages/Training/TrainingExplainer";
import TrainingPlanSetup from "./Pages/Training/TrainingPlanSetup";
import TrainingPlan from "./Pages/Training/TrainingPlan";

// Platform
import StartHereExplainer from "./Pages/StartHereExplainer";

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
              {/* Main Entry Point */}
              <Route path="/" element={<StartHereExplainer />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/crew-explainer" element={<CrewExplainer />} />
              <Route path="/start-run-crew" element={<StartRunCrew />} />
              <Route path="/join-or-start-crew" element={<JoinOrStartCrew />} />
              <Route path="/form-run-crew" element={<FormRunCrew />} />
              <Route path="/run-crew-success" element={<RunCrewSuccess />} />
              <Route path="/crew-dashboard" element={<CrewDashboard />} />
              
              {/* Merch Store */}
              <Route path="/merch-store" element={<GoFastMerch />} />
              <Route path="/redeem-points" element={<RedeemPoints />} />
              
              <Route path="/dashboard" element={<GoFastTrainingDashboard />} />
      
      {/* Matching Flow */}
      <Route path="/pre-athlete-profile" element={<PreAthleteProfile />} />
      <Route path="/pre-match" element={<PreMatch />} />
      <Route path="/match-profile-setup" element={<MatchProfileSetup />} />
      <Route path="/matching-home" element={<MatchingHome />} />
      <Route path="/match-profile" element={<MatchProfile />} />
      <Route path="/match-profile-success" element={<MatchProfileSuccess />} />
      <Route path="/find-matches" element={<FindMatches />} />
      <Route path="/request-sent" element={<RequestSent />} />
      <Route path="/request-received" element={<RequestReceived />} />
      <Route path="/youre-paired" element={<YourePaired />} />
      <Route path="/review-proposed-meetup" element={<ReviewProposedMeetup />} />
      <Route path="/athlete-home" element={<AthleteHome />} />
      
      {/* Rewards System */}
      <Route path="/trophy-board" element={<TrophyBoard />} />
      <Route path="/points-explainer" element={<PointsExplainer />} />
      
      {/* Settings */}
      <Route path="/link-garmin" element={<LinkGamin />} />
      <Route path="/link-strava" element={<LinkStrava />} />
              
              {/* Shopping Flow */}
              <Route path="/shop" element={<GoFastShop />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              
              {/* Community/Group Flow */}
              <Route path="/find-your-club" element={<FindRunningClubs />} />
              <Route path="/club-detail/:id" element={<ClubDetail />} />
      
      {/* Platform */}
      <Route path="/gofast-platform" element={<GoFastPlatform />} />
      
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
      <Route path="/athlete-profile" element={<AthleteProfile />} />
      <Route path="/profile-setup-universal" element={<ProfileSetupUniversal />} />
      <Route path="/settings" element={<Settings />} />
      
      {/* Training Flow */}
      <Route path="/training-explainer" element={<TrainingExplainer />} />
      <Route path="/training-plan-setup" element={<TrainingPlanSetup />} />
      <Route path="/training-plan" element={<TrainingPlan />} />
    </Routes>
  </Router>
);

export default App;
