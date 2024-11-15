import { Animated, Text, View, TouchableOpacity,
  StyleSheet, Dimensions, Image 
 
} from 'react-native';
import React from 'react'
import Sidebar from '@/components/shop/shopbar'
import { Ionicons } from '@expo/vector-icons';


const products = () => {
  return (
    <View className='bg-slate-300 h-full w-full flex-row overflow-hidden'>
      <View style={styles.container} className='absolute  self-end bottom-0 right-0 z-0'>
        <Image
          source={require('../../../assets/images/blackLogo.png')}  
          style={styles.image}
          resizeMode="cover" 
          className='blur-sm'
        />
      </View>
      {/* navbar */}
      <View className='h-full absolute  z-50'>
        <Sidebar/>
      </View>

      {/* MAIN PAGE ITO HI hiiii */}
      <View className='w-full ml-0 md:ml-10 h-auto  overflow-y-scroll'>
        <Text>products</Text>
      </View>
    
    </View>
  )
}
const styles = StyleSheet.create({

  imageshrink: {
    height: 100,
    width: 100,
    resizeMode: 'fill',
    backgroundColor: '#000'
  }
})
export default products