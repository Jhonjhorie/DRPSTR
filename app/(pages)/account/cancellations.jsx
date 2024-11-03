import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const MyCancellations = () => {
  return (
    <ScrollView className="p-4 bg-slate-200 flex-1">
      <Text className="text-xl font-bold text-gray-800 mb-6">Cancellation</Text>

 
      {/* Cancellation Item 1 */}
      <View>
      <View className="flex-row justify-between   p-4 bg-gray-100  ">
      <View>
            <Text className="text-gray-700 flex-1 font-semibold">Canceled on 2024-07-19 07:54:07 </Text>
            <Text className="text-gray-600 flex-1">Order #875767726071274</Text>
          </View> 
          <Text className="text-gray-800 font-medium  flex-1 text-center">
            Return to SOCUM & CCTV
          </Text> 
          <TouchableOpacity className="mt-2">
            <Text className="text-indigo-600 flex-1">MORE DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View className="h-1 w-full bg-slate-50"></View>
        <View className="flex-row justify-between mb-6 p-4 bg-gray-100 ">
          <View className="flex-row flex-1">
            <Image
              source={{ uri: "https://via.placeholder.com/80" }} // Placeholder image URL
              className="w-20 h-20 mr-4 rounded-lg"
            />
               <Text className=''>
              POCO X6 Pro 5G powered by Dimensity 8300-Ultra 8+256G/12+512G Global Version in 1 year Warranty
              </Text>
           </View>
          <Text className="text-gray-600 flex-1 text-center">Qty: 1</Text>
          <Text className="text-green-600 flex-1 text-right font-semibold">Cancelled</Text>
        </View>
      </View>


      {/* Cancellation Item 2 */}
      <View>
        <View className="flex-row justify-between   p-4 bg-gray-100  ">
          <View>
          <Text className="text-gray-700 font-semibold  flex-1">Canceled on 2024-02-12 09:50:20</Text>
          <Text className="text-gray-600  flex-1">Order #791586564871274</Text>
          </View> 
          <Text className="text-gray-800 font-medium  flex-1 text-center">
            Return to SOCUM & CCTV
          </Text> 
          <TouchableOpacity className="mt-2">
            <Text className="text-indigo-600">MORE DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View className="h-1 w-full bg-slate-50"></View>
        <View className="flex-row justify-between mb-6 p-4 bg-gray-100 ">
          <View className="flex-row  flex-1">
            <Image
              source={{ uri: "https://via.placeholder.com/80" }} // Placeholder image URL
              className="w-20 h-20 mr-4 rounded-lg"
            />
               <Text>
              Winda Wrist Guard Sports Weightlifting Fitness Training Horizontal Bar Assist Wrapping Protector Fitness Wrist Guard
              </Text>
           </View>
          <Text className="text-gray-600 flex-1 text-center">Qty: 1</Text>
          <Text className="text-green-600 flex-1  text-right font-semibold">Refund issued</Text>
        </View>
      </View>
 
    </ScrollView>
  );
};

export default MyCancellations;
