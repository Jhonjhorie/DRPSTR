import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const PaymentOptions = () => {
  return (
    <ScrollView className="p-4 bg-slate-200 flex-1">
      {/* Page Title */}
      <Text className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</Text>

      {/* Payment Method Section */}
      <View className="mb-4 bg-slate-100 p-5">
        <View className='flex-row '>
        <Text className="  text-gray-700 mb-4 mr-20">Digital Wallet</Text>
        <Text className="  text-gray-700 mb-4">Expiry Date</Text>
        </View>

        {/* Card Item 1 */}
        <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-2">
          <View>
            <Text className="text-gray-800 font-medium">Gcash</Text>
            <Text className="text-gray-600 text-sm">+639*****2007</Text>
          </View>
          <TouchableOpacity className="bg-red-600 py-1 px-3 rounded-md">
            <Text className="text-white font-medium">Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Card Item 2 */}
        <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-2">
          <View>
            <Text className="text-gray-800 font-medium">Paymaya</Text>
            <Text className="text-gray-600 text-sm">63-9****92007</Text>
          </View>
          <TouchableOpacity className="bg-red-600 py-1 px-3 rounded-md">
            <Text className="text-white font-medium">Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Add Card Button */}
        <TouchableOpacity className="mt-4 w-60 bg-indigo-600 py-3 rounded-md">
          <Text className="text-white text-center font-bold">+ ADD CARD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentOptions;
