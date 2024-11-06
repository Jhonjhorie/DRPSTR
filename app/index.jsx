import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/Carousel';

const HomeScreen = () => {
  const activePage = "Home";
 
  const Images = [
    { caption: "Girl", url: require('@/assets/images/girl.png') },  
    { caption: "Boy", url:  require('@/assets/images/boy.png') },  
  ];

  return (
    <View className=' h-full w-full absolute top-0'> 
    <SideBarNav />
      <ScrollView className='w-full absolute z-10 px-16 pb-4 flex flex-col items-start justify-center'>
        {/* Top Sec */}
        <View className='bg-black w-full h-[40%]'>
        {/* <Carousel images={Images}/> */}
        </View>
        {/* Mid Sec */}
        {/* Scroll Sec */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
