import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastMerch = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(1250);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🏃‍♂️' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '🎒' },
    { id: 'gear', name: 'Gear', icon: '⌚' }
  ];

  const merchItems = [
    {
      id: 1,
      name: 'GoFast Running Tee',
      category: 'apparel',
      price: 25,
      pointsCost: 500,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      description: 'Premium cotton running tee with GoFast logo',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Orange']
    },
    {
      id: 2,
      name: 'GoFast Performance Hat',
      category: 'accessories',
      price: 20,
      pointsCost: 400,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
      description: 'Moisture-wicking cap for all weather conditions',
      sizes: ['One Size'],
      colors: ['Black', 'Orange', 'Navy']
    },
    {
      id: 3,
      name: 'GoFast Running Socks',
      category: 'gear',
      price: 15,
      pointsCost: 300,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
      description: 'Cushioned running socks with GoFast branding',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'White', 'Orange']
    },
    {
      id: 4,
      name: 'GoFast Hoodie',
      category: 'apparel',
      price: 45,
      pointsCost: 900,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
      description: 'Cozy hoodie perfect for post-run recovery',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Orange']
    },
    {
      id: 5,
      name: 'GoFast Water Bottle',
      category: 'gear',
      price: 18,
      pointsCost: 360,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop',
      description: 'Insulated water bottle with GoFast logo',
      sizes: ['One Size'],
      colors: ['Black', 'Orange', 'White']
    },
    {
      id: 6,
      name: 'GoFast Running Shorts',
      category: 'apparel',
      price: 30,
      pointsCost: 600,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
      description: 'Lightweight running shorts with GoFast branding',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Orange']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? merchItems 
    : merchItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (item) => {
    navigate(`/merch-item/${item.id}`);
  };

  const handleRedeemPoints = () => {
    navigate('/redeem-points');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast Merch</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="font-bold text-orange-600">{currentPoints} pts</span>
              </div>
              <button
                onClick={handleRedeemPoints}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Redeem Points
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">GoFast Merch Store</h1>
          <p className="text-xl mb-6">Premium running gear. Earned with points. Worn with pride.</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <span className="text-2xl font-bold">{currentPoints} points available</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Merch Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                  {item.pointsCost} pts
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl">🏆</span>
                      <span className="text-orange-600 font-bold">{item.pointsCost}</span>
                    </div>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points Info */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">How Points Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🏃‍♂️</div>
              <h4 className="font-bold text-gray-900 mb-2">Earn Points</h4>
              <p className="text-sm text-gray-600">Run, match, and complete challenges to earn points</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-900 mb-2">Redeem Points</h4>
              <p className="text-sm text-gray-600">Use your points to get exclusive GoFast merch</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎁</div>
              <h4 className="font-bold text-gray-900 mb-2">Show Your Pride</h4>
              <p className="text-sm text-gray-600">Wear your GoFast gear and represent the community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoFastMerch;
