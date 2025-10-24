import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrainingAnalysis = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("5k-pace");

  // Filter options
  const filters = [
    { id: "5k-pace", name: "5K Pace Outlook", icon: "🏃‍♂️" },
    { id: "hr-analysis", name: "Heart Rate Analysis", icon: "❤️" },
    { id: "elevation", name: "Elevation Gain", icon: "⛰️" },
    { id: "weekly-summary", name: "Weekly Summary", icon: "📊" }
  ];

  // Analytics data based on selected filter
  const getAnalyticsData = () => {
    switch (selectedFilter) {
      case "5k-pace":
        return {
          title: "5K Pace Outlook",
          subtitle: "Based on your recent training",
          metrics: [
            { label: "Current 5K Pace", value: "19:45", trend: "+0:15", trendUp: false },
            { label: "Target 5K Pace", value: "19:30", trend: "Goal", trendUp: null },
            { label: "Projected 5K", value: "19:20", trend: "+0:10", trendUp: true }
          ],
          insights: [
            "Your tempo runs are getting faster - great sign!",
            "Last 5K time trial was 19:45, showing improvement",
            "With 8 weeks to go, you're on track for sub-19:30"
          ],
          chart: {
            type: "pace-progression",
            data: [
              { week: "Week 1", pace: "20:15" },
              { week: "Week 2", pace: "20:00" },
              { week: "Week 3", pace: "19:45" },
              { week: "Week 4", pace: "19:30" }
            ]
          }
        };
      
      case "hr-analysis":
        return {
          title: "Heart Rate Analysis",
          subtitle: "Target HR zone performance",
          metrics: [
            { label: "Time in Zone 2", value: "65%", trend: "+5%", trendUp: true },
            { label: "Avg HR Zone 3", value: "78%", trend: "-3%", trendUp: false },
            { label: "Recovery HR", value: "45 bpm", trend: "-2 bpm", trendUp: true }
          ],
          insights: [
            "Excellent zone 2 control - you're building aerobic base",
            "Zone 3 efforts are well-controlled, not going too hard",
            "Recovery heart rate is improving, showing fitness gains"
          ],
          chart: {
            type: "hr-zones",
            data: [
              { zone: "Zone 1", time: "15%", color: "bg-green-500" },
              { zone: "Zone 2", time: "65%", color: "bg-blue-500" },
              { zone: "Zone 3", time: "15%", color: "bg-yellow-500" },
              { zone: "Zone 4", time: "5%", color: "bg-red-500" }
            ]
          }
        };
      
      case "elevation":
        return {
          title: "Elevation Gain",
          subtitle: "Weekly elevation training",
          metrics: [
            { label: "This Week", value: "1,200 ft", trend: "+200 ft", trendUp: true },
            { label: "Last Week", value: "1,000 ft", trend: "+100 ft", trendUp: true },
            { label: "Monthly Avg", value: "4,500 ft", trend: "+500 ft", trendUp: true }
          ],
          insights: [
            "Great elevation training for Boston's Newton Hills",
            "Hill repeats are building the strength you need",
            "Consider adding more rolling hills to your long runs"
          ],
          chart: {
            type: "elevation-weekly",
            data: [
              { day: "Mon", elevation: "0 ft" },
              { day: "Tue", elevation: "300 ft" },
              { day: "Wed", elevation: "0 ft" },
              { day: "Thu", elevation: "200 ft" },
              { day: "Fri", elevation: "0 ft" },
              { day: "Sat", elevation: "400 ft" },
              { day: "Sun", elevation: "300 ft" }
            ]
          }
        };
      
      case "weekly-summary":
        return {
          title: "Weekly Summary",
          subtitle: "This week's training overview",
          metrics: [
            { label: "Total Miles", value: "45.2 mi", trend: "+2.1 mi", trendUp: true },
            { label: "Training Load", value: "High", trend: "Optimal", trendUp: null },
            { label: "Recovery Score", value: "8.5/10", trend: "+0.5", trendUp: true }
          ],
          insights: [
            "Perfect training load - challenging but sustainable",
            "Recovery is on point, sleep and nutrition dialed in",
            "Ready for next week's intensity increase"
          ],
          chart: {
            type: "weekly-breakdown",
            data: [
              { day: "Mon", miles: 6, type: "Easy" },
              { day: "Tue", miles: 8, type: "Tempo" },
              { day: "Wed", miles: 0, type: "Rest" },
              { day: "Thu", miles: 6, type: "Easy" },
              { day: "Fri", miles: 0, type: "Rest" },
              { day: "Sat", miles: 12, type: "Long" },
              { day: "Sun", miles: 13.2, type: "Long" }
            ]
          }
        };
      
      default:
        return null;
    }
  };

  const analyticsData = getAnalyticsData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Training Analytics</h1>
              <p className="text-gray-600">Filter and analyze your training data</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/training-hub")}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back to Training Hub
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Analytics Filters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedFilter === filter.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{filter.icon}</div>
                  <p className="text-sm font-medium">{filter.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Content */}
        {analyticsData && (
          <div className="space-y-6">
            {/* Title and Subtitle */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">{analyticsData.title}</h2>
              <p className="text-gray-600">{analyticsData.subtitle}</p>
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {analyticsData.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-gray-600 mb-1">{metric.label}</p>
                    {metric.trend && (
                      <p className={`text-sm ${
                        metric.trendUp === true ? 'text-green-600' : 
                        metric.trendUp === false ? 'text-red-600' : 
                        'text-gray-600'
                      }`}>
                        {metric.trend}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Insights</h3>
              <ul className="space-y-2">
                {analyticsData.insights.map((insight, index) => (
                  <li key={index} className="text-blue-800">• {insight}</li>
                ))}
              </ul>
            </div>

            {/* Chart/Visualization */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Data Visualization</h3>
              {analyticsData.chart.type === "pace-progression" && (
                <div className="space-y-3">
                  {analyticsData.chart.data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item.week}</span>
                      <span className="text-blue-600 font-semibold">{item.pace}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {analyticsData.chart.type === "hr-zones" && (
                <div className="space-y-3">
                  {analyticsData.chart.data.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="font-medium">{item.zone}</span>
                      <span className="text-blue-600 font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {analyticsData.chart.type === "elevation-weekly" && (
                <div className="grid grid-cols-7 gap-2">
                  {analyticsData.chart.data.map((item, index) => (
                    <div key={index} className="text-center p-2 bg-gray-50 rounded">
                      <p className="text-sm font-medium">{item.day}</p>
                      <p className="text-xs text-gray-600">{item.elevation}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {analyticsData.chart.type === "weekly-breakdown" && (
                <div className="space-y-2">
                  {analyticsData.chart.data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.type}</span>
                      </div>
                      <span className="text-blue-600 font-semibold">{item.miles} mi</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingAnalysis;
