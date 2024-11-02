// /features/User/_layout.js
import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import Header from '@/components/Header';
import RibbonNavigation from '@/components/features/account/ribbonNav';

const ribbonItems = [
  { label: 'Home', path: '/', icon:'home' },
  { label: 'Order', path: '/(pages)/shop', icon:'storefront' }, 
  { label: 'Notification', path: '/(pages)/notification', icon:'notifications' }, 
  { label: 'Account', path: '/(pages)/account', icon:'person' }, 
];
const handleSearch = (query) => {
  console.log("Search query:", query);
};

const UserLayout = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onSearch={handleSearch} title="Home" />


        {/* Sub-header Navigation */}
        <RibbonNavigation items={ribbonItems} />
  
        {/* Stack Navigation for screens */}
        <Stack screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="index" options={{ title: 'User Account' }} />
          <Stack.Screen name="(components)/" options={{ href:null }}  />
        </Stack>


        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#291735',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#388E3C',
  },
  link: {
    padding: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default UserLayout;
