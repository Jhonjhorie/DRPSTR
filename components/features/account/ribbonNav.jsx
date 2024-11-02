import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Icon, Card, Button } from 'react-native-elements'; 

const RibbonNavBar = () => {
    const ribbonItems = [
        { label: 'Home', path: '/', icon:'home' },
        { label: 'Order', path: '/(pages)/shop', icon:'storefront' }, 
        { label: 'Notification', path: '/(pages)/notification', icon:'notifications' }, 
        { label: 'Account', path: '/(pages)/account', icon:'person' }, 
      ];

  return (
    <View className="bg-white p-1 rounded-b-lg shadow-md">
      <View className="flex-row justify-around">
        {ribbonItems.map((item, index) => (
          <Link href={item.path} key={index} className="text-black font-bold">
            <Text>{item.label}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default RibbonNavBar;
