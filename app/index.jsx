import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import SideBarNav from '../components/BarNav';
import useMediaQueryChecker from '@/hooks/mediaQueryChecker';

const HomeScreen = () => {
  const activePage = "Home";
  const isMobile = useMediaQueryChecker();
  const Images = [

    { product: "Viscount Blank", rate: 4.1, shop:'Viscount', url: require('@/assets/images/home/blackTshirt.png') },      
    { product: "Leather Mercedez", rate: 4.8, shop:'Aest', url:  require('@/assets/images/home/brownShoes.png') },
    { product: "Runner Jump", rate: 3, shop:'Nike', url:  require('@/assets/images/home/orangeShoes.png') },  
    { product: "Retro Vans", rate: 4.4, shop:'Vans', url:  require('@/assets/images/home/greyShoe.png') },  

  ];
  const orderSample = Images;

 
  return (
    <View className="h-full w-full">
      <SideBarNav />
      <View style={{ flex: 1 }} className="absolute top-0 left-0 w-full h-full bg-slate-300">
      {isMobile && (
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
      )}

      </View>
      <View 
          style={{ width: '100%', gap: isMobile ? 10 : 30,
          flexDirection: isMobile ? 'column' :'row', }} 
          className="flex mb-4 items-center">
          </View>
    </View>
  );
  
};

export default HomeScreen;
