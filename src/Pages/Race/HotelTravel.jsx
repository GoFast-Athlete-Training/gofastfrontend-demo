import React from "react";
import { useNavigate } from "react-router-dom";

const HotelTravel = () => {
  const navigate = useNavigate();

  // Boston Marathon logistics
  const raceInfo = {
    name: "Boston Marathon",
    date: "April 30, 2026",
    startTime: "10:00 AM",
    startLocation: "Hopkinton, MA",
    finishLocation: "Boylston Street, Boston",
    distance: "26.2 miles",
    transportation: "Buses from Boston Common to Hopkinton"
  };

  // Hotel recommendations
  const hotels = [
    {
      name: "Boston Marriott Copley Place",
      distance: "0.2 mi from finish",
      price: "$289/night",
      rating: "4.5/5",
      features: ["Pool", "Gym", "Restaurant", "Near finish line"],
      booking: "https://marriott.com"
    },
    {
      name: "The Westin Copley Place",
      distance: "0.1 mi from finish",
      price: "$325/night",
      rating: "4.3/5",
      features: ["Pool", "Spa", "Restaurant", "Direct finish line access"],
      booking: "https://westin.com"
    },
    {
      name: "Hampton Inn Boston Back Bay",
      distance: "0.3 mi from finish",
      price: "$199/night",
      rating: "4.2/5",
      features: ["Free breakfast", "Gym", "Near T station"],
      booking: "https://hamptoninn.com"
    },
    {
      name: "The Lenox Hotel",
      distance: "0.4 mi from finish",
      price: "$245/night",
      rating: "4.4/5",
      features: ["Historic", "Restaurant", "Near Newbury Street"],
      booking: "https://lenoxhotel.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Hotel & Travel</h1>
              <p className="text-gray-600">Race logistics and accommodation</p>
            </div>
            <button
              onClick={() => navigate("/my-races")}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back to My Races
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Race Logistics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Race Logistics 🏁</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Start Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> {raceInfo.startLocation}</p>
                <p><strong>Date:</strong> {raceInfo.date}</p>
                <p><strong>Start Time:</strong> {raceInfo.startTime}</p>
                <p><strong>Transportation:</strong> {raceInfo.transportation}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Finish Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> {raceInfo.finishLocation}</p>
                <p><strong>Distance:</strong> {raceInfo.distance}</p>
                <p><strong>Finish Area:</strong> Boston Common & Boylston Street</p>
                <p><strong>Post-Race:</strong> Family meeting area at Boston Common</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Recommended Hotels Near Finish Line 🏨</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{hotel.distance}</p>
                    <p className="text-sm text-gray-500">{hotel.rating}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-xl font-bold text-green-600">{hotel.price}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {hotel.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => window.open(hotel.booking, '_blank')}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Travel Tips ✈️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-3">Getting to Boston</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Fly into Logan International Airport (BOS)</li>
                <li>• Take the T (subway) from airport to downtown</li>
                <li>• Uber/Lyft available from airport</li>
                <li>• Consider arriving 2-3 days early for acclimation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-3">Race Day Transportation</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Buses depart from Boston Common to Hopkinton</li>
                <li>• Arrive at Boston Common by 6:00 AM</li>
                <li>• Bring warm clothes for the wait in Hopkinton</li>
                <li>• Family can watch from multiple locations along course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelTravel;
