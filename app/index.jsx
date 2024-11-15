import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SideBarNav from '../components/BarNav';
import Carousel from '@/components/products/Carousel';
import AvatarCard from '@/components/home/avatarCard';
import CategoriesRibbon from '@/components/products/categoriesRibbon';
import ProductsView from '@/components/products/productsView';
import { currUser, Images, orderSample } from '@/constants/sampleData';
import useMediaQueryChecker from '@/hooks/mediaQueryChecker';
import CategoriesRibbonAnd from '@/components/products/categoriesRibbon.android';
import ProductsViewAnd from '@/components/products/productsView.android';

const HomeScreen = () => {
  const activePage = "Home";
  const isMobile = useMediaQueryChecker();

  return (
    <View className="h-full w-full">
      <SideBarNav />
      <View style={{ flex: 1 }} className="absolute top-0 left-0 w-full h-full bg-slate-300">
        <ScrollView
          contentContainerStyle={{
            paddingLeft: isMobile ? 10 : 60,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 4,
            alignItems: 'center',
          }}
          className="z-10 w-full flex flex-col"
        >
          {/* Top Section */}
          <View 
          style={{ width: '100%', gap: isMobile ? 10 : 30,
          flexDirection: isMobile ? 'column' :'row' }} 
          className="flex mb-4 items-center">
            <Carousel images={Images} />
            <AvatarCard user={currUser} />
          </View>
  
          {/* Mid Section */}
          <View style={{ width: '100%', gap: 30, flexDirection: 'row' }} className="flex mb-4">
            {isMobile ? <CategoriesRibbonAnd active={'all'}/> : <CategoriesRibbon active={'all'} />}
            
          </View>
          {/* Add any additional sections here */}
          {isMobile ? <ProductsViewAnd categories={'all'} /> :<ProductsView categories={'all'}/>}
           
        </ScrollView>
      </View>
    </View>
  );
  
};

export default HomeScreen;
