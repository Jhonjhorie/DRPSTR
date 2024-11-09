import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/Carousel';
import AvatarCard from '@/components/home/avatarCard';


const HomeScreen = () => {
  const activePage = "Home";

  const currUser = {userId:'143143143', name:'Jolena Magdangal', avatarIcon: require('@/assets/images/samples/jolinapic.png'), title:'New Star' };
 
  const Images = [

    { product: "Viscount Blank", rate: 4.1, shop:'Viscount', url: require('@/assets/images/home/blackTshirt.png') },      { product: "Leather Mercedez", rate: 4.8, shop:'Aest', url:  require('@/assets/images/home/brownShoes.png') },
    
    { product: "Runner Jump", rate: 3, shop:'Nike', url:  require('@/assets/images/home/orangeShoes.png') },  
    { product: "Retro Vans", rate: 4.4, shop:'Vans', url:  require('@/assets/images/home/greyShoe.png') },  

  ];

  return (
    <View className=' h-full w-full absolute top-0'> 
    <SideBarNav />
      <ScrollView className='w-full absolute z-10 px-16 pt-4 pb-4 flex flex-col items-start justify-center'>
        {/* Top Sec */}
        <View className=' flex flex-row w-full bg-slate-700 h-[40%] '>
        <Carousel images={Images} className=''/>  
        <AvatarCard user={currUser} />
        </View>
        {/* Mid Sec */}
        {/* Scroll Sec */}
      
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
