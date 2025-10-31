// RunCrew Demo Navigation
// Simple nav page to jump to different RunCrew views for demo purposes

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunCrewDemoNav() {
  const navigate = useNavigate();

  const pages = [
    // Onboarding Flow
    {
      category: "Onboarding",
      color: "orange",
      pages: [
        { name: "Crew Explainer", path: "/crew-explainer", description: "What are RunCrews?" },
        { name: "Join or Start Crew", path: "/join-or-start-crew", description: "Decision page" },
        { name: "Start RunCrew", path: "/start-run-crew", description: "Start flow entry" },
        { name: "Create Crew Form", path: "/form-run-crew", description: "Form to create crew" },
        { name: "Create Crew", path: "/create-crew", description: "Alternative create page" },
        { name: "RunCrew Success", path: "/run-crew-success", description: "Post-creation success" },
      ]
    },
    // Join Flow
    {
      category: "Join Flow",
      color: "green",
      pages: [
        { name: "RunCrew Join", path: "/run-crew-join", description: "Join with code entry" },
        { name: "Join Crew", path: "/join-crew", description: "Alternative join page" },
      ]
    },
    // Crew Views
    {
      category: "Crew Views",
      color: "blue",
      pages: [
        { name: "Crew Dashboard", path: "/crew-dashboard", description: "Main crew dashboard" },
        { name: "RunCrew Home", path: "/runcrew-home", description: "Crew home/chat view" },
        { name: "RunCrew Members", path: "/runcrew-members", description: "Members list view" },
        { name: "Membership Manage", path: "/runcrew-membership-manage", description: "Manage memberships" },
      ]
    },
    // RunClub (Related)
    {
      category: "RunClub",
      color: "purple",
      pages: [
        { name: "Find Running Clubs", path: "/find-your-club", description: "Browse clubs" },
        { name: "Club Detail", path: "/club-detail/1", description: "Club detail page" },
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: "bg-orange-50",
        hover: "hover:bg-orange-100",
        border: "border-orange-200",
        text: "text-orange-800",
        dot: "bg-orange-500"
      },
      green: {
        bg: "bg-green-50",
        hover: "hover:bg-green-100",
        border: "border-green-200",
        text: "text-green-800",
        dot: "bg-green-500"
      },
      blue: {
        bg: "bg-blue-50",
        hover: "hover:bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-800",
        dot: "bg-blue-500"
      },
      purple: {
        bg: "bg-purple-50",
        hover: "hover:bg-purple-100",
        border: "border-purple-200",
        text: "text-purple-800",
        dot: "bg-purple-500"
      }
    };
    return colors[color] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">RunCrew Demo Navigation</h1>
          <p className="text-gray-600 mb-4">Complete overview of all RunCrew pages - see what's built and what's the intent</p>
          <p className="text-sm text-gray-500">Total: {pages.reduce((sum, cat) => sum + cat.pages.length, 0)} pages</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pages.map((category, catIdx) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div key={catIdx} className={`border-2 ${colorClasses.border} rounded-lg p-6 bg-white`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${colorClasses.dot}`}></span>
                  {category.category}
                  <span className="text-sm font-normal text-gray-500">({category.pages.length} pages)</span>
                </h2>
                <div className="space-y-2">
                  {category.pages.map((page, pageIdx) => (
                    <button
                      key={pageIdx}
                      onClick={() => navigate(page.path)}
                      className={`w-full ${colorClasses.bg} ${colorClasses.hover} border ${colorClasses.border} ${colorClasses.text} py-3 px-4 rounded-lg text-left transition-colors`}
                    >
                      <div className="font-semibold">{page.name}</div>
                      <div className="text-xs text-gray-600 mt-1">{page.description}</div>
                      <div className="text-xs text-gray-400 mt-1 font-mono">{page.path}</div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/connect')}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900"
            >
              ← Back to Connect
            </button>
            <button
              onClick={() => navigate('/athlete-home')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Athlete Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
