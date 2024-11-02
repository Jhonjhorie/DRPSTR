// /features/User/UserAccount.js
import React from 'react'; 
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Page</Text>
      {/* Add additional content here */}
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

 

export default Account;
