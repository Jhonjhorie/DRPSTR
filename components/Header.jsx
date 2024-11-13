import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Header = () => {
  const [ChatVisible, setChat] = useState(false);
  const [selectChat, setSelect] = useState(null);
  const [minimized, setMinimized] = useState(false);
  
  const messages = Array.from({ length: 12 }, (_, i) => `Message ${i + 1}`);
  const animate = useRef(new Animated.Value(300)).current;
  const chatAnim = useRef(new Animated.Value(0)).current; 

  const toggleChatbox = () => {
    setChat(!ChatVisible);
  };

  const openChat = (message) => {
    if (selectChat !== message) {
      setSelect(message);
      setMinimized(false); 
      Animated.timing(animate, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeChat = () => {
    Animated.timing(animate, {
      toValue: 300,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setSelect(null));
  };

  const toggleChat = () => {
    setMinimized(!minimized);
    Animated.timing(chatAnim, {
      toValue: minimized ? 0 : 1, 
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-row items-center max-h-20 px-16 py-12 bg-slate-50 sticky top-0 z-30">
      {/* Search and Cart */}
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
      
      <View className="flex-row items-center ml-8 flex gap-4 sm:flex-auto justify-end">
        <View className="group relative h-10 flex-row items-center bg-slate-200 rounded-md pl-3 py-1 w-56 lg:hover:w-[60vw] md:hover:w-[50vw] hover:w-[40vw] duration-300 transition-all">
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            className="flex-1 text-black outline-none"
          />
          <TouchableOpacity className="w-10 h-10 px-2 justify-center flex self-center text-left bg-slate-200 hover:bg-slate-300 group-hover:bg-primary-color duration-300 transition-all rounded-r-md">
            <Ionicons name="search" size={20} className="group-hover:color-black color-primary-color duration-300 transition-all" />
          </TouchableOpacity>
        </View>

        <Link href="/cart" asChild>
          <TouchableOpacity>
            <Ionicons name="cart" size={24} className="color-black hover:color-[--primary-color]" />
          </TouchableOpacity>
        </Link>

        {/* Chatbox */}
        <TouchableOpacity onPress={toggleChatbox} >
          <Ionicons name="chatbox-ellipses" size={24} className="color-black hover:color-[--primary-color]" />
        </TouchableOpacity>

        {ChatVisible && (
          <View className="absolute top-10 right-0 w-60 bg-white shadow-lg rounded-lg z-50">
            <View className="flex-row justify-between items-center bg-white p-4 border-b border-gray-200">
              <Text className="text-lg font-bold">Messages</Text>
              <TouchableOpacity onPress={toggleChatbox}>
                <Ionicons name="close-outline" size={24} className="color-black hover:color-primary-color" />
              </TouchableOpacity>
            </View>

            <ScrollView className="max-h-60">
              {messages.slice(0, 10).map((message, index) => (
                <TouchableOpacity key={index} onPress={() => openChat(message)}className='hover:bg-slate-100'>
                  <View className="p-4 border-b border-gray-200 flex-row items-center">
                    <Image
                      source={{ uri: 'https://via.placeholder.com/80' }}
                      className="w-10 h-10 rounded ml-3"
                    />
                    <Text className="text-base ml-3">{message}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            {messages.length > 10 && !minimized && (
      <TouchableOpacity onPress={() => {/* Navigate to all messages view */}} className="p-2 bg-slate-100 hover:bg-slate-200 text-center">
        <Text className="text-center color-primary-color">See All</Text>
      </TouchableOpacity>
    )}
          </View>
        )}
      </View>

      {/* Bottom Message Input Area */}
      {selectChat && (
        <Animated.View
          style={{
            transform: [
              { translateY: chatAnim },
              {
                translateY: chatAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200], 
                }),
              },
            ],
            position: 'absolute',
            justifyContent: 'space-between',
            top: minimized ? 500 : 475,
            right: 65,
            width: '15.5%',
            height: minimized ? '50px' : 300,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderColor: '#ddd',
            padding: minimized ? 5 : 10,
          }}
          className="bg-white shadow-lg rounded-lg z-50"
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">{selectChat}</Text>
            <View className="flex-row">
              <TouchableOpacity onPress={toggleChat}>
                <Ionicons name={minimized ? "chevron-up-outline" : "remove-outline"} size={24} className="color-black hover:color-primary-color" />
              </TouchableOpacity>
              <TouchableOpacity onPress={closeChat}>
                <Ionicons name="close-outline" size={24} className="color-black hover:color-primary-color" />
              </TouchableOpacity>
            </View>
          </View>

          {!minimized && (
            <View className="flex-row items-center mt-2">
              <TextInput
                placeholder="Type a message..."
                className="flex-1 border rounded-lg p-2 border-gray-300"
                multiline
              />
              <TouchableOpacity className="ml-2 p-2 bg-blue-500 rounded-full">
                <Ionicons name="send" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
};

export default Header;
