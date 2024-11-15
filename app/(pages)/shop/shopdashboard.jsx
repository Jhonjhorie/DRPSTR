import { Animated, Text, View, TouchableOpacity,
     StyleSheet, Dimensions, Image, Platform 
    
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
          <View className='w-full h-[13%] p-2 align-middle lg:flex-row gap-3 md:gap-5'>

             {/* Dashboard*/}
            <View className='lg:w-1/2 w-full md:h-auto md:p-4 md:px-14  align-middle '>
              <Text className='text-3xl lg:text-5xl font-bold text-center lg:text-left'>Dashboard</Text>
              <View className='flex-row p-1 mt-5 gap-2 lg:gap-10 align-center justify-center  '>   
                <View className='w-[30%]  bg-slate-50 p-3 align-middle rounded-md '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-md md:text-lg  text-slate-800 '>Followers </Text>
                    <Ionicons className='text-violet-950' size={24} name='people' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-400'></View>
                   <Text className='text-[20px] lg:text-3xl font-semibold'>150,2k</Text>
                </View>
                <View className='w-[30%]  bg-slate-50 p-3 rounded-md '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-md md:text-lg text-slate-800 '>Orders </Text>
                    <Ionicons className='text-violet-950' size={24} name='file-tray-stacked' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-400'></View>
                    <Text className='text-[20px] lg:text-3xl font-semibold'>17,4k</Text>
                </View>
                <View 
                style={styles.thirdcol}
                className='w-[30%]  bg-slate-50 p-3 rounded-md '>
                  <View 
                   style={styles.thirdcol3}
                  className=' justify-between flex-row '>
                    <Text
                     className='text-sm md:text-lg text-slate-800 '>TOT Income </Text>
                    <Ionicons className='text-violet-950' size={24} name='logo-stackoverflow' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-400'></View>
                    <Text className='text-[20px] lg:text-3xl font-semibold'>150k</Text>
                </View>
              </View>
            </View>
            {/* User Shop profile */}
            <View className='w-full lg:w-1/2  h-full lg:items-start items-center lg:h-52 px-2 md:p-2  rounded-sm '
             >
              <View className='w-full md:w-[80%] lg:w-[90%] h-auto bg-slate-100 align-middle place-content-end md:place-content-center px-2  lg:h-full flex-row gap-2 rounded-md '>
                {/* SHOP NAME */}
                <View className='h-full w-[50%] md:w-[60%] rounded-md  md:p-2  '>
                  <View className=' h-auto w-full flex-row p-5  justify-center lg:justify-end right-2'>
                    <View className='h-full  flex justify-end right-3 p-2'>
                      <Text className='text-3xl text-slate-900 justify-end flex'>4.5</Text>
                      <Text className='lg:text-lg text-slate-800'>Overall Rating</Text>
                    </View>

                    <View
                    className='md:h-full md:w-[35%] h-[30%] w-[50%] flex md:justify-end md:self-end  self-center '
                    style={{ justifyContent: 'center', alignItems: 'center', height: 100, }}>
                      <Image
                        source={require('../../../assets/images/shop/Starrating.svg')}
                        style={{ width: '90%', height: '90%' }}
                        resizeMode="cover"
                        className='rounded-md  '
                      />
                    </View>  
                  </View>
                  
                  <Text className='text-lg lg:text-2xl text-center self-center lg:absolute bottom-5 font-semibold '>ST. MERCY APPAREL</Text>
                </View>
                <View 
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  className=' h-full w-[40%] md:h-full md:w-[38%] p-2  '>
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
  },
  thirdcol: {
    padding: Platform.select({
      android: 5
    }),
  },
  thirdcol3: {
    marginTop: Platform.select({
      android: 5, 
    }),
  }
})