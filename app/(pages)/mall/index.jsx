import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import SideBarNav from '@/components/BarNav';
import RibbonTab from '@/components/ribbonTab';


const Mall = () => {
    const innerSideBar = [
        { label: "Featured", path: '/(pages)/mall', icon: 'star' },
        { label: "All Drip", path: '/(pages)/shop', icon: 'shirt' }, 
        { label: "Followed", path: '/(pages)/notification', icon: 'heart-circle' }, 
        { label: "Categories", path: '/(pages)/account', icon: 'apps' }, 
    ];
    const ribbonItems = [
      { label: "For You", path: '/(pages)/mall', icon: 'star' },
      { label: "Top Sales", path: '/(pages)/shop', icon: 'shirt' }, 
      { label: "Our Choice", path: '/(pages)/notification', icon: 'heart-circle' },
      
  ];

    return (
    <View className=' h-full w-full'> 
    <RibbonTab ribbonItems={ribbonItems} activeTab={"For You"}/>
    <SideBarNav innerSidebar={innerSideBar} activeName="Featured"/> 
      <ScrollView className='w-full absolute z-10 px-16 pb-4 flex flex-col items-start justify-center '>
        {/* Top Sec */}
        <View className='bg-black w-full h-[40%]'>
      
        </View>
        {/* Mid Sec */}
        {/* Scroll Sec */}
      </ScrollView>
    </View>
 
  );
};


export default Mall;