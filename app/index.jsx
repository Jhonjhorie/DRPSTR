import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, AvatarCard,
   currUser} from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/Carousel';

import CategoriesRibbon from '@/components/products/categoriesRibbon';

const HomeScreen = () => {
  const activePage = "Home";
 
  const Images = [
    { product: "Leather Mercedez", rate: 4.8, shop:'Aest', url:  require('@/assets/images/home/brownShoes.png') },
    { product: "Viscount Blank", rate: 4.1, shop:'Viscount', url: require('@/assets/images/home/blackTshirt.png') },  
    { product: "Runner Jump", rate: 3, shop:'Nike', url:  require('@/assets/images/home/orangeShoes.png') },  
    { product: "Retro Vans", rate: 4.4, shop:'Vans', url:  require('@/assets/images/home/greyShoe.png') },  

  ];

  return (
    <View className="h-full w-full">
      <SideBarNav />
      <View style={{ flex: 1 }} className="absolute top-0 left-0 w-full h-full bg-slate-300">
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
    </View>
  );
};

export default HomeScreen;
