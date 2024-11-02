import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const AddressBook = () => {
  return (
    <ScrollView className="p-4 bg-slate-200 flex-1">
      <View className='flex-row justify-between'>
      {/* Page Title */}
      <Text className="text-xl font-bold text-gray-800 mb-6">Address Book</Text>
      {/* Action Buttons */}
      <View className="flex-row justify-end pt-2 mb-2 align-middle">
          <TouchableOpacity className="mr-2">
            <Text className="text-indigo-600 text-sm">Make default shipping address    |</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-indigo-600 text-sm">   Make default billing address</Text>
          </TouchableOpacity>
        </View>

        </View>
      {/* Address Item */}
      <View className="mb-4 p-4 bg-slate-100  "> 
        <View className="flex-1 bg-slate-100 p-4   mb-6">
          {/* Table Header */}
          <View className="flex-row bg-gray-200 py-2 px-3 rounded-t-lg">
            <Text className="flex-1 text-gray-700 font-bold mr-1">Full Name</Text>
            <Text className="flex-1 text-gray-700 font-bold mr-1">Address</Text>
            <Text className="flex-1 text-gray-700 font-bold mr-1">PostCode</Text>
            <Text className="flex-1 text-gray-700 font-bold mr-1">Phone Number</Text>
            <Text className="flex-1 text-gray-700 font-bold mr-1"></Text>
            <Text className="flex-1 text-gray-700 font-bold mr-1"></Text>
          </View>

          {/* Table Rows */}
          <View className="bg-white">
            {/* Row 1 */}
            <View className="flex-row border-b border-gray-200 py-2 px-3 items-center">
              <Text className="flex-1 text-gray-600 mr-1">Jhonjhorie Quiling</Text>
              <Text className="flex-1 text-gray-600 mr-1">Mangga St. no. 16</Text>
              <Text className="flex-1 text-gray-600 mr-1">Metro Manila ~ Quezon City - Payatas</Text> 
              <Text className="flex-1 text-gray-600 mr-1">09563592007</Text>
              <View className='flex-col'>
                <Text className="flex-1 text-gray-600 mr-1">Default Billing Address </Text>            
                <Text className="flex-1 text-gray-600  mr-1">Default Shipping Address </Text> 
              </View>
              <Text className="flex-1 text-indigo-600 flex justify-center"> Edit </Text>
            </View> 
          </View>
      {/* Add New Address Button */}
        <View className='flex-1 justify-between'>
          <View></View>
          <TouchableOpacity className="mt-6 w-60 bg-indigo-600 py-3 rounded-md ">
            <Text className="text-white text-center font-bold px-10">+ ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </View>





        </View>



      </View>




      

        
    </ScrollView>
  );
};

export default AddressBook;
