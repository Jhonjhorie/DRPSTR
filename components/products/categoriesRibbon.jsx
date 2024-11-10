import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';

const CategoriesRibbon = () => {
  return (
    <View style={{width: '100%'}}  className='bg-slate-50 rounded-lg p-1 flex-row flex items-center align-middle'>
        <Text className='text-3xl font-bold'> CATEGORIES </Text>
        <Text className='text-3xl font-thin'> //</Text>
    </View>
  );
};

export default CategoriesRibbon;
