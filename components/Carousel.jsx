import React, { useState, useRef } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const carouselWidth = 500; // Set a fixed width for the carousel container
  const carouselHeight = 300; // Set a fixed height for the carousel container

  
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / carouselWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: index * carouselWidth, animated: true });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, images.length - 1);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIndex);
  };


  return (
    <View style={{ width: carouselWidth, height: carouselHeight}} className='relative rounded-md bg-gray-200 drop-shadow-lg group'>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={{ width: carouselWidth, height: carouselHeight }}>
            <Image source={typeof item.url === 'string' ? { uri: item.url } : item.url}   
            style={{ width: '100%', height: '100%' }}
            className='z-20 group-hover:scale-90 duration-300 transition-all left-0 absolute group-hover:left-24'
            resizeMode="contain"/>
            {item.product && (
             <Text className='absolute bottom-6 left-0 text-secondary-color text-8xl font-bold'>
                {item.product}
              </Text>
            )}
            {item.rate && (
              <Text className='absolute top-4 right-4 text-primary-color text-8xl font-bold'>
                {item.rate}
              </Text>
            )}
            {item.shop && (
              <Text className='absolute top-4 left-4 text-secondary-color text-2xl font-bold'>
                {item.shop}
              </Text>
            )}
            <Link
            href='/'
            className='flex flex-row absolute bottom-[-24px] group-hover:bottom-0 transition-all duration-300 right-8 bg-primary-color px-8 items-end justify-end gap-2 rounded-t-md'
            >
               <Text className=' text-secondary-color text-xl font-bold'>
                TAP TO DRIP</Text>
                <Ionicons name='cart' className='color-secondary-color' size={24}></Ionicons>
            </Link>
          </View>
        )}
      />
        <Image source={require('@/assets/images/LOGO.svg')}  style={{ width: '50%', height: '80%' }}
            className='-z-10 absolute left-3 top-0 opacity-30'
            resizeMode="contain"/>
      {/* Pagination Dots */}
      <View style={{ transform: [{ translateX: -((images.length * 10) / 2) }] }}
      className='left-16 absolute bottom-1 flex flex-row'
      >
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 4,
            }}
            className={`${activeIndex === index ? 'bg-primary-color' : 'bg-secondary-color'}`}
          />
        ))}
      </View>

      {/* Left Arrow */}
      {activeIndex > 0 && (
        <TouchableOpacity onPress={handlePrev} style={{top: '40%', left: -20}} className='absolute top-1/2 hover:opacity-100 opacity-80 transition-all duration-300 left-1 p-1 rounded-lg bg-secondary-color'>
          <Ionicons name="chevron-back" size={28} className='color-primary-color'/>
        </TouchableOpacity>
      )}

      {/* Right Arrow */}
      {activeIndex < images.length - 1 && (
        <TouchableOpacity onPress={handleNext} style={{top: '40%', right: -20}} className='absolute top-1/2 hover:opacity-100 opacity-80 transition-all duration-300  p-1 rounded-lg bg-secondary-color'>
          <Ionicons name="chevron-forward" size={28} className='color-primary-color' />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Carousel;
