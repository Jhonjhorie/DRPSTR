import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/Carousel';
import AvatarCard from '@/components/home/avatarCard';
import CategoriesRibbon from '@/components/products/categoriesRibbon';
import ProductsView from '@/components/products/productsView';


const HomeScreen = () => {
  const activePage = "Home";
  
  const Images = [

    { product: "Viscount Blank", rate: 4.1, shop:'Viscount', url: require('@/assets/images/home/blackTshirt.png') },      
    { product: "Leather Mercedez", rate: 4.8, shop:'Aest', url:  require('@/assets/images/home/brownShoes.png') },
    { product: "Runner Jump", rate: 3, shop:'Nike', url:  require('@/assets/images/home/orangeShoes.png') },  
    { product: "Retro Vans", rate: 4.4, shop:'Vans', url:  require('@/assets/images/home/greyShoe.png') },  

  ];
  const orderSample = Images;

  const currUser = {
    userId: '143143143',
    name: 'Jolena Magdangal',
    avatarIcon: require('@/assets/images/samples/jolinapic.png'),
    title: 'New Star',
    orders: orderSample  
  };

  return (
<<<<<<< HEAD
    <View className=' h-full w-full absolute top-0'> 
    <SideBarNav />
      <ScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{justifyContent: 'center'}}
      className='absolute z-10 px-16 pt-4 pb-4 
      flex flex-col bg-red-800'>
        {/* Top Sec */}
        <View style={{width: '100%', height:'100%', gap: 30}} className=' flex flex-row w-full h-[40%]'>
        <Carousel images={Images}/> 
        <View className='flex w-24 h-24 bg-fuchsia-900'></View>  
         
        </View>
        {/* Mid Sec */}
        {/* Scroll Sec */}
      </ScrollView>
=======
    <View className="h-full w-full">
      <SideBarNav />
      <View style={{ flex: 1 }} className="absolute top-0 left-0 w-full h-full">
        <ScrollView
          contentContainerStyle={{
            paddingLeft: 60,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 4,
            alignItems: 'center',
          }}
          className="z-10 w-full flex flex-col"
        >
          {/* Top Section */}
          <View style={{ width: '100%', gap: 30 }} className="flex flex-row mb-4">
            <Carousel images={Images} />
            <AvatarCard user={currUser} />
          </View>
  
          {/* Mid Section */}
          <View style={{ width: '100%', gap: 30 }} className="flex flex-row mb-4">
            <CategoriesRibbon active={'all'} />
          </View>
          {/* Add any additional sections here */}
          <ProductsView categories={'all'}/>
        </ScrollView>
      </View>
>>>>>>> upstream/HomePage_DemonLord
    </View>
  );
  
};

export default HomeScreen;
