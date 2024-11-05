import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const Header= () => {

  return (
    <View 
    className="flex-row items-center max-h-20 px-16 py-12 bg-slate-50 sticky top-0">
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
      <View className="flex-row items-center ml-8 flex gap-4 sm:flex-auto justify-end " >
        <View className="group relative h-10 flex-row items-center  bg-slate-200 rounded-md pl-3 py-1 w-56 lg:hover:w-[60vw] md:hover:w-[50vw] hover:w-[40vw] duration-300 transition-all">
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#888"
              className="flex-1 text-black"
              ellipsizeMode="tail"
              style={{outlineStyle: 'none' }}
              numberOfLines={1}
              textAlign='left'
            />
     
          <TouchableOpacity className="w-10 h-10 px-2 justify-center flex self-center text-left bg-slate-200 hover:bg-slate-300 group-hover:bg-primary-color duration-300 transition-all rounded-r-md ">
              <Ionicons name="search" size={20} className='group-hover:color-black color-primary-color duration-300 transition-all'/>
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
