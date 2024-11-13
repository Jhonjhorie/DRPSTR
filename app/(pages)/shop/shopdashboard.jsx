import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Sidebar from '@/components/shop/shopbar'

const shopdashboard = () => {
  return (
    <View className='bg-slate-300 h-full w-full '>
      <Text>shopdashboard</Text>
      <View>
        <Sidebar/>
      </View>
    </View>
  )
}

export default shopdashboard

const styles = StyleSheet.create({})