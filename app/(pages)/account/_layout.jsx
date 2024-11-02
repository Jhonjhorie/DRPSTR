import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import RibbonNavigation from '@/components/features/account/ribbonNav';
import Sidebar from "@/components/features/account/sidebar";

const ribbonItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Order', path: '/(pages)/shop', icon: 'storefront' }, 
  { label: 'Notification', path: '/(pages)/notification', icon: 'notifications' }, 
  { label: 'Account', path: '/(pages)/account', icon: 'person' }, 
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

      <View style={styles.mainContent}>
              {/* Sidebar Navigation */}

        <Sidebar />
  
        <View style={styles.contentContainer}>
          {/* Stack Navigation for screens */}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'User Account' }} />
            <Stack.Screen name="(components)/" options={{ href: null }} />
          </Stack>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',  
   },
  contentContainer: {
    flex: 1,
  },
});

export default UserLayout;
