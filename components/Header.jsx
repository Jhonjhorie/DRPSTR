import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const Header= () => {
  const [isFocused, setIsFocused] = useState(false);
  const animationValue = useSharedValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const animatedStyle = useAnimatedStyle(() => {

    const targetWidth = isFocused ? containerWidth * 0.8 : containerWidth * 0.2;
    return {
      width: withTiming(targetWidth, {
        duration: 350,
        easing: Easing.bezier(0.25, 0.5, 0.7, 0.94),
      }),
    };
  });

  return (
    <View 
    className="flex-row items-center max-h-20 px-16 py-12 bg-slate-300 sticky">
      {/* Website Name */}
      <View>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Image
              className="object-fit md:max-h-16 md:max-w-52 max-h-12 max-w-36 "
              source={require('../assets/images/BlackLongLogo.svg')}
            />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Search Bar and Button */}
      <View className="flex-row items-center ml-8 flex gap-4 sm:flex-auto justify-end" onLayout={handleLayout}>
        <View className="relative h-10 flex-row items-center  bg-slate-200 rounded-md pl-3 py-1">
          <Animated.View className="mr-2" style={animatedStyle}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#888"
              className="flex-1 text-black"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ outline: 'none' }}
              ellipsizeMode="tail"
              numberOfLines={1}
              textAlign='left'
            />
          </Animated.View>

          <TouchableOpacity className="w-10 h-10 px-2 justify-center flex self-center text-left bg-slate-200 hover:bg-slate-300 duration-300 rounded-r-md">
              <Ionicons name="search" size={20} color={isFocused ? "#9800FF" : "#555"} />
          </TouchableOpacity>
          
        </View>

        {/* Icons */}
        <View className="flex-row space-x-4">
          <Link href="/cart" asChild>
            <TouchableOpacity>
              <Ionicons name="cart" size={24} className='color-black hover:color-[--primary-color]' />
            </TouchableOpacity>
          </Link>
          <Link href="/account" asChild>
            <TouchableOpacity>
              <Ionicons name="chatbox-ellipses" size={24} className='color-black hover:color-[--primary-color]' />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Header;
