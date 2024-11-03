// src/components/RibbonNavigation.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SideBarNav = ({ items }) => {
  return (
    <View className="flex-column items-center justify-center bg-slate-50 rounded-md w-12 sticky top-52 left-2 z-10 drop-shadow-sm">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="flex items-center p-3 mx-2 rounded-md"
        >
          <Ionicons name={item.icon} className='color-slate-500 hover:color-primary-color' size={18}/>
          {/* <Text className="text-white text-sm font-semibold">{item.label}</Text> */}
        </Link>
      ))}
    </View>
  );
};



export default SideBarNav;
