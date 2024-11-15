import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '@/app/(pages)/shop/shopdashboard';
import Notification from '@/app/(pages)/shop/notifications';
import Products from '@/app/(pages)/shop/products';
import ShopBar from './shopbar';

const Stack = createStackNavigator();

const routingpages = () => {
    return (
        <NavigationContainer>
          {/* Stack navigator for screen navigation */}
          <Stack.Navigator initialRouteName="Dashboard">
            {/* Add your screens */}
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Products" component={Products} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default routingpages