import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Header = () => {
  const [ChatVisible, setChat] = useState(false);

  // Sample messages data for illustration
  const messages = Array.from({ length: 12 }, (_, i) => `Message ${i + 1}`);

  return (
    <View className="flex-row items-center max-h-20 px-16 py-12 bg-slate-50 sticky top-0 z-30">
      {/* Website Name */}
      <View>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Image
              className="object-fit md:max-h-16 md:max-w-52 max-h-12 max-w-36"
              source={require('../assets/images/BlackLongLogo.svg')}
            />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Search Bar and Button */}
      <View className="flex-row items-center ml-8 flex gap-4 sm:flex-auto justify-end">
        <View className="group relative h-10 flex-row items-center bg-slate-200 rounded-md pl-3 py-1 w-56 lg:hover:w-[60vw] md:hover:w-[50vw] hover:w-[40vw] duration-300 transition-all">
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            className="flex-1 text-black outline-none"
            ellipsizeMode="tail"
            numberOfLines={1}
            textAlign="left"
          />
          <TouchableOpacity className="w-10 h-10 px-2 justify-center flex self-center text-left bg-slate-200 hover:bg-slate-300 group-hover:bg-primary-color duration-300 transition-all rounded-r-md">
            <Ionicons name="search" size={20} className="group-hover:color-black color-primary-color duration-300 transition-all" />
          </TouchableOpacity>
        </View>

        {/* Icons */}
        <View className="flex-row space-x-4 relative">
          <Link href="/cart" asChild>
            <TouchableOpacity>
              <Ionicons name="cart" size={24} className="color-black hover:color-[--primary-color]" />
            </TouchableOpacity>
          </Link>

          {/* Chatbox Icon */}
          <TouchableOpacity onPress={() => setChat(!ChatVisible)}>
            <Ionicons name="chatbox-ellipses" size={24} className="color-black hover:color-[--primary-color]" />
          </TouchableOpacity>

          {/* Dropdown Chatbox */}
          {ChatVisible && (
            
            <View className="absolute top-10 right-0 w-60 bg-white shadow-lg rounded-lg z-50 ">
              {/* Sticky Header */}
              <View className="flex-row justify-between items-center bg-white p-4 border-b border-gray-200">
                <Text className="text-lg font-bold">Messages</Text>
                <TouchableOpacity onPress={() => setChat(false)}>
                  <Ionicons name="close-outline" size={24} className="color-black hover:color-primary-color" />
                </TouchableOpacity>
              </View>

              {/* Scrollable Messages */}
              <ScrollView className="max-h-60">
                {messages.slice(0, 10).map((message, index) => (
                  <View key={index} className="p-4 border-b border-gray-200 flex-row  items-center">
                     <Image
                    source={{ uri: 'https://via.placeholder.com/80' }}
                    className="w-10 h-10 rounded ml-3"/>
                    <Text className="text-base ml-3">{message}</Text>
                  </View>
                ))}
              </ScrollView>

              {/* See All Button */}
              {messages.length > 10 && (
                <TouchableOpacity className="p-2 bg-slate-100 hover:bg-slate-200 text-center">
                  <Text className="text-center color-primary-color">See All</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
