import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

const shopbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [widthAnim] = useState(new Animated.Value(50));

 // Function to toggle expansion when clicked
 const toggleExpansion = () => {
  Animated.timing(widthAnim, {
    toValue: expanded ? 50 : 200, 
    duration: 300, 
    useNativeDriver: false, 
  }).start();

  setExpanded(!expanded);
};
// MouseEnter
const handleMouseEnter = () => {
  Animated.timing(widthAnim, {
    toValue: 200, 
    duration: 300,
    useNativeDriver: false,
  }).start();
  setExpanded(true);
};

// MouseLeave
const handleMouseLeave = () => {
  if (expanded) {
    setTimeout(() => {
      Animated.timing(widthAnim, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setExpanded(false); 
    }, 500); 
  }
};

  return (
    <TouchableOpacity 
    onPress={toggleExpansion} 
    onMouseEnter={handleMouseEnter}
    className='h-full  '
    onMouseLeave={handleMouseLeave}
    >
      <Animated.View
        style={{
          backgroundColor: '#f1f5f9', 
          height: '100%',
          width: widthAnim, 
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

          {/* THIS IS THE ICONS OF NAVBAR */}
          <View className='h-auto w-full '>
            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1
                 mb-5
                 '>
                  <Ionicons name='stats-chart' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800'>Dashboard</Text>
                </View>
                </>
              ) : (
                <Ionicons name="stats-chart" 
                className=' self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1  mb-5'>
                  <Ionicons name='notifications' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800'>Notification</Text>
                </View>
                </>
              ) : (
                <Ionicons name="notifications" 
                className=' self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1  mb-5'>
                  <Ionicons name='pricetag' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800'>Products</Text>
                </View>
                </>
              ) : (
                <Ionicons name="pricetag" 
                className=' self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1  mb-5'>
                  <Ionicons name='people' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800'>Followers</Text>
                </View>
                </>
              ) : (
                <Ionicons name="people" 
                className=' self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1  mb-5'>
                  <Ionicons name='settings' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800'>Setting</Text>
                </View>
                </>
              ) : (
                <Ionicons name="settings" 
                className=' self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
            className='w-full'
            onPress={() => setExpanded(!expanded)}>
              {/* Conditional rendering for both Icon and Text */}
              {expanded ? (
                <>
                <View className='w-[90%] text-slate-800 duration-200 
                hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer
                 rounded-md flex-row self-center items-center ml-1 px-2 py-1  mb-5'>
                  <Ionicons name='home' color='#4E31AA' size={25} />
                  <Text className='px-5 text-md font-semibold text-slate-800  '>Home</Text>
                </View>
                </>
              ) : (
                <Ionicons name="home" 
                className='  self-center mb-5'
                color='#4E31AA' size={25} />
              )}
            </TouchableOpacity>

          </View>


      </Animated.View>
    </TouchableOpacity>
  )
}

export default shopbar