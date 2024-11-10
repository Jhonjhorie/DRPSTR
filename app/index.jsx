import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/Carousel';

const HomeScreen = () => {
  const activePage = "Home";

  const Images = [
    { product: "Leather Mercedez", rate: 4.8, shop:'Aest', url:  require('@/assets/images/home/brownShoes.png') },
    { product: "Viscount Blank", rate: 4.1, shop:'Viscount', url: require('@/assets/images/home/blackTshirt.png') },  
    { product: "Runner Jump", rate: 3, shop:'Nike', url:  require('@/assets/images/home/orangeShoes.png') },  
    { product: "Retro Vans", rate: 4.4, shop:'Vans', url:  require('@/assets/images/home/greyShoe.png') },  
  ];

  return (
    <View className='h-full w-full absolute top-0'> 
      <SideBarNav />
      <ScrollView
        className='w-full absolute z-10 px-16 pt-4 pb-4'
        contentContainerStyle={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Top Section */}
        <View className='flex flex-row w-full h-[40%]'>
          <Carousel images={Images}/> 
          <View className='flex w-24 h-24 bg-fuchsia-900'></View>  
        </View>
        {/* Mid Section */}
        {/* Scroll Section */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
