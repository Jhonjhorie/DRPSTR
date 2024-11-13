import { View, Text } from 'react-native'
import React from 'react'
import ShopSidebar from '@/components/shop/Shopsidebar'

const settingshop = () => {
  return (
    <View  className='h-full w-full bg-slate-300 flex-row'>
         {/*this is the navbar component*/}
         <ShopSidebar className="relative"></ShopSidebar>
      <Text className='text-5xl'>settingshop</Text>
    </View>
  )
}

export default settingshop