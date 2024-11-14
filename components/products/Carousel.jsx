import React from 'react';
import { Dimensions, FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';
import useCarousel from './useCarousel'
import useMediaQueryChecker from '@/hooks/mediaQueryChecker';


const Carousel = ({ images }) => {
  const isMobile = useMediaQueryChecker();
  const { carouselWidth, activeIndex, flatListRef, handleScroll, handleNext, handlePrev } = useCarousel(images);
  const carouselHeight = isMobile ? 300 : 300;

  return (
    <View style={{ width: carouselWidth, height: carouselHeight}} className='relative rounded-md bg-slate-200 drop-shadow-lg group'>
      <FlatList
        ref={flatListRef}
        className='z-50'
        data={images}
        horizontal
        decelerationRate="normal"
        scrollEnabled={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={{ width: carouselWidth, height: carouselHeight }}>
            <Image source={typeof item.url === 'string' ? { uri: item.url } : item.url}   
            style={isMobile ? { width: '70%', height: '70%', left: 15, top: 50 } : 
            { width: '100%', height: '100%', left:0, top:0 }}
            className='z-20 group-hover:scale-90 duration-300 transition-all absolute group-hover:left-24'
            resizeMode="contain"/>
            {item.product && (
             <Text className={`absolute text-secondary-color ${isMobile ? 'text-5xl bottom-2 left-2' : 'text-8xl bottom-8 left-0'} text-8xl font-bold group-hover:text-5xl line-clamp-1 group-hover:text-primary-color  group-hover:z-50 duration-300 transition-all`}>
                {item.product}
              </Text>
            )}
            {item.rate && (
              <View className='flex flex-row absolute top-4 right-4 items-start'>
              <Text className={`${isMobile ? 'text-6xl' : 'text-8xl'} text-primary-color  font-bold`}>
                {item.rate}   
              </Text>
              {item.rate == 5 && (
                <Ionicons size={isMobile ? 35:90} className="color-primary-color mr-1" color={'#9800FF'} name="star" />
              )}
              {item.rate < 5 && item.rate != 0 && (
                <Ionicons size={isMobile ? 35:90} className="color-primary-color mr-1" color={'#9800FF'} name="star-half" />
              )}
              {item.rate == 0 && (
                <Ionicons size={isMobile ? 35:90}className="color-primary-color mr-1" color={'#9800FF'} name="star-outline" />
              )}
              </View>
            )}
            {item.shop && (
              <Link href='/'
              className=' absolute top-2 group-hover:top-0 left-0  hover:bg-primary-color bg-secondary-color p-3 group-hover:p-4 rounded-r-lg duration-300 transition-all '
              >
                <Text className=' group-hover:text-2xl text-lg font-bold text-slate-50 duration-300 transition-all '>
                {item.shop}
                </Text>
              </Link>
              
            )}
            <Link
            href='/'
            className='flex flex-row absolute bottom-[-24px] group-hover:bottom-0 transition-all duration-300 right-8 bg-secondary-color px-8 items-end justify-end gap-2 rounded-t-md hover:bg-primary-color'
            >
               <Text className='text-xl font-bold text-slate-50'>
                TAP TO DRIP</Text>
                <Ionicons name='cart' className='color-slate-50' size={24}></Ionicons>
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
      
        {!isMobile && (activeIndex > 0 && (
          <TouchableOpacity onPress={handlePrev} style={{top: '40%', left: -20}} className='absolute top-1/2 hover:opacity-100 opacity-80 transition-all duration-300 left-1 p-1 rounded-lg bg-secondary-color'>
            <Ionicons name="chevron-back" size={28} className='color-primary-color'/>
          </TouchableOpacity>
        ))}

        {/* Right Arrow */}
        {!isMobile && (activeIndex < images.length - 1 && (
          <TouchableOpacity onPress={handleNext} style={{top: '40%', right: -20}} className='absolute top-1/2 hover:opacity-100 opacity-80 transition-all duration-300  p-1 rounded-lg bg-secondary-color'>
            <Ionicons name="chevron-forward" size={28} className='color-primary-color' />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Carousel;
