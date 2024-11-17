// /features/User/UserAccount.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const Account = () => {
  return (
    <ScrollView className="p-4 bg-slate-200">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-2xl font-bold text-gray-900">
          Manage My Account
        </Text>
      </View>

      {/* Profile Section */}
      <View className="flex-row justify-between mb-6">
        
 <View className="flex-1 mr-5 bg-gray-100 p-4 rounded-lg">
  <View className="flex-row justify-between mb-1">
    <Text className="text-lg font-semibold text-gray-800">
      Personal Profile
    </Text>
    <Link href="/account/edit">
      <Text className="text-indigo-600">Edit Profile</Text>
    </Link>
  </View>

   <View className="flex-row items-center mt-2">
    <Image
      source={{ uri: "https://via.placeholder.com/80" }}
      style={{ width: 80, height: 80, borderRadius: 40 }}
      className="mr-4 bg-gray-300"
    />
    <View>
      <Text className="text-gray-600">Behnigno Ahuilar</Text>
      <Text className="text-gray-600">Beh@example.com</Text>
    </View>
  </View>

  {/* Edit Buttons */}
  <View className="flex-row justify-end ">
 
    <TouchableOpacity
      className="bg-indigo-600 p-2 rounded-lg"
      onPress={() => {
        // handle Edit Avatar action
      }}
    >
      <Text className="text-white font-semibold">Edit Avatar</Text>
    </TouchableOpacity>
  </View>



</View>


        {/* Address Book Section */}
        <View className="flex-1 bg-gray-100 p-4 rounded-lg">
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg font-semibold text-gray-800">
              Address Book
            </Text>
            <Link href="/account/edit">
              <Text className="text-indigo-600">Edit</Text>
            </Link>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-gray-600 font-semibold">
                Default Shipping Address
              </Text>
              <Text className="mt-3 mb-1">Jhonjhorie Quiling</Text>
              <Text className="text-gray-600">Mangga St. no. 16</Text>
              <Text className="text-gray-600">
                Metro Manila - Quezon City - Payatas
              </Text>
              <Text className="text-gray-600">09563592007</Text>
            </View>
            <View style={{ width: 1, backgroundColor: "gray" }} />
            <View className="flex-1 pl-4">
              <Text className="text-gray-600 font-semibold">
                Default Billing Address
              </Text>
              <Text className="mt-3 mb-1">Jhonjhorie Quiling</Text>
              <Text className="text-gray-600">Mangga St. no. 16</Text>
              <Text className="text-gray-600">
                Metro Manila - Quezon City - Payatas
              </Text>
              <Text className="text-gray-600">(+63) 09563592007</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View className="bg-gray-100 p-4 rounded-lg">
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          Recent Orders
        </Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <View className="flex-row bg-gray-200 py-2 px-3 rounded-t-lg">
            <Text className="flex-1 text-gray-700 font-bold">Order #</Text>
            <Text className="flex-1 text-gray-700 font-bold">Placed On</Text>
            <Text className="flex-1 text-gray-700 font-bold">Items</Text>
            <Text className="flex-1 text-gray-700 font-bold">Total</Text>
          </View>

          {/* Table Rows */}
          <View className="bg-white">
            <View className="flex-row border-b border-gray-200 py-2 px-3 items-center">
              <Text className="flex-1 text-gray-600">12345</Text>
              <Text className="flex-1 text-gray-600">2024-10-30</Text>
              <View className="flex-1 items-center">
                <Image
                  source={{ uri: "https://via.placeholder.com/50" }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>
              <Text className="flex-1 text-gray-600">$50.00</Text>
            </View>
            <View className="flex-row border-b border-gray-200 py-2 px-3 items-center">
              <Text className="flex-1 text-gray-600">67890</Text>
              <Text className="flex-1 text-gray-600">2024-11-01</Text>
              <View className="flex-1 items-center">
                <Image
                  source={{ uri: "https://via.placeholder.com/50" }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>
              <Text className="flex-1 text-gray-600">$75.00</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
