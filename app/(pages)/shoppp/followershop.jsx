import { View, Text } from 'react-native'
import React from 'react'
import ShopSidebar from '@/components/features/shop/Shopsidebar'

const followershop = () => {
  return (
    <View className='h-full w-full bg-slate-300 flex-row'>
         {/*this is the navbar component*/}
         <ShopSidebar className="relative"></ShopSidebar>
      <Text className='text-5xl'>followershop</Text>
    </View>
  )
}

export default followershop