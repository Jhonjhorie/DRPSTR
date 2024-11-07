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
            <Link
            href='/'
            className='flex flex-row absolute bottom-[-24px] group-hover:bottom-0 transition-all duration-300 right-4 bg-primary-color px-8 justify-end gap-2 rounded-t-md'
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
      <View style={{ position: 'absolute', bottom: 8, left: '50%', transform: [{ translateX: -((images.length * 10) / 2) }], flexDirection: 'row' }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 4,
              backgroundColor: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </View>

      {/* Left Arrow */}
      {activeIndex > 0 && (
        <TouchableOpacity onPress={handlePrev} style={{ position: 'absolute', top: '50%', left: 8, transform: [{ translateY: -16 }], padding: 8, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 16 }}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Right Arrow */}
      {activeIndex < images.length - 1 && (
        <TouchableOpacity onPress={handleNext} style={{ position: 'absolute', top: '50%', right: 8, transform: [{ translateY: -16 }], padding: 8, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 16 }}>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Carousel;
