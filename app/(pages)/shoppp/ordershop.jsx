import { Text, View } from 'react-native'
import React, { Component } from 'react'

import ShopSidebar from '@/components/features/shop/Shopsidebar'

export class ordershop extends Component {
  render() {
    return (
      <View className='h-full w-full bg-slate-300 flex-row'>
        
        <ShopSidebar className="relative"></ShopSidebar>
        <Text>ordershop</Text>
      </View>
    )
  }
}

export default ordershop