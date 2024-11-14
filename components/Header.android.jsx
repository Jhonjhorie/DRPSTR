import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HeaderAnd = () => {
  return (
    <View className="flex flex-row items-center px-4 pt-12 bg-slate-50 sticky top-0 z-30">
      {/* Search Bar */}
      <View
        style={{ flex: 1 }}
        className="flex flex-row items-center bg-slate-200 rounded-md pl-3 pr-0"
      >
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          className="flex-1 text-black"
          ellipsizeMode="tail"
          style={{ outlineStyle: 'none' }}
          numberOfLines={1}
          textAlign="left"
        />
        <TouchableOpacity className="p-2">
          <Ionicons name="search" size={20} className='color-secondary-color' />
        </TouchableOpacity>
      </View>

      {/* Icons Section */}
      <View
        style={{ marginLeft: 10 }}
        className="flex-row items-center justify-between gap-4"
      >
        <Link href="/cart" asChild>
          <TouchableOpacity>
            <Ionicons name="cart" size={24} color="#333" />
          </TouchableOpacity>
        </Link>
        <Link href="/account" asChild>
          <TouchableOpacity>
            <Ionicons name="chatbox-ellipses" size={24} color="#333" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default HeaderAnd;
