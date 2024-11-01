// src/components/RibbonNavigation.jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const RibbonNavigation = ({ items }) => {
  return (
    <View className="flex-row items-center justify-center bg-[#180028] border-b-2 border-green-700 py-2">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="flex items-center px-3 py-1 mx-2 rounded-md "
        >
          <Text className="text-white text-sm font-semibold">{item.label}</Text>
        </Link>
      ))}
    </View>
  );
};

export default RibbonNavigation;
