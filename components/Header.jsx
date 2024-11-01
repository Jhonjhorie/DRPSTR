import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Header() {
  return (
    <View className="flex-row items-center justify-between bg-purple-700 p-6 ">
      {/* Website Name */}
      <Link href="/" asChild>
        <TouchableOpacity>
          <View className="flex-row items-center">
            <Text className="text-white text-xl font-bold">DRP</Text> <Text className="text-white text-xl font-bold">STR</Text>
          </View>
        </TouchableOpacity>
      </Link>

      {/* Search Bar and Button */}
      <View className="flex-1 flex-row items-center mx-4 bg-gray-100 rounded-full px-3 py-1">
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          className="flex-1 text-black"
        />
        <TouchableOpacity className="ml-2">
          <Ionicons name="search" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Icons */}
      <View className="flex-row space-x-4">
        <Link href="/cart" asChild>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={24} color="white" />
          </TouchableOpacity>
        </Link>
        <Link href="/account" asChild>
          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
