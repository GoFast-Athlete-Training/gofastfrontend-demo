import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastShop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPoints] = useState(1250);

  const categories = [
    { id: 'all', name: 'All', icon: '🏃‍♂️' },
    { id: 'shoes', name: 'Shoes', icon: '👟' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '⌚' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥤' }
  ];

  const products = [
    {
      id: 1,
      name: 'Nike Air Zoom Pegasus 40',
      brand: 'Nike',
      price: 120,
      originalPrice: 140,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      category: 'shoes',
      pointsDiscount: 500,
      pointsValue: 5
    },
    {
      id: 2,
      name: 'Nike Dri-FIT Running Shirt',
      brand: 'Nike',
      price: 35,
      originalPrice: 45,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop',
      category: 'apparel',
      pointsDiscount: 200,
      pointsValue: 3
    },
    {
      id: 3,
      name: 'Garmin Forerunner 265',
      brand: 'Garmin',
      price: 450,
      originalPrice: 500,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      category: 'accessories',
      pointsDiscount: 1000,
      pointsValue: 15
    },
    {
      id: 4,
      name: 'Gatorade Energy Chews',
      brand: 'Gatorade',
      price: 8,
      originalPrice: 12,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      category: 'nutrition',
      pointsDiscount: 100,
      pointsValue: 2
    },
    {
      id: 5,
      name: 'Nike Air Zoom Vomero 17',
      brand: 'Nike',
      price: 140,
      originalPrice: 160,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      category: 'shoes',
      pointsDiscount: 600,
      pointsValue: 8
    },
    {
      id: 6,
      name: 'Nike Running Shorts',
      brand: 'Nike',
      price: 25,
      originalPrice: 35,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
      category: 'apparel',
      pointsDiscount: 150,
      pointsValue: 2
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    navigate(`/product-detail/${product.id}`);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast Shop</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="font-bold text-orange-600">{currentPoints} pts</span>
              </div>
              <button
                onClick={handleCartClick}
                className="relative p-2 text-gray-600 hover:text-gray-800"
              >
                <span className="text-2xl">🛒</span>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">GoFast Shop</h1>
          <p className="text-xl mb-6">Premium running gear. Use your points for discounts.</p>
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

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                  {product.pointsDiscount} pts = ${product.pointsValue} off
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl">🏆</span>
                    <span className="text-sm text-orange-600 font-medium">
                      {product.pointsDiscount} pts
                    </span>
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoFastShop;
