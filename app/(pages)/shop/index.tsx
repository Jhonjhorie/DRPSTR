 import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import ShopSidebar from './Shopsidebar';

const Shop = () => {
  return (
    <View className="bg-white h-full flex flex-row">
      {/* Left Sidebar */}
      <ShopSidebar/>
      
      {/* Main Content Area */}
      <View className="bg-slate-200 h-full w-[80%]">
        {/* Add main content here */}
      </View>
    </View>
  );
};
 

export default Shop;
