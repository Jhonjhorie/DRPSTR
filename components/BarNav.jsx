// src/components/RibbonNavigation.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SideBarNav = ({ items }) => {
  return (
    <View className="flex flex-column  justify-center bg-slate-50 p-2 rounded-md w-9 sticky z-10 drop-shadow-sm mt-[25vh] left-2 hover:w-48 duration-300 transition-all overflow-hidden">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="flex gap-4 py-2 rounded-md group"
        >
          <Ionicons name={item.icon} className='color-slate-500 group-hover:color-primary-color' size={20}/>
          <Text className="text-slate-500 text-sm font-semibold group-hover:text-primary-color group-hover:font-bold">{item.label}</Text>
        </Link>
      ))}
    </View>
  );
};



export default SideBarNav;
