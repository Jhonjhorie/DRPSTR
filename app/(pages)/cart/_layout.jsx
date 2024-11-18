// /features/User/_layout.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import Header from '@/components/Header';
import RibbonNavigation from '@/components/BarNav';
 


const CartLayout = () => {
  return (
    <View style={styles.container}>
           <View style={styles.ribbonStyle} >

<RibbonNavigation  />  
</View>           <View  className='w-12' >

 </View>
      {/* Stack Navigation for screens */}
      <Stack screenOptions={{
        headerShown: false,  
      }}>
        <Stack.Screen name="index" options={{ title: 'User Account' }} />
       </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }, 
  ribbonStyle: {
    position: 'absolute',
     width: '100%',
    zIndex: 10,  
  },
});

export default CartLayout;
