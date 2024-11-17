import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SideBarNav from '../components/BarNav';
import useMediaQueryChecker from '@/hooks/mediaQueryChecker';
import Carousel from '@/components/products/Carousel';
import AvatarCard from '@/components/home/avatarCard';
import CategoriesRibbon from '@/components/products/categoriesRibbon';
import ProductsView from '@/components/products/productsView';
import CategoriesRibbonAnd from '@/components/products/categoriesRibbon.android';
import ProductsViewAnd from '@/components/products/productsView.android';
import { currUser, Images, orderSample } from '@/constants/sampleData';

const HomeScreen = () => {
  const activePage = "Home";
  const isMobile = useMediaQueryChecker();
  const images = [
    { product: "Viscount Blank", rate: 4.1, shop: 'Viscount', url: require('@/assets/images/home/blackTshirt.png') },
    { product: "Leather Mercedez", rate: 4.8, shop: 'Aest', url: require('@/assets/images/home/brownShoes.png') },
    { product: "Runner Jump", rate: 3, shop: 'Nike', url: require('@/assets/images/home/orangeShoes.png') },
    { product: "Retro Vans", rate: 4.4, shop: 'Vans', url: require('@/assets/images/home/greyShoe.png') },
  ];

  return (
    <View className="h-full w-full">
      <SideBarNav />
      <View style={{ flex: 1 }} className="absolute top-0 left-0 w-full h-full bg-slate-300">
        {isMobile ? (
          <View
            style={{
              position: 'absolute',
              bottom: 90,
              left: 0,
              width: '100%',
              backgroundColor: '#2d3748', // Slate-800
              padding: 16,
              zIndex: 50,
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Mobile Navbar</Text>
            {/* Add icons or buttons for mobile navigation */}
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{
              paddingLeft: isMobile ? 10 : 60,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 4,
              alignItems: 'center',
            }}
          >
            {/* Top Section */}
            <View style={{ width: '100%', gap: isMobile ? 10 : 30, flexDirection: isMobile ? 'column' : 'row' }} className="flex mb-4 items-center">
              <Carousel images={images} />
              <AvatarCard user={currUser} />
            </View>

            {/* Mid Section */}
            <View style={{ width: '100%', gap: 30, flexDirection: 'row' }} className="flex mb-4">
              {isMobile ? <CategoriesRibbonAnd active={'all'} /> : <CategoriesRibbon active={'all'} />}
            </View>

            {/* Products View */}
            {isMobile ? <ProductsViewAnd categories={'all'} /> : <ProductsView categories={'all'} />}
          </ScrollView>
        )}
      </View>

      {/* Bottom Section */}
      <View style={{ width: '100%', gap: isMobile ? 10 : 30, flexDirection: isMobile ? 'column' : 'row' }} className="flex mb-4 items-center">
        {/* Additional content or elements */}
      </View>
    </View>
  );
};

export default HomeScreen;
