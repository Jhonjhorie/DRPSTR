import React, { useState, useRef } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';
import OrderCardAnd from '../order/orderCard.android';
import useMediaQueryChecker from '@/hooks/mediaQueryChecker';



const AvatarCardAnd = ({ user }) => {
  const isMobile = useMediaQueryChecker();
  return (
    <View className='flex bg-secondary-color rounded-md group drop-shadow-lg'
    style={{ width: '100%', height: 100 }}>
      <View className='flex flex-row gap-2 p-4 w-full justify-start '
       style={{ width: '100%', height: '100%' }}>
        <View className='flex flex-col gap-4 '
        style={{ width: '20%', height: '100%' }}
        >
            <Link href='/' className=' duration-300 transition-all bg-slate-800 '
            style={{ width: '100%', height: '100%' }}
            >
            <Image
                source={typeof user.avatarIcon === 'string' ? { uri: user.avatarIcon } : user.avatarIcon}
                style={{ width: '100%', height: '100%' }}
                className='bg-gray-200 drop-shadow-lg rounded-b-lg'
                resizeMode="contain"
            />
           </Link>
          </View>
        <View   style={{ width: '45%', height: '100%' }} className='flex flex-col justify-start'>
          <Text className='text-slate-50 text-lg font-bold'>{user.name}</Text>
          <Text style={{fontWeight: "100",}} className='text-slate-50 text-lg '>{user.title}</Text>
        </View>
        <View style={{ width: '50%', height: '100%' }} className='flex flex-col'>
        <Text className='text-primary-color absolute top-[-1em] text-md font-bold '>Orders:</Text> 
        <OrderCardAnd orders={user.orders}/>
        </View>
        </View>
    </View>
  )};

export default AvatarCardAnd;
