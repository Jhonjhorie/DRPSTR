import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Sidebar = () => {
  return (
    <View className="w-70 px-5 pb-2 h-full pr-10 bg-slate-200">
      <Text className="text-black text-base font-semibold my-5">Hello, Quils</Text>
      <Text className="text-gray-800 text-base font-semibold">09123456789</Text>
      <Text className="text-gray-800 text-base font-semibold">user@gmail.com</Text>

      <View className="w-full h-1 rounded-full bg-gray-600 my-3" />

      <View className="flex flex-1">
        <View className="flex-grow">
          {/* Manage Account Section */}
          <Link href="/(pages)/account">
            <Text className="text-gray-900 text-base">Manage Account</Text>
          </Link>
          <View className="pl-4 pb-1">
            <Link href="/(pages)/account/profile">
              <Text className="text-gray-500 text-base">My Profile</Text>
            </Link>
            <Link href="/(pages)/account/address">
              <Text className="text-gray-500 text-base">My Address Book</Text>
            </Link>
            <Link href="/(pages)/account/payment">
              <Text className="text-gray-500 text-base">My Payment Options</Text>
            </Link>
          </View>

          {/* My Order Section */}
          <Link href="/(pages)/account/orders">
            <Text className="text-gray-900 text-base pt-2">My Order</Text>
          </Link>
          <View className="pl-4 pb-1">
            <Link href="/(pages)/account/cancellations">
              <Text className="text-gray-500 text-base">My Cancellations</Text>
            </Link>
          </View>

          {/* Other Links */}
          <Link href="/(pages)/account/reviews">
            <Text className="text-gray-900 text-base py-1">My Reviews</Text>
          </Link>
          <Link href="/(pages)/account/wishlist">
            <Text className="text-gray-900 text-base py-1">My Wishlist and Followed Shop</Text>
          </Link>
          <Link href="/(pages)/account/wow">
            <Text className="text-gray-900 text-base py-1">Set up Shop</Text>
          </Link>
          <Link href="/(pages)/account/avatar">
            <Text className="text-gray-900 text-base py-1">Avatar</Text>
          </Link>
        </View>   

        {/* Logout Button Positioned at Bottom */}
        <Link href="/(pages)/account/logout" className="flex flex-row justify-between items-center mt-auto pt-4">
          <Text className="text-gray-900 text-base">Logout</Text>
        </Link>
      </View>
    </View>
  );
};

export default Sidebar;
