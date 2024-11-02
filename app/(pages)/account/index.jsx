// /features/User/UserAccount.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Icon, Card, Button } from "react-native-elements";
const Account = () => {
  return (
    <ScrollView className="p-4 bg-slate-200">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-2xl font-bold text-gray-900">
          Manage My Account
        </Text>
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex-1 mr-5 bg-gray-100 p-4 rounded-lg mb-6">
          <View className="flex-row justify-between ">
            <Text className="text-lg font-semibold text-gray-800 mb-1">
              Personal Profile
            </Text>
            <Link href="/account/edit">
              <Text className="text-indigo-600">Edit Profile</Text>
            </Link>
          </View>
          <View>
            {" "}
            {/* Avatar Section */}
            <View className="flex-row items-center mt-2">
              <Image
                source={{ uri: "https://via.placeholder.com/80" }} // Placeholder image URL
                style={{ width: 80, height: 80, borderRadius: 40 }}
                className="mr-4 bg-gray-300"
              />
              <View className="flex-col">
                <Text className="text-gray-600">Behnigno Ahuilar</Text>

                <Text className="text-gray-600">Beh@example.com</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-1 flex-col mr-5 bg-gray-100 p-4 rounded-lg mb-6">
          <View className="flex-row justify-between  mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-1">
              {" "}
              Address Book{" "}
            </Text>
            <Link href="/account/edit">
              {" "}
              <Text className="text-indigo-600">Edit</Text>{" "}
            </Link>
          </View>

          <View className="flex-row justify-between p-4">
            {/* Address Block 1 */}
            <View className="flex-1 pr-4">
              <Text className="text-gray-600 font-semibold">
                Default Shipping Address
              </Text>
              <Text className="mt-3 mb-1">Jhonjhorie Quiling</Text>
              <Text className="text-gray-600">Mangga St. no. 16</Text>
              <Text className="text-gray-600">
                Metro Manila - Quezon City - Payatas
              </Text>
              <Text className="text-gray-600">(+63) 09563592007</Text>
            </View>

            {/* Divider */}
            <View
              className="w-[1px] bg-gray-800 mx-4"
              style={{ height: "100%" }}
            />

            {/* Address Block 2 */}
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

      <View className="flex-1 mr-5 bg-gray-100 p-4 rounded-lg mb-6 h-10">
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          Recent Orders
        </Text>
        <View className="flex-1 bg-gray-100 p-4 rounded-lg mb-6">
          {/* Table Header */}
          <View className="flex-row bg-gray-200 py-2 px-3 rounded-t-lg">
            <Text className="flex-1 text-gray-700 font-bold">Order #</Text>
            <Text className="flex-1 text-gray-700 font-bold">Placed On</Text>
            <Text className="flex-1 text-gray-700 font-bold">Items</Text>
            <Text className="flex-1 text-gray-700 font-bold">Total</Text>
          </View>

          {/* Table Rows */}
          <View className="bg-white">
            {/* Row 1 */}
            <View className="flex-row border-b border-gray-200 py-2 px-3 items-center">
              <Text className="flex-1 text-gray-600">12345</Text>
              <Text className="flex-1 text-gray-600">2024-10-30</Text>
              <View className="flex-1 items-center">
                <Image
                  source={{ uri: "https://via.placeholder.com/50" }}
                  className="w-10 h-10 rounded"
                  alt="Order Item"
                />
              </View>
              <Text className="flex-1 text-gray-600">$50.00</Text>
            </View>

            {/* Row 2 */}
            <View className="flex-row border-b border-gray-200 py-2 px-3 items-center">
              <Text className="flex-1 text-gray-600">67890</Text>
              <Text className="flex-1 text-gray-600">2024-11-01</Text>
              <View className="flex-1 items-center">
                <Image
                  source={{ uri: "https://via.placeholder.com/50" }}
                  className="w-10 h-10 rounded"
                  alt="Order Item"
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