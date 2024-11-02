import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Sidebar = () => {
  return (
    <View className="w-70 px-5 pb-2 h-full pr-10 bg-slate-200">
      <Text className="text-black text-base font-semibold my-5  ">Hello, Quils</Text>
      <Text className="text-gray-800 text-base font-semibold">09123456789</Text>
      <Text className="text-gray-800 text-base font-semibold">user@gmail.com</Text>

      <View className="w-full h-1 rounded-full bg-gray-600 my-3" />

      <View className="flex flex-1">
        <View className="flex-grow">
          {/* Manage Account Section */}
          <Link href="/(pages)/account" className="text-gray-900 text-base ">Manage Account</Link>
          <View className="pl-4 pb-1">
            <Link href="/(pages)/account/profile" className="text-gray-500 text-base  ">My Profile</Link>
            <Link href="/(pages)/account/address" className="text-gray-500 text-base  ">My Address Book</Link>
            <Link href="/(pages)/account/payment" className="text-gray-500 text-base  ">My Payment Options</Link>
          </View>

          {/* My Order Section */}
          <Link href="/(pages)/account/orders" className="text-gray-900 text-base pt-2">My Order</Link>
          <View className="pl-4 pb-1">

            <Link href="/(pages)/account/cancellations" className="text-gray-500 text-base ">My Cancellations</Link>
          </View>

          {/* Other Links */}
          <Link href="/(pages)/account/reviews" className="text-gray-900  text-base py-1 pb-2">My Reviews</Link>
          <Link href="/(pages)/account/wishlist" className="text-gray-900  text-base py-1 pb-2">My Wishlist and Followed Shop</Link>
          <Link href="/(pages)/account/wow" className="text-gray-900  text-base py-1">Set up Shop</Link>
        </View>   

        {/* Logout Button Positioned at Bottom */}
        <Link href="/(pages)/account/logout" className="flex flex-row justify-between items-center mt-auto pt-4">
          <Text className="text-gray-900 text-base ">Logout</Text>
        </Link>
      </View>
    </View>
  );
};

export default Sidebar;
