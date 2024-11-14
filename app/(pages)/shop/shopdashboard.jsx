import { Animated, Text, View, TouchableOpacity,
     StyleSheet 
    
} from 'react-native';
import React, { useState } from 'react';
import Sidebar from '@/components/shop/shopbar'

const shopdashboard = () => {

  return (
    <View className='bg-slate-300 h-screen w-full flex-row'>
     
      <View className='h-full absolute z-50'>
        <Sidebar/>
      </View>
      <View className='w-full ml-16 h-[200%] bg-slate-300'>
        <Text className='text-center'>This ss the main pages</Text>
        <Text className=''>This is the main page</Text>
      </View>
    </View>
  )
}

export default shopdashboard

const styles = StyleSheet.create({})