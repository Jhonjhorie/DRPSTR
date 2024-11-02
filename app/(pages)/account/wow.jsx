import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const SellOnDRPSTR = () => {
  return (
    <ScrollView className="flex-1 bg-slate-200 p-6">
      {/* Header Section */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Become a Seller on DRPSTR
      </Text>
      <Text className="text-gray-600 mb-6">
        Join DRPSTR’s thriving community of sellers and expand your business
        reach with ease. Here’s everything you need to know to get started.
      </Text>

      {/* Benefits Section */}
      <View className="mb-4">
        <Text className="text-xl font-semibold text-gray-800 mb-3">
          Why Sell on DRPSTR?
        </Text>
        <Text className="text-gray-600 mb-2">• Reach millions of customers instantly</Text>
        <Text className="text-gray-600 mb-2">• Boost your sales with easy-to-use tools</Text>
        <Text className="text-gray-600 mb-2">• Direct customer support and training</Text>
        <Text className="text-gray-600">• Secure payments and reliable shipping</Text>
      </View>

      {/* Steps to Get Started Section */}
      <View>
        <Text className="text-xl font-semibold text-gray-800 mb-3">
          How to Get Started
        </Text>

        <View className="mb-4">
          <Text className="text-gray-800 font-medium">
            1. Register Your Account
          </Text>
          <Text className="text-gray-600">
            Sign up as a seller and provide your business details to get started.
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-800 font-medium">
            2. Set Up Your Store
          </Text>
          <Text className="text-gray-600">
            Upload product details, add descriptions, and set your prices.
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-800 font-medium">3. Start Selling</Text>
          <Text className="text-gray-600">
            Once approved, your products go live on DRPSTR, and you can start
            selling to customers nationwide.
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-800 font-medium">
            4. Manage Orders and Payments
          </Text>
          <Text className="text-gray-600">
            Track orders and payments in your seller dashboard and get insights
            to grow your business.
          </Text>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity className="bg-purple-500 py-3 rounded-lg items-center">
        <Text className="text-white text-lg font-medium">Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SellOnDRPSTR;
