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
    <View style={{ width: carouselWidth, height: carouselHeight}} className='relative rounded-md bg-slate-200 drop-shadow-lg group overflow-hidden'>
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
            style={isMobile ? { width: '70%', height: '70%', left: 45, top: 50 } : 
            { width: '100%', height: '100%', top:0 }}
            className='z-20 group-hover:scale-90 duration-300 transition-all absolute left-0 group-hover:left-24'
            resizeMode="contain"/>
            {item.product && (
             <Text className={`absolute text-secondary-color ${isMobile ? 'text-4xl bottom-8 left-2' : 'text-8xl bottom-8 left-0'} font-bold group-hover:text-5xl line-clamp-1 group-hover:text-primary-color  group-hover:z-50 duration-300 transition-all`}>
                {item.product}
              </Text>
            )}
            {item.rate && (
              <View className={`flex flex-row absolute ${isMobile ? `top-6 right-14` : `top-6 right-32 `} items-start`}>
              <Text className={`${isMobile ? 'text-6xl' : 'text-8xl'} text-primary-color drop-shadow-2xl  font-bold`}>
                {item.rate.toFixed(1)}  
              </Text>
              {item.rate >= 4 && (
                 <Image source={require('@/assets/images/others/fillfull.png')} style={{ width: isMobile? '80%' :'100%', height: '150%' }} className={`-z-10 absolute ${isMobile?`top-[-1.5em] right-[-3.5em]`:`top-[-1.5em] right-[-7.5em]`}`}
                 resizeMode="contain"/>
              )}
              {item.rate < 4 && item.rate != 0 && (
               <Image source={require('@/assets/images/others/fillhalf.png')}  style={{ width: isMobile? '80%' :'100%', height: '150%' }} className={`-z-10 absolute ${isMobile?`top-[-1.5em] right-[-3.5em]`:`top-[-1.5em] right-[-7.5em]`}`}
               resizeMode="contain"/>
              )}
              {item.rate < 2 && (
                <Image source={require('@/assets/images/others/fillno.png')}  style={{ width: isMobile? '80%' :'100%', height: '150%' }} className={`-z-10 absolute ${isMobile?`top-[-1.5em] right-[-3.5em]`:`top-[-1.5em] right-[-7.5em]`}`}
                resizeMode="contain"/>
              )}
              </View>
            )}
            {item.shop && (
              <Link href='/'
              className={`absolute ${isMobile ? `rounded-lg left-2 ` : `rounded-r-lg group-hover:rounded-tr-none left-0`} top-2 group-hover:top-0   hover:bg-primary-color bg-secondary-color p-3 group-hover:p-4  duration-300 transition-all `}
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
        <Image source={require('@/assets/images/LOGO.svg')}  style={{ width: '50%', height: '50%' }}
            className='-z-10 absolute left-0 top-10 opacity-100 drop-shadow-none group-hover:drop-shadow-lg duration-300 transition-all group-hover:scale-110'
            resizeMode="contain"/>
        <Image source={require('@/assets/images/others/carouselframe.png')}  style={{ width: isMobile?'140%':'55%', height: isMobile?'205%':'120%' }}
            className={`-z-20 absolute ${isMobile?`left-[-5em] top-[-11.2em]`:`left-[-50px] top-[-1.8em]`}  opacity-50`}
            resizeMode="contain"/>
        <Image source={require('@/assets/images/home/mouth.svg')}  style={{ width: '15%', height: '50%' }}
            className={`-z-20 absolute ${isMobile?`left-24 top-16`:`right-10 top-[10em]`}opacity-50'`}
            resizeMode="contain"/>
            <Image source={require('@/assets/images/others/name.png')}  style={{ width: '15%', height: '50%' }}
            className='-z-20 absolute right-[-20px] top-48 rotate-[35deg] opacity-40 drop-shadow-2xl'
            resizeMode="contain"/>
            <Image source={require('@/assets/images/others/crown.png')}  style={{ width: '15%', height: '50%' }}
            className='-z-20 absolute left-72 top-0 opacity-70 drop-shadow-2xl'
            resizeMode="contain"/>
             <Image source={require('@/assets/images/home/heart.svg')}  style={{ width: '15%', height: '50%' }}
            className='-z-20 absolute right-44 top-40 opacity-100'
            resizeMode="contain"/>
      {/* Pagination Dots */}
      <View style={{ transform: [{ translateX: -((images.length * 10) / 2) }] }}
      className={`${isMobile?'left-44':'left-[27rem]'} absolute bottom-1 flex flex-row`}
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
            className={`${activeIndex === index ? 'bg-primary-color' : activeIndex === index-1 || activeIndex === index+1?'bg-white':'bg-secondary-color'} drop-shadow-lg`}
          />
        ))}
      </View>

      {/* Left Arrow */}
      
        {!isMobile && (activeIndex > 0 && (
          <TouchableOpacity onPress={handlePrev} style={{top: '40%', left: 0}} className='absolute top-1/2 hover:opacity-100 opacity-80 transition-all duration-300 left-1 p-1 rounded-r-md bg-secondary-color  z-50'>
            <Ionicons name="chevron-back" size={28} className='color-primary-color'/>
          </TouchableOpacity>
        ))}

        {/* Right Arrow */}
        {!isMobile && (activeIndex < images.length - 1 && (
          <TouchableOpacity onPress={handleNext} style={{top: '40%', right: 0}} className='absolute top-1/2 hover:opacity-100 opacity-80 just transition-all duration-300  p-1 rounded-l-md bg-secondary-color z-50'>
            <Ionicons name="chevron-forward" size={28} className='color-primary-color' />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Carousel;
