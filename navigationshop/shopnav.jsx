import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '@/app/(pages)/shop/shopdashboard';
import Notification from '@/app/(pages)/shop/notifications';
import Products from '@/app/(pages)/shop/products';
import Followers from '@/app/(pages)/shop/followers';
import Settings from '@/app/(pages)/shop/settings';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
// don't touch this works both mobile and web