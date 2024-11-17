// /features/User/_layout.js

import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { Link, Stack } from 'expo-router';

 import RibbonNavigation from '@/components/BarNav';


const ribbonItems = [ 
  { label: 'Home', path: '/', icon:'home' },
    { label: 'Order', path: '/(pages)/shop', icon:'storefront' }, 
    { label: 'Notification', path: '/(pages)/notification', icon:'notifications' }, 
    { label: 'Account', path: '/(pages)/account', icon:'person' }, 
  ];
 
const notifLayout = () => {
    return (
      <View style={styles.container} className="bg-slate-200" >
        {/* Header */}
    
        {/* Sub-header Navigation */}
        <View style={styles.ribbonStyle} >
        <RibbonNavigation items={ribbonItems} activeName={'Notification'}/>
      </View>
      
        {/* Stack Navigation for screens */}
        <Stack screenOptions={{
          headerShown: false, // Hides the header for all screens in the User module
        }}>
          <Stack.Screen name="index" options={{ title: 'User Account' }} />
         </Stack>
      </View>
    );
  };
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    ribbonStyle: {
      position: 'absolute',
       width: '100%',
      zIndex: 10,  
    },


    
});

export default notifLayout;