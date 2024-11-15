import { Animated, Text, View, TouchableOpacity,
     StyleSheet, Dimensions, Image 
    
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/shop/shopbar'
import { Ionicons } from '@expo/vector-icons';

const shopdashboard = () => {

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
      <View className='h-full absolute  z-50'>
        <Sidebar/>
      </View>

      {/* MAIN PAGE DASHBOARD */}
      <View className='w-full ml-0 md:ml-10 h-auto  overflow-y-scroll '>
        <View className='h-[200%] w-full '>
          <View className='w-full h-[13%] p-2 lg:flex-row gap-5'>
            <View className='w-1/2 h-full p-4 px-14 align-middle '>
              <Text className='text-5xl font-bold '>Dashboard</Text>
              <View className='md:flex-row p-1 mt-5 gap-10  '>   
                <View className='w-[30%]  bg-slate-50 p-3 rounded-md '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-lg  text-slate-800 '>Followers </Text>
                    <Ionicons className='text-violet-950' size={24} name='people' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>150,2k</Text>
                  </View>
                </View>
                <View className='w-[30%]  bg-slate-50 p-3 rounded-md '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-lg text-slate-800 '>Orders </Text>
                    <Ionicons className='text-violet-950' size={24} name='file-tray-stacked' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>17,4k</Text>
                  </View>
                </View>
                <View className='w-[30%]  bg-slate-50 p-3 rounded-md '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-lg text-slate-800 '>Total Income </Text>
                    <Ionicons className='text-violet-950' size={24} name='logo-stackoverflow' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>150,000k</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='w-1/2  h-52 p-2  rounded-sm '
            style={styles.profile}>
              <View className='w-[90%]  h-full flex-row gap-2 bg-slate-100 rounded-md '>
                {/* SHOP NAME */}
                <View className='h-full w-[60%] rounded-md  p-2 bg-slate-100 '>
                  <View className=' h-auto w-full flex-row p-5 '>
                    <View className='h-full  flex justify-end p-2'>
                      <Text className='text-3xl text-slate-900 justify-end flex'>4.5</Text>
                      <Text className='text-lg text-slate-800'>Overall Rating</Text>
                    </View>

                    <View
                    className='h-full w-[70%] '
                    style={{ justifyContent: 'center', alignItems: 'center', height: 100, }}>
                      <Image
                        source={require('../../../assets/images/shop/Starrating.svg')}
                        style={{ width: '50%', height: '100%' }}
                        resizeMode="cover"
                        className='rounded-md '
                      />
                    </View>  
                  </View>
                  
                  <Text className='text-3xl self-center absolute bottom-5 font-semibold '>SAINT MERCY APPAREL</Text>
                </View>
                <View 
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  className=' h-full w-[38%] p-2 '>
                  <Image
                    source={require('../../../assets/images/logosaintshop.jpg')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    className='rounded-md '
                  />
                </View>
               
              </View>
            </View>
          </View>
          <View>
            
            
                        


          </View>
        </View>
       
      </View>
      

    </View>
  )
}

export default shopdashboard

const styles = StyleSheet.create({

  imageshrink: {
    height: 100,
    width: 100,
    resizeMode: 'fill',
    backgroundColor: '#000'
  }
})