import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderNumber] = useState('GF-2024-001234');
  const [pointsEarned] = useState(150);
  const [currentPoints] = useState(1400);

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleViewOrders = () => {
    navigate('/athlete-home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-8 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Your order has been placed successfully.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium">$190.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Points Used:</span>
                <span className="font-medium text-orange-600">500 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Points Earned:</span>
                <span className="font-medium text-green-600">+{pointsEarned} pts</span>
              </div>
            </div>
          </div>

          {/* Points Summary */}
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-2">🏆</span>
              <div>
                <div className="text-2xl font-bold text-orange-600">{currentPoints} points</div>
                <div className="text-sm text-gray-600">Current balance</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              You earned {pointsEarned} points for this purchase! Keep shopping to earn more.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Order Processing</h3>
                  <p className="text-sm text-gray-600">We'll prepare your items for shipment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Shipping Notification</h3>
                  <p className="text-sm text-gray-600">You'll receive tracking info via email</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Delivery</h3>
                  <p className="text-sm text-gray-600">Your order will arrive in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleContinueShopping}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Continue Shopping
            </button>
            
            <button
              onClick={handleViewOrders}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              View My Orders
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            A confirmation email has been sent to your email address
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
