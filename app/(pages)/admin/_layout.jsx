// /features/User/_layout.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import Header from '@/components/Header';
import RibbonNavigation from '@/components/RibbonNavigation';

const ribbonItems = [
  { label: 'Home', path: '/' },
  { label: 'Order', path: '/(pages)/shop' }, 
];
const handleSearch = (query) => {
  console.log("Search query:", query);
};

const AdminLayout = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onSearch={handleSearch} title="Home" />
 
      {/* Sub-header Navigation */}
      <RibbonNavigation items={ribbonItems} />
 
      {/* Stack Navigation for screens */}
      <Stack screenOptions={{
        headerShown: false, // Hides the header for all screens in the User module
      }}>
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

export default AdminLayout;
