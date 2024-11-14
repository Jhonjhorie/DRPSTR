import { Animated, Text, View, TouchableOpacity,
     StyleSheet, Dimensions 
    
} from 'react-native';
import React, { useState } from 'react';
import Sidebar from '@/components/shop/shopbar'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Ionicons } from '@expo/vector-icons';


const shopdashboard = () => {

  return (
    <View className='bg-slate-300 h-full w-full flex-row overflow-hidden'>
     
      <View className='h-full absolute  z-50'>
        <Sidebar/>
      </View>
      <View className='w-full ml-0 md:ml-16 h-auto  overflow-y-scroll '>
        <View className='h-[200%] w-full '>
          <View className='w-full h-[13%] p-2 md:flex-row gap-5'>
            <View className='w-1/2 h-full p-4 px-16 align-middle '>
              <Text className='text-5xl font-bold '>Dashboard</Text>
              <View className='md:flex-row p-1 mt-5 gap-16  '>   
                <View className='w-[25%] h-20 '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-xl text-slate-800 '>Followers </Text>
                    <Ionicons className='text-violet-950' size={24} name='people' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>150,2k</Text>
                  </View>
                </View>
                <View className='w-[25%] h-20 '>
                  <View className=' justify-between flex-row '>
                    <Text className='text-xl text-slate-800 '>Orders </Text>
                    <Ionicons className='text-violet-950' size={24} name='file-tray-stacked' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>17,4k</Text>
                  </View>
                </View>
                <View className='w-[30%] h-20'>
                  <View className=' justify-between flex-row '>
                    <Text className='text-xl text-slate-800 '>Total Income </Text>
                    <Ionicons className='text-violet-950' size={24} name='logo-stackoverflow' ></Ionicons>
                  </View>
                  <View className='h-[0.3%] w-full bg-slate-500'>
                    <Text className='text-3xl font-semibold'>150,000k</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='w-1/2  h-auto bg-slate-400'>
            
          </View>
          </View>
          <View>
            <View className='w-[40%] rounded-md p-2  bg-slate-200  '>
              <Text>Bezier Line Chart</Text>
              <LineChart
              className = ''
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={500} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  alignSelf: 'center'
                }}
              />
            </View>
                        


          </View>
        </View>
        
        <Text className='text-center'>This ss the main pages</Text>
        <Text className=''>This is ssthe mainsss pagessssssssss</Text>
      </View>
      

    </View>
  )
}

export default shopdashboard

const styles = StyleSheet.create({})