import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SideBarNav from '@/components/BarNav'

export default function registershop() {
  return (
    <View className='md:flex md:flex-row md:flex-1'>
      {/* First Container */}
      <View className='flex-1 h-full justify-center items-center bg-pink-200'>
        <Text>Container 1</Text>
      </View>
      
      {/* Second Container */}
      <View className='flex-1 h-full justify-center items-center bg-blue-300'>
        <Text>Container 2</Text>
      </View>
    </View>


        

       
  
  )
}

const styles = StyleSheet.create({})