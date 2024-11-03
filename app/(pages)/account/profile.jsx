import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const UserProfile = () => {
  return (
    <View className="p-4 bg-slate-200 flex-1">
      {/* Profile Header */}
      <Text className="text-xl font-bold text-gray-800 mb-6">My Profile</Text>

      <View className="p-10 bg-slate-100 flex-1">
        <View className="flex-row justify-between mb-10">
          {/* Full Name Section */}
          <View className="mb-4 flex-1">
            <Text className="text-gray-600 font-medium">Full Name</Text>
            <Text className="text-lg text-gray-900">Jhonjhorie Quiling</Text>
          </View>

          {/* Email Section */}
          <View className="flex-row flex-1 items-center justify-between mb-4 px-5">
            <View>
              <Text className="text-gray-600 font-medium">Email Address</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600">Change</Text>
              </TouchableOpacity>
              <Text className="text-lg text-gray-900">jh********@gmail.com</Text>
            </View>
          </View>

          {/* Mobile Section */}
          <View className="flex-row flex-1 items-center justify-between mb-4">
            <View>
              <Text className="text-gray-600 font-medium">Mobile</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600">Add</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Please enter your mobile"
                className="text-lg text-gray-400"
              />
            </View>
          </View>
        </View>

        <View className="flex-row justify-between">
          {/* Birthday Section */}
          <View className="mb-4 flex-1">
            <Text className="text-gray-600 font-medium">Birthday</Text>
            <TextInput
              placeholder="Please enter your birthday"
              className="text-lg text-gray-400"
            />
          </View>
          <View className="px-5"></View>

          {/* Gender Section */}
          <View className="mb-4 flex-1">
            <Text className="text-gray-600 font-medium">Gender</Text>
            <TextInput
              placeholder="Please enter your gender"
              className="text-lg text-gray-400"
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-10">
          <TouchableOpacity className="bg-indigo-600 w-60 py-2 px-4 rounded-md flex-1">
            <Text className="text-white font-medium text-center">Edit</Text>
          </TouchableOpacity>
          <View className="px-5"></View>
          <TouchableOpacity className="bg-gray-600 w-56 py-2 px-4 rounded-md flex-1">
            <Text className="text-white font-medium text-center">Set Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
