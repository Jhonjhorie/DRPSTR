import { Animated, Text, View, TouchableOpacity,
     StyleSheet 
    
} from 'react-native';
import React, { useState } from 'react';
import Sidebar from '@/components/shop/shopbar'

const shopdashboard = () => {

  return (
    <View className='bg-slate-300 h-full w-full flex-row overflow-hidden'>
     
      <View className='h-full absolute  z-50'>
        <Sidebar/>
      </View>
      <View className='w-full ml-0 md:ml-16 h-auto  overflow-y-scroll bg-slate-900'>
        <Text className='text-center'>This ss the main pages</Text>
        <Text className=''>This is ssthe mainsss pagessssssssss</Text>
      </View>
    </View>
  )
}

export default shopdashboard

const styles = StyleSheet.create({})