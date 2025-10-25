import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RedeemPoints = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(1250);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const redeemableItems = [
    {
      id: 1,
      name: 'GoFast Running Tee',
      pointsCost: 500,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Orange']
    },
    {
      id: 2,
      name: 'GoFast Performance Hat',
      pointsCost: 400,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
      sizes: ['One Size'],
      colors: ['Black', 'Orange', 'Navy']
    },
    {
      id: 3,
      name: 'GoFast Running Socks',
      pointsCost: 300,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'White', 'Orange']
    }
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
  };

  const handleRedeem = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    const totalCost = selectedItem.pointsCost * quantity;
    if (totalCost > currentPoints) {
      alert('Not enough points!');
      return;
    }

    alert(`Redeemed ${quantity} ${selectedItem.name} for ${totalCost} points!`);
    navigate('/merch-store');
  };

  const handleBack = () => {
    navigate('/merch-store');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">Redeem Points</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-orange-600">{currentPoints} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Redeem Your Points
          </h1>
          <p className="text-xl text-gray-600">
            Use your hard-earned points to get exclusive GoFast merch
          </p>
        </div>

        {/* Available Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {redeemableItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item)}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                  selectedItem?.id === item.id
                    ? 'ring-4 ring-orange-500 bg-orange-50'
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-orange-600 font-bold">{item.pointsCost} pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Redemption Form */}
        {selectedItem && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Redeem {selectedItem.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item Details */}
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl">🏆</span>
                  <span className="text-2xl font-bold text-orange-600">{selectedItem.pointsCost} pts</span>
                </div>
              </div>

              {/* Selection Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {selectedItem.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 border-2 rounded-lg font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-orange-500 bg-orange-50 text-orange-700'
                            : 'border-gray-300 hover:border-orange-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedItem.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`p-3 border-2 rounded-lg font-medium transition-colors ${
                          selectedColor === color
                            ? 'border-orange-500 bg-orange-50 text-orange-700'
                            : 'border-gray-300 hover:border-orange-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Cost */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Total Cost:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🏆</span>
                      <span className="text-2xl font-bold text-orange-600">
                        {selectedItem.pointsCost * quantity} pts
                      </span>
                    </div>
                  </div>
                  {selectedItem.pointsCost * quantity > currentPoints && (
                    <div className="text-red-600 text-sm mt-2">
                      Not enough points! You need {selectedItem.pointsCost * quantity - currentPoints} more.
                    </div>
                  )}
                </div>

                <button
                  onClick={handleRedeem}
                  disabled={!selectedSize || !selectedColor || selectedItem.pointsCost * quantity > currentPoints}
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Redeem Points
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedeemPoints;
