import React, { useRef, useState } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '@/constants/categories';
import useCategories from './useCategories'

const CategoriesRibbonAnd = ( {active} ) => {
  const itemsPerScreen = 9;
  const { flatListRef, currentIndex, maxIndex, handleNext, handlePrev } = useCategories(
    itemsPerScreen,
    categories.length
  );
  const activeCat = (value) => active === value;

  return (
    <View style={{width: '100%'}}  className='bg-slate-50 rounded-lg p-1 flex-row flex items-center align-middle '>
        <Text className='text-sm font-semibold'> CATEGORIES </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center'}} className=' overflow-hidden flex-1'>
     
      {/* FlatList for categories */}
      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
            <Link
            href="/"
            className={`${
                activeCat(item.value) ? 'bg-slate-200 opacity-100' : 'opacity-80'
            }   flex mx-1 px-1 pt-1 rounded-md group hover:opacity-100 justify-center items-center gap-2`}
            style={{
                width: 60,   
                flexDirection: 'column', 
            }}
            >
            <Image
                source={typeof item.icon === 'string' ? { uri: item.icon } : item.icon}
                className="rounded-lg"
                style={{ width: 50, height: 30 }}
                resizeMode="contain"
            />
  
            <Text className="text-secondary-color text-sm text-center" >{item.label}</Text>
            </Link>
        )}
        />

    </View>
    </View>
  );
};

export default CategoriesRibbonAnd;
