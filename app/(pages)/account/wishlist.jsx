import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const Wishlist = () => {
  return (
    <ScrollView className="flex-1 bg-slate-200 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Wishlist & Followed Stores (1)</Text>

      {/* Navigation */}
      <View className="flex-row justify-around bg-white p-3 rounded-md shadow mb-4">
        <Text className="text-gray-800 font-semibold">My Wishlists</Text>
        <Text className="text-gray-600">Past Purchases</Text>
        <Text className="text-gray-600">Followed Stores</Text>
      </View>

      {/* Add All to Cart Button */}
      <TouchableOpacity className="bg-blue-600 rounded-md p-3 mb-4">
        <Text className="text-white text-center font-semibold">ADD ALL TO CART</Text>
      </TouchableOpacity>

      {/* Wishlist Item */}
      <View className="bg-white p-4 rounded-md shadow mb-4">
        <Text className="text-sm text-red-500 font-bold mb-1">Out of Stock</Text>
        <Text className="text-lg font-bold text-gray-800">Zorotech</Text>

        <View className="flex-row">
          <Image
            source={{ uri: "https://via.placeholder.com/80" }} // Placeholder image URL
            className="w-20 h-20 mr-4 rounded-lg"
          />
          <View>
            <Text className="text-gray-700 mb-2">NOT AVAILABLE</Text>
            <Text className="text-gray-700 font-medium">
              Zoro 2.5" SSD SATA3 128GB 256GB 512GB 1TB 2TB SATA M.2 2280 B&M KEY Computer Built-In Solid State Drive Suitable For Laptop/Desktop
            </Text>
            <Text className="text-gray-600 mt-1">Specifications: 2.5'' SATA 512GB SSD</Text>
            <Text className="text-lg font-semibold text-gray-800 mt-2">₱1,499.00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wishlist;
