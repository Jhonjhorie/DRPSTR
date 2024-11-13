import React, { useRef, useState } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CategoriesRibbon = ( {active} ) => {
  const categories = [
    {label:'All', icon: require('@/assets/images/categoriesIcon/grid.png'), value:'all'},
    {label:'T-Shirt', icon: require('@/assets/images/categoriesIcon/tshirt.png'), value:'tshirt'},
    {label:'Shirt', icon: require('@/assets/images/categoriesIcon/shirt.png'), value:'shirt'},
    {label:'Trouser', icon: require('@/assets/images/categoriesIcon/trousers.png'), value:'trouser'},
    {label:'Jacket', icon: require('@/assets/images/categoriesIcon/jacket.png'), value:'jacket'},
    {label:'Lanyard', icon: require('@/assets/images/categoriesIcon/lanyard.png'), value:'lanyard'},
    {label:'Shoes', icon: require('@/assets/images/categoriesIcon/running-shoe.png'), value:'shoe'},
    {label:'Sweater', icon: require('@/assets/images/categoriesIcon/sweater.png'), value:'sweater'},
    {label:'Dress', icon: require('@/assets/images/categoriesIcon/dress.png'), value:'dress'},
    {label:'Boxer', icon: require('@/assets/images/categoriesIcon/boxer.png'), value:'boxer'},
  ]
  const activeCat = (value) => active === value;

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerScreen = 9; 

  // Calculate the total number of items
  const maxIndex = categories.length - itemsPerScreen;

  // Scrolls to a given index
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToOffset({ offset: index * 100, animated: true });
    setCurrentIndex(index);
  };

  // Handles right navigation
  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(nextIndex);
  };

  // Handles left navigation
  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  return (
    <View style={{width: '100%'}}  className='bg-slate-50 rounded-lg p-1 flex-row flex items-center align-middle'>
        <Text className='text-3xl font-semibold'> CATEGORIES </Text>
        <Text className='text-3xl font-thin'> //</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', width:'82%' }} className='overflow-hidden'>
     
      {/* FlatList for categories */}
      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          
          <Link
            href='/'
            className={`${activeCat(item.value) ? 'bg-slate-200 opacity-100' : 'opacity-80'} flex flex-col mx-4 p-2 rounded-md group justify-center items-center hover:opacity-100`}
            style={{ width: 90, alignItems: 'center' }}
          >
            <Image
              source={typeof item.icon === 'string' ? { uri: item.icon } : item.icon}
              className='rounded-lg'
              style={{ width: 60, height: 70 }}
              resizeMode="contain"
            />
            <Text className='text-secondary-color text-xl'>{item.label}</Text>
          </Link>
        )}
        scrollEnabled={false} 
      />
      {/* Left Arrow */}
      {currentIndex > 0 && (
              <TouchableOpacity onPress={handlePrev} style={{ padding: 5 }} className='absolute left-0'>
               <Ionicons name="chevron-back" size={24} color="gray" />
             </TouchableOpacity>
      )}
      {/* Right Arrow */}
      {currentIndex < maxIndex && (
        <TouchableOpacity onPress={handleNext} style={{ padding: 5 }}  className='absolute right-0'>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
      )}
    </View>
    </View>
  );
};

export default CategoriesRibbon;
