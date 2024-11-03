import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const RibbonNavBar = () => {
  const ribbonItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Order', path: '/(pages)/shop', icon: 'storefront' }, 
    { label: 'Notification', path: '/(pages)/notification', icon: 'notifications' }, 
    { label: 'Account', path: '/(pages)/account', icon: 'person' }, 
  ];

  return (
    <View style={styles.container}>
      <View style={styles.ribbon}>
        {ribbonItems.map((item, index) => (
          <Link href={item.path} key={index} style={styles.link}>
            <Text style={styles.linkText}>{item.label}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(241 245 249)', // Light gray background color for the container
  },
  ribbon: {
    backgroundColor: 'rgb(241 245 249)', // Background color of the ribbon
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.05, // Shadow opacity
    shadowRadius: 3.5, // Shadow blur radius
  },
  link: {
    padding: 2, // Padding around each link
  },
  linkText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default RibbonNavBar;
