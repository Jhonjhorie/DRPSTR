import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyOrders = () => {
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "To Pay", "To Ship", "To Receive", "Received (32)"];

  return (
    <ScrollView className="p-4 bg-slate-200 flex-1">
      <Text className="text-xl font-bold text-gray-800 mb-6">My Orders</Text>

      {/* Navigation Tabs */}
      <View className="flex-row justify-around p-1">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            className="flex-1 py-1"
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              className={`text-center font-semibold ${
                selectedTab === tab ? 'text-slate-900' : 'text-gray-800'
              }`}
            >
              {tab}
            </Text>
            {/* Indicator for the selected tab */}
            {selectedTab === tab && (
              <View className="w-full h-1 bg-slate-900 mt-1 rounded-full" />
            )}
          </TouchableOpacity>
        ))}
      </View>


      {/* Search Bar */}
      <View className="flex-1 bg-white px-4 py-4 mb-6 mt-2 flex-row items-center rounded-md">
        <Ionicons name="search" size={20} color="gray" className="absolute left-4" />
        <TextInput
          placeholder="Search by Item or Store name"
          placeholderTextColor="gray"
          style={{ paddingLeft: 32 }}
          className="flex-1 text-gray-700"
        />
      </View>

      {/* Order Items */}
      <View className="mb-4 p-4 bg-gray-100 rounded-lg">
        {/* Order 1 */}
        <Text className="text-gray-800 font-bold text-lg mb-2">LIXIAOJU 1718344222</Text>
        <Text className="text-green-500 font-medium mb-2">Received</Text>
        <View className="flex-row items-center mb-2">
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            className="w-20 h-20 mr-4 rounded-lg"
          />
          <View className="flex-1">
            <Text className="text-gray-800 font-medium">
              [LIXIAOJU] For Dell Latitude 3410 3510 E3510 E3410 Laptop Charging Flex Cable 07DM5H 0N8R4T DC Power Jack cable
            </Text>
            <Text className="text-gray-500">5CM</Text>
            <Text className="text-green-500">Free Returns</Text>
            <Text className="text-gray-800 font-bold">₱93.60</Text>
            <Text className="text-gray-500">Qty: 1</Text>
          </View>
        </View>
      </View>

      <View className="mb-4 p-4 bg-gray-100 rounded-lg">
        {/* Order 2 */}
        <Text className="text-gray-800 font-bold text-lg mb-2">Top_Appliancer</Text>
        <Text className="text-green-500 font-medium mb-2">Received</Text>
        <View className="flex-row items-center mb-2">
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            className="w-20 h-20 mr-4 rounded-lg"
          />
          <View className="flex-1">
            <Text className="text-gray-800 font-medium">
              1Pc Universal Crossbody Nylon Patch Phone Lanyards Rope Strap Lanyard / Nylon Soft Rope Cell Phone Hanging Cord with curing cloth
            </Text>
            <Text className="text-gray-500">Black</Text>
            <Text className="text-green-500">30 Days Free Returns</Text>
            <Text className="text-gray-800 font-bold">₱54.00</Text>
            <Text className="text-gray-500">Qty: 1</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyOrders;
