import { useNavigate } from 'react-router-dom';

export default function CrewExplainer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-6">
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Ready to Join a Crew?
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          Connect with runners, stay accountable, and crush your goals together
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Accountability */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Accountable</h3>
            <p className="text-gray-600">
              Track your runs together, celebrate wins, and push each other when motivation is low
            </p>
          </div>

          {/* Community */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Find Your People</h3>
            <p className="text-gray-600">
              Join a crew that matches your pace, schedule, and goals. Make running a social experience
            </p>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Friendly Competition</h3>
            <p className="text-gray-600">
              Compete on the leaderboard, earn points, and cheer each other on as you build consistency
            </p>
          </div>

          {/* Activity Tracking */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Track Everything</h3>
            <p className="text-gray-600">
              See everyone's daily activities, weekly mileage, and progress toward their goals in one place
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Join or Start a Crew</h3>
                <p className="text-gray-600">Start your own crew with friends or join an existing one using an invite code</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Connect Your Activity</h3>
                <p className="text-gray-600">Link your favorite running app (Garmin, Strava, etc.) to automatically sync your runs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Run & Compete</h3>
                <p className="text-gray-600">Start running and watch your crew move up the leaderboard together</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate('/form-run-crew')}
            className="w-full bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            🏃 Start Your Own Crew
          </button>
          <button
            onClick={() => navigate('/join-or-start-crew')}
            className="w-full bg-blue-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:bg-blue-700 transition-colors"
          >
            👥 Join an Existing Crew
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/start')}
            className="text-white/80 hover:text-white transition-colors underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
