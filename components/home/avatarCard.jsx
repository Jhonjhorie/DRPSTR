import React, { useState, useRef } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';
import OrderCard from '../order/orderCard';

const AvatarCard = ({ user }) => (
    <View className='flex bg-secondary-color w-80 h-full rounded-md group drop-shadow-lg'
    style={{ width: '35%', height: '98%' }}>
      <View className='flex flex-row gap-2 p-4 w-full justify-start '
       style={{ width: '100%', height: '100%' }}>
      <View className='flex flex-col gap-4'
      style={{ width: '40%', height: '100%' }}
      >
      
        <Link href='/' className='scale-100 duration-300 transition-all hover:scale-110'
        style={{ width: '100%', height: '100%' }}
        >
        <Image
            source={typeof user.avatarIcon === 'string' ? { uri: user.avatarIcon } : user.avatarIcon}
            style={{ width: '100%', height: '108%' }}
            className='z-20 duration-300 transition-all left-0 bottom-0 bg-gray-200 drop-shadow-lg rounded-b-lg   hover:scale-125'
            resizeMode="contain"
          />
           </Link>
          </View>
        <View   style={{ width: '100%', height: '100%' }} className='flex flex-col justify-start'>
          
          <Text className='text-slate-50 text-lg font-bold'>{user.name}</Text>
          <Text style={{fontWeight: "100",}} className='text-slate-50 text-lg '>{user.title}</Text>
          <Text className='text-primary-color text-lg font-bold '>Orders:</Text>   
          <OrderCard orders={user.orders}/>
        </View>
        </View>
    </View>
  );

export default AvatarCard;
